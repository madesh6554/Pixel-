import React from 'react';
import './TrustedBy.css';

import spiceClub from '../assets/partners images/Spice Club Fusion Restaurant.webp';
import ashwinDental from '../assets/partners images/Ashwin Dental Care.webp';
import vibaasi from '../assets/partners images/Vibaasi Silvers.webp';
import khora from '../assets/partners images/Khora The Nail Studio.webp';
import whatATrip from '../assets/partners images/What A Trip!.webp';
import inspira from '../assets/partners images/Inspira.webp';
import resistance from '../assets/partners images/Resistance 60 (Group Training & Gym).webp';
import coimbatoreCarnival from '../assets/partners images/Coimbatore Carnival.webp';

const partners = [
  { src: spiceClub,        name: 'Spice Club Fusion Restaurant' },
  { src: ashwinDental,     name: 'Ashwin Dental Care' },
  { src: vibaasi,          name: 'Vibaasi Silvers' },
  { src: khora,            name: 'Khora The Nail Studio' },
  { src: whatATrip,        name: 'What A Trip!' },
  { src: inspira,          name: 'Inspira' },
  { src: resistance,       name: 'Resistance 60 — Group Training & Gym' },
  { src: coimbatoreCarnival, name: 'Coimbatore Carnival' },
];

const PartnerLogo = ({ src, name }) => (
  <figure className="partner-logo">
    <img src={src} alt={`${name} — The Pixel Company client logo`} loading="lazy" />
    <figcaption>{name}</figcaption>
  </figure>
);

const TrustedBy = () => {
  return (
    <section className="trusted-section" aria-label="Trusted by fast-growing brands">
      <div className="container">
        <p className="trusted-label">Trusted by fast-growing brands</p>
      </div>
      <div className="marquee-container" aria-hidden="true">
        <div className="marquee-content">
          {partners.map((p) => <PartnerLogo key={p.name} src={p.src} name={p.name} />)}
          {/* Duplicated for seamless loop */}
          {partners.map((p) => <PartnerLogo key={`dup-${p.name}`} src={p.src} name={p.name} />)}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
