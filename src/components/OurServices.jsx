import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Code2, Target, Palette, Search, Share2, ArrowRight,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './OurServices.css';

const iconMap = { Globe, Code2, Target, Palette, Search, Share2 };

const OurServices = () => {
  return (
    <section id="our-services" className="section-padding our-services-section">
      <div className="container">
        <header className="section-header">
          <motion.span
            className="brand-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="highlight">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Six disciplines. One agency. Every piece built to work together.
          </motion.p>
        </header>

        <div className="os-grid">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                className="os-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="os-icon-wrap"
                  style={{ '--service-color': service.color }}
                >
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="os-title">{service.title}</h3>
                <p className="os-tagline">{service.tagline}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="os-link"
                >
                  Explore <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="os-footer-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/services" className="btn btn-secondary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
