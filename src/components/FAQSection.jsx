import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    q: 'What makes The Pixel Company different?',
    a: 'We are a creative intelligence agency that bridges the gap between high-end branding and technical AI automation. We don\'t just design; we build systems that scale your growth.',
  },
  {
    q: 'Do you work with global clients or just local startups?',
    a: 'While we are proud to be based in Coimbatore, Tamil Nadu, we work with fast-growing brands and startups across India and globally through our remote-first dedicated workflow.',
  },
  {
    q: 'How fast can we see results?',
    a: 'Branding and automation setups are usually live within 7-14 days. Performance marketing typically starts showing measurable data within the first 48-72 hours of launch.',
  },
  {
    q: 'Can you help us build our own AI tools?',
    a: 'Absolutely. We specialize in engineering custom AI-driven growth systems and automations tailored to your specific business friction points.',
  },
  {
    q: 'How do we get started?',
    a: 'The best way is to connect with us on WhatsApp or send an email. We will jump on a 15-minute discovery call to see if we are a perfect fit for your goals.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <header className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quick <span className="highlight">Answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to know before we scale your brand.
          </motion.p>
        </header>

        <div className="faq-container">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="faq-answer-content">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

