import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PixelAssembler = ({ src, className, alt, replayInterval = 0, minimal = false }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const [cycle, setCycle] = useState(0);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!replayInterval || !isAssembled) return;
    const id = setTimeout(() => {
      setIsAssembled(false);
      setCycle((c) => c + 1);
    }, replayInterval);
    return () => clearTimeout(id);
  }, [isAssembled, replayInterval]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      // 1. Setup dimensions
      const displayWidth = containerRef.current.offsetWidth || 520;
      const displayHeight = (img.height / img.width) * displayWidth;
      
      canvas.width = displayWidth;
      canvas.height = displayHeight;

      // 2. Sample Image Data (using a small buffer)
      const buffer = document.createElement('canvas');
      const bCtx = buffer.getContext('2d');
      const gridSize = 80; 
      buffer.width = gridSize;
      buffer.height = Math.round((img.height / img.width) * gridSize);
      
      bCtx.drawImage(img, 0, 0, buffer.width, buffer.height);
      const data = bCtx.getImageData(0, 0, buffer.width, buffer.height).data;

      // 3. Create Particles
      const particles = [];
      const cellWidth = canvas.width / buffer.width;
      const cellHeight = canvas.height / buffer.height;

      for (let y = 0; y < buffer.height; y++) {
        for (let x = 0; x < buffer.width; x++) {
          const i = (y * buffer.width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a > 50) { 
            particles.push({
              x: Math.random() * canvas.width * 2 - canvas.width * 0.5,
              y: Math.random() * canvas.height * 2 - canvas.height * 0.5,
              tx: x * cellWidth,
              ty: y * cellHeight,
              vx: 0,
              vy: 0,
              size: cellWidth * 0.9,
              color: `rgba(${r},${g},${b},${a / 255})`,
              friction: 0.85 + Math.random() * 0.1,
              ease: 0.05 + Math.random() * 0.05
            });
          }
        }
      }
      particlesRef.current = particles;

      // 4. Animation Loop
      let frame = 0;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let allArrived = true;

        particlesRef.current.forEach(p => {
          const dx = p.tx - p.x;
          const dy = p.ty - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0.5) {
            allArrived = false;
            p.vx += dx * p.ease;
            p.vy += dy * p.ease;
            p.vx *= p.friction;
            p.vy *= p.friction;
            p.x += p.vx;
            p.y += p.vy;
          } else {
            p.x = p.tx;
            p.y = p.ty;
          }

          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        frame++;
        if (!allArrived && frame < 300) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsAssembled(true);
        }
      };

      animate();
    };

    return () => cancelAnimationFrame(animationRef.current);
  }, [src, cycle]);

  return (
    <div ref={containerRef} className={`pixel-assembler-container ${className}`} style={{ position: 'relative', width: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          opacity: isAssembled ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
          mixBlendMode: minimal ? 'normal' : 'screen',
          filter: minimal ? 'none' : 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))'
        }}
      />
      {isAssembled && (
        minimal ? (
          <motion.img
            src={src}
            alt={alt}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.6 } }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto'
            }}
          />
        ) : (
          <motion.img
            src={src}
            alt={alt}
            className={className}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -18, 0]
            }}
            transition={{
              opacity: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 0 35px rgba(236, 72, 153, 0.35)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.2))'
            }}
          />
        )
      )}
    </div>
  );
};

export default PixelAssembler;
