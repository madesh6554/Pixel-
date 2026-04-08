import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactPage.css';

const PIXEL_COLORS = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#60A5FA', '#F97316'];

const PixelBackground = () => {
  const pixels = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${(i * 2.6 + Math.sin(i * 1.3) * 8 + 100) % 100}%`,
      size: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 3,
      color: PIXEL_COLORS[i % PIXEL_COLORS.length],
      duration: 14 + (i % 10) * 1.4,
      delay: (i % 9) * 1.3,
      opacity: 0.14 + (i % 5) * 0.055,
    })), []);

  return (
    <div className="cp-pixel-bg" aria-hidden="true">
      <div className="cp-dot-grid" />
      <div className="cp-scanline cp-scanline-1" />
      <div className="cp-scanline cp-scanline-2" />
      {pixels.map(p => (
        <span
          key={p.id}
          className="cp-pixel"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            '--pp-dur': `${p.duration}s`,
            '--pp-delay': `${p.delay}s`,
            '--pp-opacity': p.opacity,
          }}
        />
      ))}
      <div className="cp-corner cp-corner-tl" />
      <div className="cp-corner cp-corner-tr" />
      <div className="cp-corner cp-corner-bl" />
      <div className="cp-corner cp-corner-br" />
    </div>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a short delay then mark as sent
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const INFO = [
    {
      icon: MapPin,
      label: 'Location',
      lines: [
        'NO.9, Dr.Jeyavarthanavelu nagar,',
        'Masakalipalayam Rd, Peelamedu,',
        'Argus Nagar, Coimbatore,',
        'Tamil Nadu 641002',
      ],
    },
    {
      icon: Phone,
      label: 'Phone',
      lines: ['+91 9854238789'],
      href: 'tel:+919854238789',
    },
    {
      icon: Mail,
      label: 'Email',
      lines: ['contactthepixelcompany@gmail.com'],
      href: 'mailto:contactthepixelcompany@gmail.com',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | The Pixel Company</title>
        <meta name="description" content="Get in touch with The Pixel Company. Talk to us about your brand, ideas, and goals. We're in Coimbatore, Tamil Nadu." />
      </Helmet>

      <Header />

      <main className="cp-page">
        <PixelBackground />

        {/* ── PAGE HEADER ── */}
        <section className="cp-hero section-padding">
          <div className="container">
            <motion.span className="brand-subtitle" {...fadeUp(0)}>Reach Out</motion.span>
            <motion.h1 {...fadeUp(0.1)}>
              Contact <span className="highlight">Us</span>
            </motion.h1>
            <motion.p className="cp-hero-sub" {...fadeUp(0.2)}>
              Talk to us if you have many ideas, plans, and dreams about your brand.
              Our expert team will help you sort out your ideas and bring them to life.
            </motion.p>
          </div>
        </section>

        {/* ── GET IN TOUCH ── */}
        <section className="cp-main section-padding">
          <div className="container">
            <div className="cp-grid">

              {/* LEFT — info */}
              <motion.div className="cp-info" {...fadeUp(0.1)}>
                <span className="brand-subtitle">Get In Touch</span>
                <h2>Let's <span className="highlight">Talk</span></h2>
                <p className="cp-info-desc">
                  Have questions about our services, courses, or just want to say hello?
                  Fill in the form or reach out directly — we're always happy to connect.
                </p>

                <div className="cp-info-cards">
                  {INFO.map(({ icon: Icon, label, lines, href }) => (
                    <div key={label} className="cp-info-card">
                      <div className="cp-info-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="cp-info-label">{label}</p>
                        {href ? (
                          <a href={href} className="cp-info-value cp-info-link">
                            {lines[0]}
                          </a>
                        ) : (
                          lines.map((l, i) => (
                            <p key={i} className="cp-info-value">{l}</p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT — form */}
              <motion.div className="cp-form-wrap" {...fadeUp(0.2)}>
                {submitted ? (
                  <div className="cp-success">
                    <div className="cp-success-icon">
                      <Send size={32} />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="cp-form" onSubmit={handleSubmit} noValidate>
                    <div className="cp-form-row">
                      <div className="cp-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="cp-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="cp-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="cp-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="cp-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary cp-submit"
                      disabled={loading}
                    >
                      {loading ? 'Sending…' : (
                        <>Send Message <ArrowRight size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FULL WIDTH MAP ── */}
        <motion.div 
          className="cp-full-map"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="The Pixel Company Headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3447!2d76.9990!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e796be615!2sPeelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1680000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* ── ADDRESS STRIP ── */}
        <div className="cp-address-strip">
          <div className="container">
            <MapPin size={15} />
            <span>
              NO.9, Dr.Jeyavarthanavelu nagar, Masakalipalayam Rd, Peelamedu,
              Argus Nagar, Coimbatore, Tamil Nadu 641002
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
