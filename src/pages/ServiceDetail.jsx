import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Globe, Code2, Target, Palette, Search, Share2,
  ArrowRight, ArrowLeft,
  BarChart2, Calendar, Mail, PieChart, Megaphone, Camera,
  Layout, ShoppingCart, Smartphone, Zap, Settings,
  MousePointer, RefreshCw, TrendingUp, BarChart, Eye,
  Pen, BookOpen, MessageSquare, Star, Award, Shield,
  Link as LinkIcon, MapPin, FileText, Layers, Heart,
  Bell, Activity, Users, Play,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const iconMap = {
  Globe, Code2, Target, Palette, Search, Share2,
  BarChart2, Calendar, Mail, PieChart, Megaphone, Camera,
  Layout, ShoppingCart, Smartphone, Zap, Settings,
  MousePointer, RefreshCw, TrendingUp, BarChart, Eye,
  Pen, BookOpen, MessageSquare, Star, Award, Shield,
  Link: LinkIcon, MapPin, FileText, Layers, Heart,
  Bell, Activity, Users, Play,
};

const Icon = ({ name, size = 22 }) => {
  const C = iconMap[name];
  return C ? <C size={size} /> : null;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  // Prev / Next links
  const idx = servicesData.findIndex((s) => s.slug === slug);
  const prev = servicesData[idx - 1] || null;
  const next = servicesData[idx + 1] || null;

  return (
    <div className="sd-page">
      <Helmet>
        <title>{service.title} | The Pixel Company</title>
        <meta name="description" content={service.heroDesc} />
      </Helmet>

      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="sd-hero section-padding" style={{ '--service-color': service.color }}>
          <div className="container">
            <motion.div
              className="sd-hero-inner"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Link to="/services" className="sd-back-link">
                <ArrowLeft size={16} /> All Services
              </Link>

              <div className="sd-hero-icon">
                <Icon name={service.icon} size={36} />
              </div>

              <h1 className="sd-hero-title">
                <span className="highlight">{service.title}</span>
              </h1>

              <p className="sd-hero-tagline">"{service.tagline}"</p>

              <p className="sd-hero-desc">{service.heroDesc}</p>

              <div className="sd-hero-btns">
                <a href="https://wa.me/919045860876" className="btn btn-primary">
                  Start on WhatsApp
                </a>
                <a href="mailto:contactthepixelcompany@gmail.com" className="btn btn-secondary">
                  Send an Email
                </a>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div
              className="sd-hero-glow"
              style={{ background: service.color }}
            />
          </div>
        </section>

        {/* ── WHAT WE OFFER ── */}
        <section className="sd-section section-padding">
          <div className="container">
            <motion.header className="section-header" {...fadeUp()}>
              <span className="brand-subtitle">The Full Scope</span>
              <h2>What We <span className="highlight">Offer</span></h2>
              <p>Every engagement is tailored — here's the complete toolkit we bring.</p>
            </motion.header>

            <div className="sd-offerings-grid">
              {service.offerings.map((item, i) => (
                <motion.div
                  key={i}
                  className="sd-offering-card"
                  style={{ '--service-color': service.color }}
                  {...fadeUp(i * 0.07)}
                >
                  <div className="sd-offering-icon">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="sd-offering-title">{item.title}</h3>
                    <p className="sd-offering-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="sd-section sd-process-section section-padding">
          <div className="container">
            <motion.header className="section-header" {...fadeUp()}>
              <span className="brand-subtitle">How We Work</span>
              <h2>Our <span className="highlight">Process</span></h2>
              <p>Clear steps. No guesswork. You know exactly what's happening and when.</p>
            </motion.header>

            <div className="sd-process-list">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  className="sd-process-item"
                  style={{ '--service-color': service.color }}
                  {...fadeUp(i * 0.1)}
                >
                  <div className="sd-process-step">{step.step}</div>
                  <div className="sd-process-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="sd-process-connector" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PIXEL ── */}
        <section className="sd-section section-padding">
          <div className="container">
            <motion.header className="section-header" {...fadeUp()}>
              <span className="brand-subtitle">The Difference</span>
              <h2>Why Choose <span className="highlight">Pixel</span></h2>
              <p>Three things that separate how we do this from everyone else.</p>
            </motion.header>

            <div className="sd-why-grid">
              {service.whyPixel.map((item, i) => (
                <motion.div
                  key={i}
                  className="sd-why-card"
                  style={{ '--service-color': service.color }}
                  {...fadeUp(i * 0.12)}
                >
                  <div className="sd-why-icon">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sd-cta-section section-padding">
          <div className="container">
            <motion.div
              className="sd-cta-box"
              style={{ '--service-color': service.color }}
              {...fadeUp()}
            >
              <div className="sd-cta-icon">
                <Icon name={service.icon} size={32} />
              </div>
              <h2>
                Ready to grow with <span className="highlight">{service.title}?</span>
              </h2>
              <p>
                Tell us about your brand. We'll put together a plan and show you exactly
                what's possible.
              </p>
              <div className="sd-cta-btns">
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

        {/* ── PREV / NEXT ── */}
        <section className="sd-nav-section">
          <div className="container">
            <div className="sd-prev-next">
              {prev ? (
                <Link to={`/services/${prev.slug}`} className="sd-nav-link sd-nav-prev">
                  <ArrowLeft size={16} />
                  <span>
                    <small>Previous</small>
                    {prev.title}
                  </span>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/services/${next.slug}`} className="sd-nav-link sd-nav-next">
                  <span>
                    <small>Next</small>
                    {next.title}
                  </span>
                  <ArrowRight size={16} />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
