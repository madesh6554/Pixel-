import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Globe } from 'lucide-react';
import './Footer.css';

// Custom SVG Icons for brands not in Lucide 1.0+
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              THE <span className="highlight">PIXEL</span> COMPANY
            </div>
            <p className="footer-description">
              A creative intelligence agency engineering high-growth brands through 
              strategic design, performance marketing, and AI-driven automation.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://wa.me/919045860876" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="footer-nav">
            <h4>Agency</h4>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#trusted">Brands</a>
              <a href="#career">Careers</a>
            </div>
          </nav>

          {/* Support Links */}
          <nav className="footer-nav">
            <h4>Support</h4>
            <div className="footer-links">
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </nav>

          {/* Contact Details */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <div className="footer-contact-item">
              <Mail className="contact-icon" size={18} />
              <span>contactthepixelcompany@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <MessageCircle className="contact-icon" size={18} />
              <span>+91 90458 60476</span>
            </div>
            <div className="footer-contact-item">
              <MapPin className="contact-icon" size={18} />
              <span>Coimbatore, Tamil Nadu<br />India - HQ</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} The Pixel Company. All rights reserved.</p>
          <p>Designed for Scale in Coimbatore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

