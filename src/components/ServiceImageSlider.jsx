import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ServiceImageSlider.css';

const COLS  = 20;   // pixel columns
const ROWS  = 15;   // pixel rows
const BATCH = 5;    // blocks painted per animation frame (~60fps → ~1s transition)
const CYCLE = 4500; // ms each image is shown before transitioning

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ServiceImageSlider = ({ images = [], color = '#8B5CF6' }) => {
  const canvasRef  = useRef(null);
  const loadedImgs = useRef([]);
  const curIdxRef  = useRef(0);
  const rafRef     = useRef(null);
  const busy       = useRef(false);
  const [dotIdx, setDotIdx] = useState(0);

  /* ── Preload all images ── */
  useEffect(() => {
    loadedImgs.current = images.map((src) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      return img;
    });
  }, [images]);

  /* ── Fit canvas to its CSS size ── */
  const sizeCanvas = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    c.width  = c.offsetWidth;
    c.height = c.offsetHeight;
  }, []);

  /* ── Paint a full image to the canvas ── */
  const paintFull = useCallback((img) => {
    const c = canvasRef.current;
    if (!c || !img?.complete) return;
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  }, []);

  /* ── Mosaic reveal: scatter blocks of nextImg onto the canvas ── */
  const mosaic = useCallback((nextImg, onDone) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx      = c.getContext('2d');
    const W = c.width, H = c.height;
    const bw = W / COLS, bh = H / ROWS;
    const nw = nextImg.naturalWidth  || W;
    const nh = nextImg.naturalHeight || H;

    const order  = shuffle(Array.from({ length: COLS * ROWS }, (_, i) => i));
    let cursor = 0;

    const step = () => {
      for (let b = 0; b < BATCH && cursor < order.length; b++, cursor++) {
        const col = order[cursor] % COLS;
        const row = Math.floor(order[cursor] / COLS);
        // Draw the matching slice of the next image into this block
        ctx.drawImage(
          nextImg,
          (col / COLS) * nw, (row / ROWS) * nh,
          nw / COLS,         nh / ROWS,
          col * bw,          row * bh,
          bw,                bh
        );
      }
      if (cursor < order.length) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        onDone();
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  /* ── Initial paint ── */
  useEffect(() => {
    sizeCanvas();
    const img = loadedImgs.current[0];
    if (!img) return;
    if (img.complete) paintFull(img);
    else img.onload = () => paintFull(img);
  }, [images, sizeCanvas, paintFull]);

  /* ── Resize observer ── */
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ro = new ResizeObserver(() => {
      sizeCanvas();
      const img = loadedImgs.current[curIdxRef.current];
      if (img?.complete) paintFull(img);
    });
    ro.observe(c);
    return () => ro.disconnect();
  }, [sizeCanvas, paintFull]);

  /* ── Auto-cycle ── */
  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      if (busy.current) return;
      busy.current = true;
      const next = (curIdxRef.current + 1) % images.length;
      const img  = loadedImgs.current[next];
      const run  = () => mosaic(img, () => {
        curIdxRef.current = next;
        setDotIdx(next);
        busy.current = false;
      });
      if (img.complete) run(); else img.onload = run;
    }, CYCLE);
    return () => clearInterval(timer);
  }, [images, mosaic]);

  /* ── Manual dot click ── */
  const goTo = useCallback((idx) => {
    if (busy.current || idx === curIdxRef.current) return;
    busy.current = true;
    cancelAnimationFrame(rafRef.current);
    const img = loadedImgs.current[idx];
    const run = () => mosaic(img, () => {
      curIdxRef.current = idx;
      setDotIdx(idx);
      busy.current = false;
    });
    if (img.complete) run(); else img.onload = run;
  }, [mosaic]);

  return (
    <div className="sds-root">
      <div className="sds-frame" style={{ '--sds-color': color }}>
        <canvas ref={canvasRef} className="sds-canvas" />
      </div>
      <div className="sds-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`sds-dot ${i === dotIdx ? 'sds-dot--active' : ''}`}
            onClick={() => goTo(i)}
            style={i === dotIdx ? { background: color, boxShadow: `0 0 8px ${color}` } : {}}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceImageSlider;
