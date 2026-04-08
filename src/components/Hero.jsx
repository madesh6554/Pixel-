import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import homeImg from '../assets/partners images/home umg.webp';

import PixelAssembler from './PixelAssembler';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">

        {/* ── Left: Text ── */}
        <div className="hero-text">
          <motion.span 
            className="hero-welcome-intro"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to
          </motion.span>

          <motion.h2
            className="hero-brand-name"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            THE <span className="highlight">PIXEL</span> COMPANY
          </motion.h2>

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span style={{ color: 'var(--accent-primary)', fontSize: '1.2em' }}>✦</span>
            Creative Intelligence & Automation Agency
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Growth is the goal.<br />
            Here every <span className="highlight">Pixel</span><br />
            delivers purpose.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Brands built to resonate. Campaigns engineered to convert.
            Growth systems that run on AI.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://wa.me/919045860876" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Start on WhatsApp
            </a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </motion.div>
        </div>

        {/* ── Right: Pixel Assembler Visual ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PixelAssembler
            src={homeImg}
            alt="The Pixel Company AI creative intelligence robot"
            className="hero-image"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
