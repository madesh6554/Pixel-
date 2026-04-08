import React from 'react';
import { motion } from 'framer-motion';
import { Target, Palette, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Target size={36} />,
    label: 'Strategy First',
    tagline: 'Every move is backed by data.',
  },
  {
    icon: <Palette size={36} />,
    label: 'Design Next',
    tagline: 'Visuals that stop the scroll.',
  },
  {
    icon: <Zap size={36} />,
    label: 'AI Everywhere',
    tagline: 'Smarter systems. Faster results.',
  },
];

const CompanyInfo = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          Who We <span className="highlight">Are</span>
        </h2>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                flex: '1 1 200px',
                maxWidth: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '2rem 1rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{pillar.label}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{pillar.tagline}</p>
            </motion.div>
          ))}
        </div>

        <a href="/about" className="btn btn-secondary">Learn More About Us</a>
      </div>
    </section>
  );
};

export default CompanyInfo;
