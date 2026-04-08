import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Code2, Target, Palette, Search, Share2, ArrowRight,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';
import './ServicesOverview.css';

const iconMap = { Globe, Code2, Target, Palette, Search, Share2 };

const ServicesOverview = () => {
  return (
    <div className="sov-page">
      <Helmet>
        <title>Our Services | The Pixel Company</title>
        <meta
          name="description"
          content="Explore The Pixel Company's full range of services — Digital Marketing, Web Development, Performance Marketing, Branding, SEO, and Social Media Marketing."
        />
      </Helmet>

      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="sov-hero section-padding">
          <div className="container">
            <motion.div
              className="sov-hero-inner"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="brand-subtitle">What We Do</span>
              <h1>
                Six ways we help your <span className="highlight">brand grow.</span>
              </h1>
              <p className="sov-hero-desc">
                We're a full-service creative intelligence agency. Every discipline below works
                in harmony — pick one or let us run the full playbook.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="sov-grid-section">
          <div className="container">
            <div className="sov-grid">
              {servicesData.map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.article
                    key={service.slug}
                    className="sov-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    style={{ '--service-color': service.color }}
                  >
                    <div className="sov-card-top">
                      <div className="sov-icon-wrap">
                        {Icon && <Icon size={30} />}
                      </div>
                      <span className="sov-number">0{i + 1}</span>
                    </div>

                    <h2 className="sov-card-title">{service.title}</h2>
                    <p className="sov-card-tagline">{service.tagline}</p>
                    <p className="sov-card-desc">{service.heroDesc}</p>

                    <div className="sov-offerings-preview">
                      {service.offerings.slice(0, 3).map((o, j) => (
                        <span key={j} className="sov-offering-chip">{o.title}</span>
                      ))}
                      {service.offerings.length > 3 && (
                        <span className="sov-offering-chip sov-more">
                          +{service.offerings.length - 3} more
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="sov-card-link"
                    >
                      Explore {service.title} <ArrowRight size={16} />
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="sov-cta section-padding">
          <div className="container">
            <motion.div
              className="cta-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>Not sure where to <span className="highlight">start?</span></h2>
              <p>
                Tell us about your brand and we'll map out the best combination of services
                to hit your goals.
              </p>
              <div className="sov-cta-btns">
                <a href="https://wa.me/919045860876" className="btn btn-primary">
                  Let's Talk on WhatsApp
                </a>
                <a href="mailto:contactthepixelcompany@gmail.com" className="btn btn-secondary">
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesOverview;
