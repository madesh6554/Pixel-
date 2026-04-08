import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageSquare } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay }
  });

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container contact-container">
        <motion.header className="section-header" {...fadeUp()}>
          <h2>Let's <span className="highlight">Connect</span></h2>
          <p>Ready to solve your growth problem? Reach out to us directly.</p>
        </motion.header>
        
        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info-side">
            <motion.div className="contact-item" {...fadeUp(0.1)}>
              <div className="contact-item-header">
                <Phone size={24} />
                <span>Phone</span>
              </div>
              <a href="tel:+919854238789" className="contact-item-value">+91 9854238789</a>
            </motion.div>

            <motion.div className="contact-item" {...fadeUp(0.2)}>
              <div className="contact-item-header">
                <Mail size={24} />
                <span>Email</span>
              </div>
              <a href="mailto:contactthepixelcompany@gmail.com" className="contact-item-value">
                contactthepixelcompany@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right Side: Primary CTAs */}
          <div className="contact-cta-side">
            <motion.div 
              className="contact-info-side" 
              style={{ gap: '1.5rem' }}
              {...fadeUp(0.3)}
            >
              <a href="https://wa.me/919854238789" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', gap: '0.8rem' }}>
                <MessageSquare size={20} />
                Connect on WhatsApp
              </a>
              <a href="mailto:contactthepixelcompany@gmail.com" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: '0.8rem' }}>
                <Send size={20} />
                Quick Inquiry
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width Map Section */}
      <motion.div 
        className="contact-map-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe 
          title="The Pixel Company Headquarters"
          className="contact-map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44155152565!2d76.88483321650393!3d11.011677491104445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;
