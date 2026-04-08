import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Search, Map, Rocket, TrendingUp } from 'lucide-react';
import './Roadmap.css';

const steps = [
  {
    number: '01',
    icon: <Search size={22} />,
    title: 'Discovery & Audit',
    desc: 'We deep-dive into your brand, identify friction points, and audit your current systems to see what is holding you back.',
  },
  {
    number: '02',
    icon: <Map size={22} />,
    title: 'Growth Strategy',
    desc: 'We map out a focused 90-day roadmap. No fluff, just direct actions engineered to convert and scale your brand identity.',
  },
  {
    number: '03',
    icon: <Rocket size={22} />,
    title: 'Rapid Execution',
    desc: 'Your custom growth systems go live. From branding assets to AI automations, we move fast to capture market attention.',
  },
  {
    number: '04',
    icon: <TrendingUp size={22} />,
    title: 'Optimize & Scale',
    desc: 'The real deal begins. We optimize your funnels weekly, ensuring your results compound and your brand dominates.',
  },
];

const RoadmapStep = ({ step, index, isLast }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`roadmap-step ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="roadmap-node">
        <span className="step-number">{step.number}</span>
      </div>
      
      <div className="roadmap-content">
        <h3>
          <span className="icon">{step.icon}</span>
          {step.title}
        </h3>
        <p>{step.desc}</p>
      </div>
    </motion.div>
  );
};

const Founders = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="roadmap-section" ref={containerRef}>
      <div className="container">
        <header className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Success <span className="highlight">Roadmap</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The tactical steps we take to engineer your growth.
          </motion.p>
        </header>

        <div className="roadmap-container">
          {/* Tracking Line */}
          <div className="roadmap-line-track">
            <motion.div 
              className="roadmap-line-progress" 
              style={{ scaleY }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, i) => (
            <RoadmapStep 
              key={i} 
              step={step} 
              index={i} 
              isLast={i === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

