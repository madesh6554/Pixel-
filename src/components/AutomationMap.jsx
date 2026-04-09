import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, Users, ShoppingCart, MessageSquare,
  Calendar, Megaphone, Bell, Activity,
} from 'lucide-react';
import './AutomationMap.css';

const W = 800, H = 520;
const CX = 400, CY = 260;
const BOX = 42;
const CR  = 16;

/* ── PCB path helpers ─────────────────────────────── */
const getPort = (nx, ny) => {
  const dx = nx - CX, dy = ny - CY;
  if (Math.abs(dx) > Math.abs(dy) * 1.05)
    return { x: dx > 0 ? CX + BOX : CX - BOX, y: CY + (dy > 6 ? 14 : dy < -6 ? -14 : 0), dir: 'h' };
  if (dy < 0)
    return { x: CX + (dx > 15 ? 12 : dx < -15 ? -12 : 0), y: CY - BOX, dir: 'v' };
  return   { x: CX + (dx > 15 ? 12 : dx < -15 ? -12 : 0), y: CY + BOX, dir: 'v' };
};

const makePCBPath = (nx, ny) => {
  const { x: px, y: py, dir } = getPort(nx, ny);
  const rdx = nx - px, rdy = ny - py;
  const sx = rdx > 0 ? 1 : -1, sy = rdy > 0 ? 1 : -1;
  const stub = dir === 'h' ? `M ${CX} ${CY} H ${px} V ${py}` : `M ${CX} ${CY} V ${py} H ${px}`;
  if (Math.abs(rdy) < CR) return `${stub} H ${nx}`;
  if (Math.abs(rdx) < CR) return `${stub} V ${ny}`;
  if (dir === 'h') {
    const midX = px + rdx * 0.5;
    return [stub, `H ${midX-sx*CR}`, `Q ${midX} ${py} ${midX} ${py+sy*CR}`,
            `V ${ny-sy*CR}`, `Q ${midX} ${ny} ${midX+sx*CR} ${ny}`, `H ${nx}`].join(' ');
  }
  const midY = py + rdy * 0.5;
  return [stub, `V ${midY-sy*CR}`, `Q ${px} ${midY} ${px+sx*CR} ${midY}`,
          `H ${nx-sx*CR}`, `Q ${nx} ${midY} ${nx} ${midY+sy*CR}`, `V ${ny}`].join(' ');
};

const getVias = (nx, ny) => {
  const { x: px, y: py, dir } = getPort(nx, ny);
  const rdx = nx - px, rdy = ny - py;
  const vias = [{ x: px, y: py }];
  if (Math.abs(rdy) < CR || Math.abs(rdx) < CR) return vias;
  if (dir === 'h') { const midX = px + rdx * 0.5; vias.push({ x: midX, y: py }, { x: midX, y: ny }); }
  else             { const midY = py + rdy * 0.5; vias.push({ x: px, y: midY }, { x: nx, y: midY }); }
  return vias;
};

/* ──────────────────────────────────────────────────
   Path length = Manhattan distance via port exit
   → used to normalise dot speed across all traces
────────────────────────────────────────────────── */
const pathLength = (nx, ny) => {
  const { x: px, y: py } = getPort(nx, ny);
  return Math.abs(px - CX) + Math.abs(py - CY)   // stub
       + Math.abs(nx - px) + Math.abs(ny - py);   // route
};

const DOT_SPEED = 65;  // px / s  — same for every dot
const MIN_DUR   = 4.5; // seconds — floor so very close nodes aren't instant

/* ──────────────────────────────────────────────────
   Node definitions — dur/begin computed below
────────────────────────────────────────────────── */
const RAW_NODES = [
  { id:0, Icon:Users,        title:'Lead & Sales Automation',   desc:'Evaluates interest, organises responses, integrates with your tools, and keeps your sales pipeline active without daily effort.', x:108, y:80,  tip:'right'     },
  { id:1, Icon:ShoppingCart, title:'E-Commerce & Product Sales', desc:'Reads your catalogue, understands preferences, and suggests the right items instantly.',                                          x:692, y:80,  tip:'left'      },
  { id:2, Icon:MessageSquare,title:'Customer Support Automation',desc:'Instant replies remove repetitive queries. Teams save nearly 10 hours every day while customers receive support within seconds.', x:758, y:260, tip:'left'      },
  { id:3, Icon:Calendar,     title:'Service Business Bots',      desc:'Scheduling flows fill slots, send reminders, and manage cancellations — saving around 4 hours daily and reducing no-shows.',      x:638, y:444, tip:'top-left'  },
  { id:4, Icon:Megaphone,    title:'Marketing Campaigning Bots', desc:'Smart workflows segment audiences, deliver updates, and scale promotions reliably across every channel.',                          x:400, y:462, tip:'top'        },
  { id:5, Icon:Bell,         title:'Internal Operations & HR',   desc:'Delivers instant policy access, handles updates, and routes requests correctly — keeping information organised.',                  x:162, y:444, tip:'top-right' },
  { id:6, Icon:Activity,     title:'Hybrid Human + Bot Handover',desc:'Detects when human help is needed, escalates instantly, and maintains context — making support faster and more reliable.',        x:42,  y:260, tip:'right'     },
];

/* Compute durations (proportional to path length → equal speed)
   then stagger begin times so arrivals are exactly ARRIVAL_GAP apart */
