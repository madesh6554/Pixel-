import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Users, Target, Rocket, Mail, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Problem from '../components/Problem';
import InstagramShowcase from '../components/InstagramShowcase';
import LiveInstagramFeed from '../components/LiveInstagramFeed';
import './AboutUs.css';
import aboutImage from '../assets/partners images/About-Us.webp';
import reelShahz from '../assets/reels/Shahz.mp4';
import reelDaniel from '../assets/reels/Daniel.mp4';
import reelKalai from '../assets/reels/Kalai.mp4';
import reelVeera from '../assets/reels/Veera.mp4';
import reelFathima from '../assets/reels/Fathima.mp4';

const pixelReels = [
  { src: reelShahz, name: 'Shahz', role: 'Founding Pixel' },
  { src: reelDaniel, name: 'Daniel', role: 'Design Pixel' },
  { src: reelKalai, name: 'Kalai', role: 'Growth Pixel' },
  { src: reelVeera, name: 'Veera', role: 'Motion Pixel' },
  { src: reelFathima, name: 'Fathima', role: 'Systems Pixel' },
];

const AboutUs = () => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | The Pixel Company Philosophy & Team</title>
        <meta name="description" content="Discover The Pixel Company philosophy. We blend human emotion with digital precision to build lasting brand identities." />
      </Helmet>

      <Header />

      <main>
        {/* 1. Cinematic Hero Header (Pure Visual) */}
        <section className="about-hero-full">
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={aboutImage} alt="The Pixel Company Vision" className="hero-full-img" />
            <div className="hero-overlay-gradient"></div>
          </motion.div>
        </section>

        {/* 2. Focused Philosophy Section */}
        <section className="philosophy-body-section section-padding">
          <div className="container small-container text-center">
            {/* Titles moved here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: '4rem' }}
            >
              <span className="philosophy-tag" style={{ 
                color: 'var(--accent-primary)', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2rem',
                fontSize: '0.8rem',
                display: 'block',
                marginBottom: '1rem'
              }}>
                The Real Deal
              </span>
              <h1 className="philosophy-title-large" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Our <span className="highlight">Philosophy</span>
              </h1>
            </motion.div>

            <motion.div 
              className="philosophy-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="large-text">
                The Pixel Company is a new-age digital marketing agency built at the intersection 
                of creativity and technology. We help brands grow, scale, and build lasting digital 
                identities through strategy, storytelling, and smart automation.
              </p>
              <div className="split-text">
                <p>
                  Every campaign we create blends human emotion with AI precision, crafted not just 
                  to look beautiful, but to make people feel, think, and act.
                </p>
                <p>
                  From personal branding to performance marketing, we deliver strategies that 
                  build influence, not noise. Our expertise spans social media management, content creation, 
                  Meta Ads, Google Ads, SEO, informer marketing, and digital storytelling—every detail 
                  aligned to help brands stay relevant, visible, and trusted.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. The Problems We Resolve */}
        <Problem />

        {/* 3. The Team Section */}
        <section className="team-section section-padding">
          <div className="container">
            <header className="section-header">
              <h2>We are the <span className="highlight">Pixels</span></h2>
              <p>A collective of specialist minds building for tomorrow.</p>
            </header>

            <div className="pixel-reels-strip">
              {pixelReels.map((reel, i) => (
                <motion.div
                  key={i}
                  className="reel-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <video
                    src={reel.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                  />
                  <div className="reel-info">
                    <h3 className="reel-name">{reel.name}</h3>
                    <p className="reel-role">{reel.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Instagram Showcase (cinematic 3D — hero reels) */}
        <InstagramShowcase />

        {/* 5. Live Instagram Feed (auto-synced grid) */}
        <LiveInstagramFeed />

        {/* 6. Final About CTA */}
        <section className="about-cta section-padding">
          <div className="container">
            <div className="cta-box">
              <h2>Work With Us & Think Beyond <span className="highlight">Trends</span></h2>
              <p style={{ maxWidth: '600px', margin: '1.5rem auto 2.5rem', color: 'var(--text-secondary)' }}>
                We focus on systems that stay relevant and ideas that evolve with your business. 
                Join hands with a team that builds for today and grows for tomorrow.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <a href="https://wa.me/919045860876" className="btn btn-primary">Let's Talk</a>
                <a href="/#services" className="btn btn-secondary">Explore Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
