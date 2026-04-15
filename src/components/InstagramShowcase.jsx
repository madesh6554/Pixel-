import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, AtSign, Film } from 'lucide-react';
import './InstagramShowcase.css';

const reelModules = import.meta.glob('../assets/reels-showcase/*.mp4', {
  eager: true,
  import: 'default',
});

const reels = Object.entries(reelModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], i) => ({
    src,
    caption: path.split('/').pop().replace(/\.mp4$/, '').replace(/[-_]/g, ' '),
    id: i,
  }));

const AUTOPLAY_MS = 4000;
const VISIBLE_RADIUS = 2;

const InstagramShowcase = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const videoRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isHovered || prefersReducedMotion || reels.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % reels.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [isHovered, prefersReducedMotion]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      const offset = Math.abs(getOffset(i, active, reels.length));
      if (offset <= VISIBLE_RADIUS) {
        if (video.paused) video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  const go = (dir) => {
    setActive((i) => (i + dir + reels.length) % reels.length);
  };

  if (reels.length === 0) {
    return (
      <section className="ig-showcase section-padding">
        <div className="container ig-showcase-empty">
          <Film size={32} />
          <p>
            Drop Instagram reels as MP4 into{' '}
            <code>src/assets/reels-showcase/</code> and they'll appear here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="ig-showcase section-padding">
      <div className="container">
        <motion.div
          className="ig-showcase-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            From Our <span className="highlight">Studio</span>
          </h2>
          <p>
            A glimpse of recent work, campaigns and motion pieces from the Pixel team.
          </p>
          <a
            href="https://www.instagram.com/the.pixelcompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-handle"
          >
            <AtSign size={16} /> the.pixelcompany
          </a>
        </motion.div>

        <div
          className="ig-stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="ig-track">
            {reels.map((reel, i) => {
              const offset = getOffset(i, active, reels.length);
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= VISIBLE_RADIUS;
              const isActive = offset === 0;

              const style = prefersReducedMotion
                ? {
                    transform: `translateX(${offset * 110}%)`,
                    opacity: isActive ? 1 : 0,
                    zIndex: 10 - absOffset,
                  }
                : {
                    transform: `translateX(${offset * 55}%) translateZ(${-absOffset * 180}px) rotateY(${offset * -25}deg) scale(${isActive ? 1 : 0.85 - (absOffset - 1) * 0.15})`,
                    opacity: absOffset > VISIBLE_RADIUS ? 0 : isActive ? 1 : 0.75 - (absOffset - 1) * 0.35,
                    zIndex: 10 - absOffset,
                    pointerEvents: isActive ? 'auto' : 'none',
                  };

              return (
                <div
                  key={reel.id}
                  className={`ig-card ${isActive ? 'is-active' : ''}`}
                  style={style}
                  onClick={() => !isActive && setActive(i)}
                  aria-hidden={!isActive}
                >
                  {isVisible && (
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={reel.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      disablePictureInPicture
                    />
                  )}
                  <div className="ig-card-shade" />
                </div>
              );
            })}
          </div>

          {reels.length > 1 && (
            <>
              <button
                className="ig-nav ig-nav-prev"
                onClick={() => go(-1)}
                aria-label="Previous reel"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="ig-nav ig-nav-next"
                onClick={() => go(1)}
                aria-label="Next reel"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {reels.length > 1 && (
          <div className="ig-dots">
            {reels.map((_, i) => (
              <button
                key={i}
                className={`ig-dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to reel ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

function getOffset(index, active, total) {
  let diff = index - active;
  const half = total / 2;
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
}

export default InstagramShowcase;
