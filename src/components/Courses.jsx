import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, BookOpen, Wrench, Bot, ArrowRight, Sparkles } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import './Courses.css';

const iconMap = { Lightbulb, BookOpen, Wrench, Bot };

const PIXEL_COLORS = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#60A5FA', '#F97316', '#A78BFA', '#34D399'];

const PixelBackground = () => {
  const pixels = useMemo(() =>
    Array.from({ length: 48 }, (_, i) => ({
      id: i,
      left: `${(i * 2.1 + Math.sin(i) * 5 + 100) % 100}%`,
      size: (i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 3),
      color: PIXEL_COLORS[i % PIXEL_COLORS.length],
      duration: 12 + (i % 10) * 1.5,
      delay: (i % 8) * 1.2,
      opacity: 0.15 + (i % 5) * 0.06,
    })), []);

  const scanLines = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      color: PIXEL_COLORS[i % PIXEL_COLORS.length],
      duration: 8 + i * 2,
      delay: i * 1.5,
    })), []);

  return (
    <div className="courses-pixel-bg" aria-hidden="true">
      <div className="courses-dot-grid" />
      {scanLines.map(s => (
        <div
          key={s.id}
          className="courses-scanline"
          style={{
            '--line-color': s.color,
            '--scan-duration': `${s.duration}s`,
            '--scan-delay': `${s.delay}s`,
          }}
        />
      ))}
      {pixels.map(p => (
        <span
          key={p.id}
          className="courses-pixel"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            '--px-duration': `${p.duration}s`,
            '--px-delay': `${p.delay}s`,
            '--px-opacity': p.opacity,
          }}
        />
      ))}
      <div className="courses-corner courses-corner-tl" />
      <div className="courses-corner courses-corner-tr" />
      <div className="courses-corner courses-corner-bl" />
      <div className="courses-corner courses-corner-br" />
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="courses-section section-padding">
      <PixelBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header className="section-header">
          <motion.span
            className="brand-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Pixel Academy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We <span className="highlight">Educate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Learn the exact systems we use internally.
          </motion.p>
        </header>

        <div className="courses-grid">
          {coursesData.map((crs, i) => {
            const Icon = iconMap[crs.icon];
            return (
              <motion.div
                key={crs.slug}
                className="ccv2-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Entire card is a link */}
                <Link to={`/courses/${crs.slug}`} className="ccv2" style={{ '--c-color': crs.color }}>

                  {/* Full-bleed image with inner animations */}
                  <div className="ccv2-img">
                    <img src={crs.image} alt={crs.title} loading="lazy" />
                    <div className="ccv2-img-overlay" />
                    <div className="ccv2-img-tint" style={{ background: `${crs.color}18` }} />

                    {/* Shimmer sweep across image */}
                    <div className="ccv2-img-shimmer" />

                    {/* Color scanline inside image */}
                    <div className="ccv2-img-scanline" style={{ '--img-scan-color': crs.color }} />

                    {/* Pixel grid overlay on image */}
                    <div className="ccv2-img-pixelgrid" />

                    {/* Floating badge */}
                    <div className="ccv2-badge" style={{ backgroundColor: crs.color }}>
                      {Icon && <Icon size={16} strokeWidth={2.5} style={{ color: 'white' }} />}
                    </div>
                  </div>

                  {/* Pixel corner accent */}
                  <div className="ccv2-pixel-accent" />

                  {/* Sparkle accent */}
                  <Sparkles size={14} className="ccv2-sparkle" style={{ color: crs.color }} />

                  {/* Bottom content */}
                  <div className="ccv2-content">
                    <div className="ccv2-color-bar" />
                    <h3 className="ccv2-title">{crs.title}</h3>
                    <p className="ccv2-tagline">{crs.tagline}</p>
                    <span className="ccv2-cta">
                      Explore Course <ArrowRight size={14} />
                    </span>
                  </div>

                  {/* Glow border */}
                  <div className="ccv2-glow-border" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
