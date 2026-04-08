import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Zap, TrendingUp, BookOpen, X, ArrowRight } from 'lucide-react';
import './Cards.css';

const groundWork = [
  {
    title: 'Identity & Storytelling',
    tagline: 'Identity is the root of growth.',
    desc: 'Redesigning how the world perceives your brand.',
    details: 'Is your brand getting ignored? We help you define your voice, sharpen your story, and redesign your identity so people know exactly what you stand for and why you matter. We focus on connection, not just attention.',
    icon: <Fingerprint size={32} className="card-icon" />,
  },
  {
    title: 'Performance Systems',
    tagline: 'Campaigns engineered to convert.',
    desc: 'Data-driven funnels that scale sustainably.',
    details: 'We combine strategy, performance marketing, and system-based growth. We optimize your funnels, refine your targeting, and set up tracking systems that scale your revenue without burning your budget.',
    icon: <TrendingUp size={32} className="card-icon" />,
  },
  {
    title: 'Automation & Logic',
    tagline: 'Systems that run on intelligence.',
    desc: 'Automated workflows that save time and cost.',
    details: 'We organise your entire ecosystem. From automated content layers to internal workflow triggers, we build technical precision into your growth so you can move faster and grow consistently.',
    icon: <Zap size={32} className="card-icon" />,
  },
  {
    title: 'Creative Intelligence',
    tagline: 'Sharing the systems of tomorrow.',
    desc: 'Education for creators and entrepreneurs.',
    details: 'We believe creativity should be shared. Our programs help marketers and entrepreneurs learn branding, digital marketing, and AI-driven creativity—the same systems we use internally at the agency.',
    icon: <BookOpen size={32} className="card-icon" />,
  },
];

const Services = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setSelectedPillar(null);
  };

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <header className="section-header">
          <motion.span 
            className="brand-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Big Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Pixel? <span className="highlight">The Ground Work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Four ways we drive your growth through The Real Deal.
          </motion.p>
        </header>

        <div className="grid grid-4">
          {groundWork.map((pillar, i) => (
            <motion.article
              key={i}
              className="card"
              onClick={() => setSelectedPillar(pillar)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="card-icon-wrapper">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
              <button className="card-link">
                Learn the deal <ArrowRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal for "The Real Deal" Details */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={20} />
              </button>
              
              <div className="modal-header">
                <div className="modal-icon">{selectedPillar.icon}</div>
                <span className="modal-tagline">{selectedPillar.tagline}</span>
                <h2 className="modal-title">{selectedPillar.title}</h2>
              </div>

              <div className="modal-body">
                {selectedPillar.details}
              </div>

              <div className="modal-cta">
                <a href="#contact" className="btn btn-primary" onClick={closeModal}>
                  Get Started with this &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;

