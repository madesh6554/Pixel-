import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

/**
 * High-Density Interactive Particle Field
 * Mimics a "water ripple" effect when the mouse moves.
 */

const SETTINGS = {
  SPACING: 18,       // Higher density to match the reference image
  MOUSE_RADIUS: 160, // Slightly larger influence
  PUSH_STRENGTH: 0.32, 
  FRICTION: 0.9,     
  EASE: 0.075,        // Slower return for a more 'fluid' water feel
  DOT_SIZE: 0.85,    // Smaller, more refined dots
  BASE_OPACITY: 0.15,
  BLUR_STRENGTH: '50px' 
};

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rafId;
    let particles = [];
    const mouse = { x: -1000, y: -1000 };

    // ── Resizing ──────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    // ── Particle Class ────────────────────────────────────────────────────
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ox = x; // origin x
        this.oy = y; // origin y
        this.vx = 0;
        this.vy = 0;
        this.radius = SETTINGS.DOT_SIZE;
        // Distribute colors across the grid based on screen position
        this.isAccent = Math.random() > 0.65; 
      }

      update() {
        // Distance from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < SETTINGS.MOUSE_RADIUS) {
          // Push away from mouse
          const force = (SETTINGS.MOUSE_RADIUS - dist) / SETTINGS.MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * SETTINGS.PUSH_STRENGTH;
          this.vy -= Math.sin(angle) * force * SETTINGS.PUSH_STRENGTH;
        }

        // Home-returning spring force
        this.vx += (this.ox - this.x) * SETTINGS.EASE;
        this.vy += (this.oy - this.y) * SETTINGS.EASE;

        // Friction/Velocity application
        this.vx *= SETTINGS.FRICTION;
        this.vy *= SETTINGS.FRICTION;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        // Opacity boost based on displacement from origin
        const displacement = Math.sqrt(
          Math.pow(this.ox - this.x, 2) + Math.pow(this.oy - this.y, 2)
        );
        const alpha = Math.min(SETTINGS.BASE_OPACITY + displacement * 0.1, 0.6);
        
        ctx.fillStyle = this.isAccent 
          ? `rgba(139, 92, 246, ${alpha})` // Purple
          : `rgba(236, 72, 153, ${alpha})`; // Pink
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ── Grid Setup ────────────────────────────────────────────────────────
    const init = () => {
      particles = [];
      const cols = Math.floor(canvas.width / SETTINGS.SPACING);
      const rows = Math.floor(canvas.height / SETTINGS.SPACING);
      const offsetX = (canvas.width - cols * SETTINGS.SPACING) / 2;
      const offsetY = (canvas.height - rows * SETTINGS.SPACING) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          particles.push(new Particle(
            offsetX + i * SETTINGS.SPACING, 
            offsetY + j * SETTINGS.SPACING
          ));
        }
      }
    };

    // ── Animation ─────────────────────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let p of particles) {
        p.update();
        p.draw();
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // ── Listeners ─────────────────────────────────────────────────────────
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="animated-bg-canvas" 
      aria-hidden="true" 
    />
  );
};

export default AnimatedBackground;

