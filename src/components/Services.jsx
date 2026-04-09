import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Zap, TrendingUp, BookOpen, X, ArrowRight } from 'lucide-react';
import './Cards.css';

const groundWork = [
  {
    title: 'Identity & Storytelling',
    tagline: 'Identity is the root of growth.',
    desc: 'Redesigning how the world perceives your brand.',
    details: {
      intro: 'Is your brand getting ignored? We help you define your voice, sharpen your story, and redesign your identity so people know exactly what you stand for and why you matter. We focus on connection, not just attention.',
      points: [
        'Brand strategy & positioning — we craft a clear narrative that sets you apart from competitors.',
        'Visual identity design — logos, colour systems, typography, and brand guidelines built to last.',
        'Brand voice & messaging — consistent tone across every touchpoint, from social to sales decks.',
        'Story architecture — a compelling origin and mission story that makes audiences genuinely care.',
        'Audience alignment — we map your identity to what your ideal customer actually feels and needs.',
      ],
      closing: 'Most brands compete on features. We make yours compete on meaning — and meaning wins.',
    },
    icon: <Fingerprint size={32} className="card-icon" />,
  },
  {
    title: 'Performance Systems',
    tagline: 'Campaigns engineered to convert.',
    desc: 'Data-driven funnels that scale sustainably.',
    details: {
      intro: 'We combine strategy, performance marketing, and system-based growth to turn your ad spend into predictable revenue. We optimize your funnels, refine your targeting, and set up tracking systems that scale without burning your budget.',
      points: [
        'Full-funnel performance marketing — Meta, Google, and YouTube ads designed for measurable ROI.',
        'Conversion rate optimisation — landing pages, copy, and offers tested and refined continuously.',
        'Audience research & segmentation — finding the right people at the right stage of intent.',
        'Analytics & tracking setup — pixel events, GA4, dashboards so you always know what\'s working.',
        'Retargeting systems — warming cold audiences and re-engaging drop-offs to maximise every rupee.',
      ],
      closing: 'No guesswork. Just data-backed decisions that compound your results month over month.',
    },
    icon: <TrendingUp size={32} className="card-icon" />,
  },
  {
    title: 'Automation & Logic',
    tagline: 'Systems that run on intelligence.',
    desc: 'Automated workflows that save time and cost.',
    details: {
      intro: 'We organise your entire digital ecosystem. From automated content pipelines to internal workflow triggers, we build technical precision into your growth so you can move faster and scale consistently — without adding headcount.',
      points: [
        'CRM & pipeline automation — leads captured, nurtured, and followed up without manual effort.',
        'AI-powered content workflows — repurpose one piece of content across platforms automatically.',
        'Email & WhatsApp sequences — timed, behaviour-triggered communications that convert.',
        'Internal ops automation — repetitive tasks eliminated so your team focuses on high-value work.',
        'Tool integrations & Zapier/Make flows — connecting your entire stack into one seamless system.',
      ],
      closing: 'Manual work is a cost. Automation is an asset. We build the asset for you.',
    },
    icon: <Zap size={32} className="card-icon" />,
  },
  {
    title: 'Creative Intelligence',
    tagline: 'Sharing the systems of tomorrow.',
    desc: 'Education for creators and entrepreneurs.',
    details: {
      intro: 'We believe creativity should be accessible. Our education programs teach marketers, creators, and entrepreneurs the exact systems we use inside The Pixel Company — branding, digital marketing, AI-driven content, and more.',
      points: [
        'Structured courses — from brand fundamentals to advanced AI tools, built for practical outcomes.',
        'Live cohorts & workshops — real-time learning with feedback, community, and accountability.',
        'AI & prompt engineering training — master the tools that are reshaping creative industries.',
        'Marketing playbooks — step-by-step systems for growing audiences and generating leads.',
        'Creator economy strategy — turning knowledge, skill, and content into sustainable income.',
      ],
      closing: 'We don\'t just teach theory. We hand you the same systems we\'ve used to build brands from zero.',
    },
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
                <p className="modal-intro">{selectedPillar.details.intro}</p>
                <ul className="modal-points">
                  {selectedPillar.details.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
                <p className="modal-closing">{selectedPillar.details.closing}</p>
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

