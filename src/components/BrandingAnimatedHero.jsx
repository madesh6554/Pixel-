import React, { useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BrandingAnimatedHero.css';

import pixVideo from '../assets/partners images/services/PIX-WEB-1.mp4';

// Partner Logos
import l1 from '../assets/partners images/Ashwin Dental Care.webp';
import l2 from '../assets/partners images/Coimbatore Carnival.webp';
import l3 from '../assets/partners images/Inspira.webp';
import l4 from '../assets/partners images/Khora The Nail Studio.webp';
import l5 from '../assets/partners images/Resistance 60 (Group Training & Gym).webp';
import l6 from '../assets/partners images/Spice Club Fusion Restaurant.webp';
import l7 from '../assets/partners images/Vibaasi Silvers.webp';
import l8 from '../assets/partners images/What A Trip!.webp';

const baseLogos = [l1, l2, l3, l4, l5, l6, l7, l8];
const NUM_LOGOS = 45; // Generates a dense globe shape
const RADIUS = 280;   // Globe radius in pixels

// Golden Spiral logic to map 1D index to beautiful spherical coordinates
const getSphericalCoordinates = (index, total) => {
  const phi = Math.acos(1 - (2 * index) / total);
  const theta = Math.PI * (1 + Math.sqrt(5)) * index;
  
  // Convert standard radians to standard CSS rotations
  const rotateY = theta * (180 / Math.PI);
  const rotateX = (phi * (180 / Math.PI)) - 90;

  return { rotateY, rotateX };
};

const LogoItem = ({ src, index, total, scrollProgress }) => {
  // 1. Initial State: Deep Background Chaos
  const randomX = useMemo(() => (Math.random() - 0.5) * 5000, []);
  const randomY = useMemo(() => (Math.random() - 0.5) * 4000, []);
  const randomZ = useMemo(() => -2000 - Math.random() * 3000, []); // Much deeper start
  
  // Chaos rotations
  const randomRotX = useMemo(() => Math.random() * 720 - 360, []);
  const randomRotY = useMemo(() => Math.random() * 720 - 360, []);
  const randomRotZ = useMemo(() => Math.random() * 360, []);

  // Orbital Jitter (Floating effect)
  const jitterX = useMemo(() => (Math.random() - 0.5) * 40, []);
  const jitterY = useMemo(() => (Math.random() - 0.5) * 40, []);
  const jitterZ = useMemo(() => (Math.random() - 0.5) * 40, []);

  // 2. Target State: Ordered Sphere
  const sphere = useMemo(() => getSphericalCoordinates(index, total), [index, total]);

  // Transform chaos into center Cluster [0 -> 0.25]
  const x = useTransform(scrollProgress, [0, 0.2, 0.5, 0.8, 1], [randomX, 0, 0, 0, 0]);
  const y = useTransform(scrollProgress, [0, 0.2, 0.5, 0.8, 1], [randomY, 0, 0, -200, -400]);
  const z = useTransform(scrollProgress, [0, 0.2, 0.5, 0.8, 1], [randomZ, 0, 0, -400, -800]);

  // Morph chaotic rotations
  const rotX = useTransform(scrollProgress, [0, 0.2, 0.5], [randomRotX, randomRotX * 0.2, sphere.rotateX]);
  const rotY = useTransform(scrollProgress, [0, 0.2, 0.5], [randomRotY, randomRotY * 0.2, sphere.rotateY]);
  const rotZ = useTransform(scrollProgress, [0, 0.2, 0.4], [randomRotZ, 0, 0]);

  // Spherize: Push out to radius [0.2 -> 0.5]
  const zRadius = useTransform(scrollProgress, [0.2, 0.5], [0, RADIUS]);

  // Opacity: Fade in initially, then fade out on exit [0.75 -> 0.95]
  const opacity = useTransform(scrollProgress, [0, 0.05, 0.75, 0.95], [0, 1, 1, 0]);

  // Scale: start small, peak at globe, then scale up/out
  const scale = useTransform(scrollProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 0.8, 1, 1.3, 1.8]);

  return (
    <motion.div
      className="bah-logo-wrapper"
      style={{
        x,
        y,
        z,
        rotateX: rotX,
        rotateY: rotY,
        rotateZ: rotZ,
        scale,
        opacity,
      }}
    >
      <motion.div 
        className="bah-logo-push"
        style={{ z: zRadius }}
        animate={{ 
          x: [0, jitterX, 0], 
          y: [0, jitterY, 0],
          z: [zRadius.get(), zRadius.get() + jitterZ, zRadius.get()]
        }}
        transition={{ 
          duration: 3 + Math.random() * 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img src={src} alt="Brand Logo" className="bah-brand-logo" />
      </motion.div>
    </motion.div>
  );
};


const BrandingAnimatedHero = ({ service }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const logos = useMemo(() => {
    return Array.from({ length: NUM_LOGOS }).map((_, i) => baseLogos[i % baseLogos.length]);
  }, []);

  // Visual orchestrations map to scroll
  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.15], [0, -50]);
  
  // Scene scale and fade (pulled slightly forward so globe is gone before video rectangle completes)
  const sceneScale = useTransform(smoothProgress, [0.4, 0.7, 1], [0.7, 1, 1.4]);
  const sceneOpacity = useTransform(smoothProgress, [0.75, 0.92], [1, 0]);

  // Rising Content
  const contentY = useTransform(smoothProgress, [0.75, 1], [400, 0]);
  const contentOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);

  // Video core: nucleus (circle inside globe) → fullscreen reveal
  const [videoMounted, setVideoMounted] = useState(false);
  useMotionValueEvent(smoothProgress, "change", (v) => {
    if (v > 0.35 && !videoMounted) setVideoMounted(true);
  });

  const videoOpacity      = useTransform(smoothProgress, [0.45, 0.55, 0.95, 1.0], [0, 1, 1, 0]);
  const videoScale        = useTransform(smoothProgress, [0.45, 0.70, 0.85],       [0.18, 0.22, 1.0]);
  const videoBorderRadius = useTransform(smoothProgress, [0.70, 0.85],              ["50%", "0%"]);
  const videoZ            = useTransform(smoothProgress, [0.69, 0.71],              [3, 90]);

  return (
    <section ref={containerRef} className="bah-container-scroller">
      <div className="bah-sticky-wrapper">
        <Link to="/services" className="bah-back-link">
          <ArrowLeft size={16} /> All Services
        </Link>
        
        <motion.div 
          className="bah-title-container"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h1 className="bah-title"><span className="highlight">Build a Brand People Choose</span>, Not Just Notice.</h1>
          <p className="bah-subtitle">Keep scrolling to see our brand ecosystem unite globally. 🌐</p>
        </motion.div>

        {/* Cinematic video core — nucleus inside globe, then fullscreen reveal */}
        {videoMounted && (
          <motion.video
            className="bah-video-core"
            src={pixVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              opacity: videoOpacity,
              scale: videoScale,
              borderRadius: videoBorderRadius,
              zIndex: videoZ,
            }}
          />
        )}

        {/* 3D Render Port */}
        <div className="bah-scene">
          <motion.div 
            className="bah-globe"
            style={{ 
              scale: sceneScale,
              opacity: sceneOpacity,
            }}
            animate={{ rotateY: 360 }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            {logos.map((src, i) => (
              <LogoItem 
                key={i} 
                src={src} 
                index={i} 
                total={NUM_LOGOS} 
                scrollProgress={smoothProgress} 
              />
            ))}
          </motion.div>
        </div>

        {/* Rising Content Overlay */}
        <motion.div 
          className="bah-rising-content"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="bah-content-inner">
            <span className="bah-pretitle">The Pixel Approach</span>
            <h2 className="bah-main-heading">Crafting Digital <span className="highlight">Ecosystems</span></h2>
            <p className="bah-main-desc">
              We don't just design logos; we build living brand identities that evolve 
              with your customers. Scroll to explore how we transform your vision 
              into a global presence.
            </p>
            <div className="bah-scroll-indicator">
              <div className="mouse"></div>
              <span>Continue Exploring</span>
            </div>
          </div>
        </motion.div>
        
        <div className="bah-overlay-bottom"></div>
      </div>
    </section>
  );
};

export default BrandingAnimatedHero;
