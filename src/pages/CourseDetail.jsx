import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Lightbulb, BookOpen, Wrench, Bot,
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  Check, Star, ExternalLink, Award, Clock, Globe,
  Play, Zap, Users, Target, TrendingUp, BarChart2,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCourseBySlug, coursesData, pixelEthos } from '../data/coursesData';
import './CourseDetail.css';

const iconMap = { Lightbulb, BookOpen, Wrench, Bot };

const Icon = ({ name, size = 24 }) => {
  const C = iconMap[name];
  return C ? <C size={size} /> : null;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

// ── Accordion for FAQs ──────────────────────────────────
const FAQItem = ({ faq, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`cd-faq-item ${open ? 'cd-faq-open' : ''}`}
      style={{ '--service-color': color }}
    >
      <button className="cd-faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="cd-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Module accordion ──────────────────────────────────
const ModuleItem = ({ module, idx, color }) => {
  const [open, setOpen] = useState(false);
  const hasTopics = module.topics && module.topics.length > 0;
  return (
    <div
      className={`cd-module-item ${open ? 'cd-module-open' : ''}`}
      style={{ '--service-color': color }}
    >
      <button className="cd-module-header" onClick={() => setOpen(!open)}>
        <div className="cd-module-num">{String(idx + 1).padStart(2, '0')}</div>
        <span className="cd-module-title">{module.title}</span>
        {open ? <ChevronUp size={18} className="cd-module-chevron" /> : <ChevronDown size={18} className="cd-module-chevron" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="cd-module-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="cd-module-desc">{module.desc}</p>
            {hasTopics && (
              <ul className="cd-module-topics">
                {module.topics.map((t, i) => (
                  <li key={i}><Check size={14} />{t}</li>
                ))}
              </ul>
            )}
            {module.skills && (
              <p className="cd-module-skills">
                <strong>Skills:</strong> {module.skills}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { useMotionValue, useSpring, useTransform } from 'framer-motion';

// ── Course Image Visual ─────────────────────────────────
const CourseImageVisual = ({ course }) => {
  // --- Parallax Effect Values ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // --- Particle Data ---
  const pixels = useMemo(() =>
    Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: `${(i * 3.1 + 7) % 100}%`,
      size: i % 4 === 0 ? 8 : i % 4 === 1 ? 5 : i % 4 === 2 ? 3 : 2,
      duration: 10 + (i % 12) * 1.5,
      delay: (i % 10) * 1.2,
      opacity: 0.12 + (i % 6) * 0.05,
      depth: (i % 3) * 2, // for a basic 3d depth feel
    })), []);

  return (
    <motion.div
      className="cd-visual-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Pixel particle background */}
      <div className="cd-vis-pixel-bg" aria-hidden="true">
        <div className="cd-vis-dotgrid" />
        {pixels.map(p => (
          <span
            key={p.id}
            className="cd-vis-pixel"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: course.color,
              '--vp-dur': `${p.duration}s`,
              '--vp-delay': `${p.delay}s`,
              '--vp-opacity': p.opacity,
              filter: `blur(${p.depth}px)`,
            }}
          />
        ))}
        {/* Vertical color lines */}
        <div className="cd-vis-vline cd-vis-vline-1" style={{ '--vl-color': course.color }} />
        <div className="cd-vis-vline cd-vis-vline-2" style={{ '--vl-color': course.color }} />
      </div>

      {/* Corner bracket frames (Float slightly) */}
      <motion.div className="cd-vis-corners" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {['tl','tr','bl','br'].map(pos => (
          <div
            key={pos}
            className={`cd-vis-corner cd-vis-corner-${pos}`}
            style={{ '--corner-color': course.color, translateZ: 40 }}
          />
        ))}
      </motion.div>

      {/* Main image card with Interactive Tilt */}
      <motion.div
        className="cd-media-card"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
      >
        <div style={{ transform: 'translateZ(1px)', height: '100%' }}>
          <img src={course.image} alt={course.title} className="cd-hero-image" />
          
          {/* Overlays */}
          <div className="cd-img-shimmer" />
          <div className="cd-img-scanline" style={{ '--scan-color': course.color }} />
          <div className="cd-img-pixelgrid" />
          <div className="cd-img-bottom-grad" style={{ '--grad-color': course.color }} />

          {/* Floating Badge (Pops out a bit) */}
          <div className="cd-img-badge" style={{ '--badge-color': course.color, transform: 'translateZ(50px)' }}>
            <Icon name={course.icon} size={14} />
            <span>The Pixel Academy</span>
          </div>
        </div>

        {/* Glow behind card (Pops out far) */}
        <div className="cd-media-glow" style={{ background: course.color, transform: 'translateZ(-40px)' }} />
      </motion.div>

      {/* Floating ambient orbs (Large and deep) */}
      <div className="cd-vis-orb cd-vis-orb-1" style={{ background: course.color }} />
      <div className="cd-vis-orb cd-vis-orb-2" style={{ background: course.color }} />
      <div className="cd-vis-orb cd-vis-orb-3" style={{ background: course.color }} />
    </motion.div>
  );
};

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) return <Navigate to="/courses" replace />;

  const idx = coursesData.findIndex((c) => c.slug === slug);
  const prev = coursesData[idx - 1] || null;
  const next = coursesData[idx + 1] || null;

  return (
    <div className="cd-page">
      <Helmet>
        <title>{course.title} | The Pixel Company Academy</title>
        <meta name="description" content={course.overview} />
      </Helmet>

      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="cd-hero section-padding" style={{ '--service-color': course.color }}>
          <div className="container">
            <div className="cd-hero-split">
              <motion.div
                className="cd-hero-inner"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/courses" className="cd-back-link">
                  <ArrowLeft size={16} /> All Courses
                </Link>

                <div className="cd-hero-icon">
                  <Icon name={course.icon} size={38} />
                </div>

                {course.languages && (
                  <span className="cd-lang-badge">
                    <Globe size={13} /> {course.languages}
                  </span>
                )}

                <h1 className="cd-hero-title">
                  <span className="highlight">{course.title}</span>
                </h1>

                <p className="cd-hero-tagline">"{course.tagline}"</p>
                {course.subheadline && (
                  <p className="cd-hero-sub">{course.subheadline}</p>
                )}

                <p className="cd-hero-desc">{course.overview}</p>

                <div className="cd-hero-bottom">
                  {course.price && (
                    <div className="cd-price-wrap">
                      {course.originalPrice && (
                        <span className="cd-price-original">{course.originalPrice}</span>
                      )}
                      <span className="cd-price-current">{course.price}</span>
                    </div>
                  )}
                  <div className="cd-hero-btns">
                    <a
                      href={course.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Buy Now <ExternalLink size={15} />
                    </a>
                    <a href="https://wa.me/919045860876" className="btn btn-secondary">
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="cd-hero-visual"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CourseImageVisual course={course} />
              </motion.div>
            </div>

            <div className="cd-hero-glow" style={{ background: course.color }} />
          </div>
        </section>

        {/* ── WHAT YOU'LL LEARN ── */}
        {course.whatYoullLearn && course.whatYoullLearn.length > 0 && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">The Curriculum</span>
                <h2>What You'll <span className="highlight">Learn</span></h2>
              </motion.header>

              <div className="cd-learn-grid">
                {course.whatYoullLearn.map((item, i) => (
                  <motion.div key={i} className="cd-learn-item" style={{ '--service-color': course.color }} {...fadeUp(i * 0.05)}>
                    <div className="cd-learn-icon"><Check size={16} /></div>
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── MODULES ── */}
        {course.modules && course.modules.length > 0 && (
          <section className="cd-section cd-modules-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">Inside the Course</span>
                <h2>Course <span className="highlight">Modules</span></h2>
                <p>{course.modules.length} modules — click any to expand</p>
              </motion.header>

              <div className="cd-modules-list">
                {course.modules.map((mod, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.04)}>
                    <ModuleItem module={mod} idx={i} color={course.color} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── TOOLS (if course has them) ── */}
        {course.tools && course.tools.length > 0 && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">The Toolkit</span>
                <h2>Tools You'll <span className="highlight">Master</span></h2>
                <p>{course.tools.length}+ tools taught as one connected system.</p>
              </motion.header>

              <div className="cd-tools-grid">
                {course.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    className="cd-tool-chip"
                    style={{ '--service-color': course.color }}
                    {...fadeUp(i * 0.04)}
                  >
                    <Zap size={13} />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── HIGHLIGHTS ── */}
        {course.highlights && course.highlights.length > 0 && (
          <section className="cd-section cd-highlights-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">Course Features</span>
                <h2>Course <span className="highlight">Highlights</span></h2>
              </motion.header>

              <div className="cd-highlights-grid">
                {course.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="cd-highlight-card"
                    style={{ '--service-color': course.color }}
                    {...fadeUp(i * 0.07)}
                  >
                    <div className="cd-highlight-icon"><Star size={18} /></div>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── AI KEY METRICS (Fundamentals of AI Tools only) ── */}
        {course.aiMetrics && course.aiMetrics.length > 0 && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">At a Glance</span>
                <h2>Key <span className="highlight">Metrics</span></h2>
                <p>Top-line metrics on AI impact across industries.</p>
              </motion.header>
              <div className="cd-metrics-grid">
                {course.aiMetrics.map((m, i) => (
                  <motion.div
                    key={i}
                    className="cd-metric-card"
                    style={{ '--service-color': course.color }}
                    {...fadeUp(i * 0.08)}
                  >
                    <div className="cd-metric-value">
                      <span className="cd-metric-prefix">{m.prefix}</span>
                      <span className="cd-metric-num">{m.value}</span>
                      <span className="cd-metric-suffix">{m.suffix}</span>
                    </div>
                    <p className="cd-metric-label">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RESULTS (Marketing Playbook only) ── */}
        {course.results && course.results.length > 0 && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">Proof</span>
                <h2>Real <span className="highlight">Results</span></h2>
              </motion.header>

              <div className="cd-results-grid">
                {course.results.map((r, i) => (
                  <motion.div key={i} className="cd-result-card" style={{ '--service-color': course.color }} {...fadeUp(i * 0.1)}>
                    <p className="cd-result-metric">{r.metric}</p>
                    <div className="cd-result-values">
                      <div className="cd-result-before">
                        <small>Before</small>
                        <strong>{r.before}</strong>
                      </div>
                      <ArrowRight size={20} className="cd-result-arrow" />
                      <div className="cd-result-after">
                        <small>After</small>
                        <strong>{r.after}</strong>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Case study quotes */}
              {course.caseStudyQuotes && (
                <div className="cd-case-quotes">
                  {course.caseStudyQuotes.map((q, i) => (
                    <motion.blockquote key={i} className="cd-case-quote" style={{ '--service-color': course.color }} {...fadeUp(0.1 + i * 0.1)}>
                      <span className="cd-quote-mark">"</span>
                      {q}
                    </motion.blockquote>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── WITHOUT / WITH (Marketing Playbook only) ── */}
        {course.withoutWith && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">The Choice</span>
                <h2>Chaos or <span className="highlight">Clarity?</span></h2>
              </motion.header>

              <div className="cd-ww-grid">
                <motion.div className="cd-ww-card cd-without" {...fadeUp(0.05)}>
                  <h3>Without the Playbook</h3>
                  <ul>
                    {course.withoutWith.without.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div className="cd-ww-card cd-with" style={{ '--service-color': course.color }} {...fadeUp(0.1)}>
                  <h3>With the Playbook</h3>
                  <ul>
                    {course.withoutWith.with.map((item, i) => (
                      <li key={i}><Check size={14} />{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* ── THE CHOICE: CHAOS OR CLARITY (Essentials only) ── */}
        {course.theChoice && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">What's Changing</span>
                <h2>The Choice: <span className="highlight">Chaos or Clarity?</span></h2>
              </motion.header>
              <div className="cd-highlights-grid">
                {course.theChoice.map((item, i) => (
                  <motion.div
                    key={i}
                    className="cd-highlight-card"
                    style={{ '--service-color': course.color }}
                    {...fadeUp(i * 0.1)}
                  >
                    <div className="cd-highlight-icon">
                      <TrendingUp size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── THEN VS NOW (Essentials only) ── */}
        {course.thenVsNow && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">The Evolution</span>
                <h2>Then <span className="highlight">vs. Now</span></h2>
              </motion.header>

              <div className="cd-tvn-grid">
                <motion.div className="cd-tvn-col cd-tvn-then" {...fadeUp(0.05)}>
                  <h3>The Traditional Era (Then)</h3>
                  {course.thenVsNow.then.map((item, i) => (
                    <div key={i} className="cd-tvn-row">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </motion.div>
                <motion.div className="cd-tvn-col cd-tvn-now" style={{ '--service-color': course.color }} {...fadeUp(0.1)}>
                  <h3>The Modern Era (Now)</h3>
                  {course.thenVsNow.now.map((item, i) => (
                    <div key={i} className="cd-tvn-row">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* ── WHY PIXEL (Prompt Engineering) ── */}
        {course.whyPixel && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">Why Us</span>
                <h2>Why Learn from <span className="highlight">Pixel Company</span></h2>
              </motion.header>

              <motion.div className="cd-why-box" style={{ '--service-color': course.color }} {...fadeUp(0.1)}>
                <p className="cd-why-text">{course.whyPixel}</p>
                {course.whyPixelPoints && (
                  <ul className="cd-why-list">
                    {course.whyPixelPoints.map((pt, i) => (
                      <li key={i}><Check size={16} />{pt}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── WHO IS IT FOR ── */}
        {course.whoIsItFor && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.div className="cd-who-box" style={{ '--service-color': course.color }} {...fadeUp()}>
                <div className="cd-who-icon"><Users size={28} /></div>
                <div>
                  <h2>Who Is This <span className="highlight">For?</span></h2>
                  <p>{course.whoIsItFor}</p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── P.I.X.E.L ETHOS ── */}
        <section className="cd-section cd-pixel-section section-padding">
          <div className="container">
            <motion.header className="section-header" {...fadeUp()}>
              <span className="brand-subtitle">Our Philosophy</span>
              <h2>The P.I.X.E.L <span className="highlight">Learning Ethos</span></h2>
              <p>At The Pixel Company, education is about thinking, building, and evolving.</p>
            </motion.header>

            <div className="cd-pixel-grid">
              {pixelEthos.map((item, i) => (
                <motion.div
                  key={i}
                  className="cd-pixel-card"
                  style={{ '--service-color': course.color }}
                  {...fadeUp(i * 0.08)}
                >
                  <div className="cd-pixel-letter">{item.letter}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PURCHASE STEPS (Prompt Engineering) ── */}
        {course.purchaseSteps && (
          <section className="cd-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">How to Enrol</span>
                <h2>Steps to <span className="highlight">Purchase</span></h2>
              </motion.header>

              <div className="cd-steps-list">
                {course.purchaseSteps.map((step, i) => (
                  <motion.div key={i} className="cd-step-item" style={{ '--service-color': course.color }} {...fadeUp(i * 0.08)}>
                    <div className="cd-step-num">{i + 1}</div>
                    <p>{step}</p>
                  </motion.div>
                ))}
              </div>
              <motion.p className="cd-support-note" {...fadeUp(0.3)}>
                Feel free to contact us if you have any concerns:{' '}
                <a href="tel:+919626631362">+91 96266 31362</a>
              </motion.p>
            </div>
          </section>
        )}

        {/* ── FAQS ── */}
        {course.faqs && course.faqs.length > 0 && (
          <section className="cd-section cd-faq-section section-padding">
            <div className="container">
              <motion.header className="section-header" {...fadeUp()}>
                <span className="brand-subtitle">Got Questions?</span>
                <h2>Frequently Asked <span className="highlight">Questions</span></h2>
              </motion.header>

              <div className="cd-faq-list">
                {course.faqs.map((faq, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.04)}>
                    <FAQItem faq={faq} color={course.color} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FINAL CTA ── */}
        <section className="cd-cta-section section-padding">
          <div className="container">
            <motion.div
              className="cd-cta-box"
              style={{ '--service-color': course.color }}
              {...fadeUp()}
            >
              <div className="cd-cta-icon"><Icon name={course.icon} size={32} /></div>
              <h2>
                Ready to start <span className="highlight">{course.title}?</span>
              </h2>
              {course.price && (
                <div className="cd-cta-price">
                  {course.originalPrice && <s>{course.originalPrice}</s>}
                  <strong>{course.price}</strong>
                </div>
              )}
              <div className="cd-cta-btns">
                <a
                  href={course.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Buy Now <ExternalLink size={15} />
                </a>
                <a href="https://wa.me/919045860876" className="btn btn-secondary">
                  Ask on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PREV / NEXT ── */}
        <section className="cd-nav-section">
          <div className="container">
            <div className="cd-prev-next">
              {prev ? (
                <Link to={`/courses/${prev.slug}`} className="cd-nav-link cd-nav-prev">
                  <ArrowLeft size={16} />
                  <span><small>Previous</small>{prev.title}</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/courses/${next.slug}`} className="cd-nav-link cd-nav-next">
                  <span><small>Next</small>{next.title}</span>
                  <ArrowRight size={16} />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