const ARRIVAL_GAP = 2.2; // seconds between consecutive first-arrivals

const durations = RAW_NODES.map(n => Math.max(MIN_DUR, pathLength(n.x, n.y) / DOT_SPEED));
const maxDur    = Math.max(...durations);

const NODES = RAW_NODES.map((n, i) => ({
  ...n,
  dur:   +durations[i].toFixed(2),
  begin: +(maxDur + i * ARRIVAL_GAP - durations[i]).toFixed(2),
}));

/* ──────────────────────────────────────────────────
   Auto-highlight constants
────────────────────────────────────────────────── */
const ARRIVAL_FRAC  = 0.88;  // show when dot is in last 12 % of its cycle
const SHOW_DURATION = 3500;  // ms tooltip stays visible (enough time to read)
const GLOBAL_GAP    = 3200;  // ms minimum between any two activations
const TICK_MS       = 120;   // poll interval

/* ══════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════ */
const AutomationMap = ({ color = '#F97316' }) => {
  const [manualHover, setManualHover] = useState(null);
  const [autoActive,  setAutoActive]  = useState(null);
  const mountTime      = useRef(performance.now());
  const lastActivation = useRef(0);
  const hideTimers     = useRef({});

  useEffect(() => {
    const tick = () => {
      if (manualHover !== null) return;          // manual takes over

      const now     = performance.now();
      if (now - lastActivation.current < GLOBAL_GAP) return; // global cooldown

      const elapsed = (now - mountTime.current) / 1000;

      for (const n of NODES) {
        const sinceBegin = elapsed - n.begin;
        if (sinceBegin < 0) continue;

        const cyclePos  = sinceBegin % n.dur;
        const arriving  = cyclePos >= n.dur * ARRIVAL_FRAC;
        if (!arriving) continue;

        // Fire!
        lastActivation.current = now;
        setAutoActive(n.id);

        if (hideTimers.current[n.id]) clearTimeout(hideTimers.current[n.id]);
        hideTimers.current[n.id] = setTimeout(
          () => setAutoActive(prev => (prev === n.id ? null : prev)),
          SHOW_DURATION
        );
        break; // one at a time
      }
    };

    const id = setInterval(tick, TICK_MS);
    return () => {
      clearInterval(id);
      Object.values(hideTimers.current).forEach(clearTimeout);
    };
  }, [manualHover]);

  const isActive = id =>
    manualHover !== null ? manualHover === id : autoActive === id;

  return (
    <div className="amap-root">
      <div className="amap-grid" />

      <svg className="amap-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="dotGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="4.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {NODES.map(n => <path key={n.id} id={`ap${n.id}`} d={makePCBPath(n.x, n.y)} />)}
        </defs>

        {/* Dim traces */}
        {NODES.map(n => (
          <use key={`b${n.id}`} href={`#ap${n.id}`} fill="none"
            stroke="rgba(249,115,22,0.16)" strokeWidth="1"
            strokeLinecap="square" strokeLinejoin="miter" />
        ))}

        {/* Active trace glow */}
        {NODES.map(n => isActive(n.id) && (
          <g key={`g${n.id}`}>
            <use href={`#ap${n.id}`} fill="none" stroke={color} strokeWidth="6" opacity="0.18" filter="url(#lineGlow)" />
            <use href={`#ap${n.id}`} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
          </g>
        ))}

        {/* Via pads */}
        {NODES.map(n => getVias(n.x, n.y).map((v, i) => (
          <circle key={`v${n.id}-${i}`} cx={v.x} cy={v.y} r="4" fill="#09090f"
            stroke={isActive(n.id) ? color : 'rgba(249,115,22,0.28)'} strokeWidth="1.5" />
        )))}

        {/* Endpoint pads */}
        {NODES.map(n => (
          <circle key={`p${n.id}`} cx={n.x} cy={n.y} r="5" fill="#09090f"
            stroke={isActive(n.id) ? color : 'rgba(249,115,22,0.28)'} strokeWidth="1.5" />
        ))}

        {/* Traveling dots */}
        {NODES.map(n => (
          <circle key={`d${n.id}`} r="4" fill={color} filter="url(#dotGlow)">
            <animateMotion dur={`${n.dur}s`} begin={`${n.begin}s`} repeatCount="indefinite">
              <mpath href={`#ap${n.id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* Center node */}
      <div className="amap-center" style={{ '--ac': color }}>
        <div className="amap-center-icon"><Zap size={28} /></div>
        <span className="amap-center-title">Automation</span>
        <span className="amap-center-sub">The Pixel Co.</span>
      </div>

      {/* Icon nodes */}
      {NODES.map(n => (
        <div
          key={n.id}
          className={`amap-node amap-node--${n.tip}${isActive(n.id) ? ' amap-node--on' : ''}`}
          style={{ left:`${(n.x/W)*100}%`, top:`${(n.y/H)*100}%`, '--ac': color }}
          onMouseEnter={() => setManualHover(n.id)}
          onMouseLeave={() => setManualHover(null)}
        >
          <div className="amap-node-box"><n.Icon size={22} /></div>
          <span className="amap-node-label">{n.title}</span>
          <div className="amap-tooltip">
            <strong>{n.title}</strong>
            <p>{n.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutomationMap;
