import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Grid3x3, Bookmark, UserSquare2, BadgeCheck } from 'lucide-react';
import './LiveInstagramFeed.css';

const BEHOLD_WIDGET_ID = import.meta.env.VITE_BEHOLD_WIDGET_ID || '';
const BEHOLD_SCRIPT_SRC = 'https://w.behold.so/widget.js';

const PROFILE = {
  handle: 'the.pixelcompany',
  displayName: 'The Pixel Company',
  bio: [
    'Branding · Motion · Web · Content',
    'Systems that stay relevant. Ideas that evolve.',
    'Chennai · India',
  ],
  websiteLabel: 'thepixelcompany.in',
  websiteHref: 'https://www.instagram.com/the.pixelcompany/',
  stats: {
    posts: '120+',
    followers: '5.2K',
    following: '180',
  },
  avatarLetter: 'P',
};

const LiveInstagramFeed = () => {
  useEffect(() => {
    if (!BEHOLD_WIDGET_ID) return;
    if (document.querySelector(`script[src="${BEHOLD_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = BEHOLD_SCRIPT_SRC;
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="ig-profile section-padding">
      <div className="container">
        <motion.div
          className="ig-profile-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <header className="ig-profile-head">
            <div className="ig-avatar-ring">
              <div className="ig-avatar">{PROFILE.avatarLetter}</div>
            </div>

            <div className="ig-profile-info">
              <div className="ig-profile-top">
                <h3 className="ig-handle-text">
                  {PROFILE.handle}
                  <BadgeCheck size={18} className="ig-verified" />
                </h3>
                <a
                  href={`https://www.instagram.com/${PROFILE.handle}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-follow-btn"
                >
                  Follow
                </a>
                <a
                  href={`https://www.instagram.com/${PROFILE.handle}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-message-btn"
                >
                  Message
                </a>
              </div>

              <ul className="ig-stats">
                <li>
                  <strong>{PROFILE.stats.posts}</strong> posts
                </li>
                <li>
                  <strong>{PROFILE.stats.followers}</strong> followers
                </li>
                <li>
                  <strong>{PROFILE.stats.following}</strong> following
                </li>
              </ul>

              <div className="ig-bio">
                <p className="ig-bio-name">{PROFILE.displayName}</p>
                {PROFILE.bio.map((line, i) => (
                  <p key={i} className="ig-bio-line">
                    {line}
                  </p>
                ))}
                <a
                  href={PROFILE.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-bio-link"
                >
                  🔗 {PROFILE.websiteLabel}
                </a>
              </div>
            </div>
          </header>

          <nav className="ig-tabs">
            <button className="ig-tab is-active" type="button">
              <Grid3x3 size={14} /> <span>POSTS</span>
            </button>
            <button className="ig-tab" type="button" disabled>
              <UserSquare2 size={14} /> <span>REELS</span>
            </button>
            <button className="ig-tab" type="button" disabled>
              <Bookmark size={14} /> <span>TAGGED</span>
            </button>
          </nav>

          <div className="ig-grid-wrap">
            {BEHOLD_WIDGET_ID ? (
              React.createElement('behold-widget', {
                'widget-id': BEHOLD_WIDGET_ID,
              })
            ) : (
              <div className="ig-grid-empty">
                <p>
                  <strong>Live grid not connected yet.</strong>
                </p>
                <p>
                  Set up a free widget at{' '}
                  <a href="https://behold.so" target="_blank" rel="noopener noreferrer">
                    behold.so
                  </a>{' '}
                  → connect <code>@{PROFILE.handle}</code> → copy the widget ID →
                  add <code>VITE_BEHOLD_WIDGET_ID=your_id</code> to <code>.env</code> and
                  restart the dev server.
                </p>
                <div className="ig-grid-skeleton">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="ig-grid-skeleton-cell" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveInstagramFeed;
