import React from 'react';
import { NavLink } from 'react-router-dom';
import PixelAssembler from './PixelAssembler';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container nav-container">
        <NavLink to="/" className="logo-link" aria-label="The Pixel Company Home">
          <div className="logo-assembler">
            <PixelAssembler
              src="/logo.png"
              alt="The Pixel Company Logo"
              className="logo"
              replayInterval={30000}
              minimal
            />
          </div>
        </NavLink>
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          </ul>
        </nav>
        <NavLink to="/contact-us" className="btn header-cta" aria-label="Contact Us">
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
