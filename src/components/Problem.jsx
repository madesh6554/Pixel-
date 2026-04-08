import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Shuffle, TrendingDown } from 'lucide-react';
import './Cards.css'; // Reusing card styles

const problems = [
  {
    title: "The Identity Problem",
    desc: "Unclear messaging and generic visuals. Is your brand getting ignored because people don't understand who you are?",
    icon: <Fingerprint size={32} className="card-icon" />
  },
  {
    title: "The Consistency Issue",
    desc: "Is your marketing all over the place with no structure? Scattershot campaigns burn budget with zero return.",
    icon: <Shuffle size={32} className="card-icon" />
  },
  {
    title: "The Growth Problem",
    desc: "Doing 'everything right' but hitting a wall. You need unified systems, not just fragmented marketing tactics.",
    icon: <TrendingDown size={32} className="card-icon" />
  }
];

const Problem = () => {
  return (
    <section id="problem" className="section-padding">
      <div className="container">
        <header className="section-header">
          <h2>Have you faced these <span className="highlight">problems?</span></h2>
          <p>We analyze the root cause before we ever prescribe a solution.</p>
        </header>
        
        <div className="grid">
          {problems.map((prob, i) => (
            <motion.article 
              key={i} 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderTop: "3px solid rgba(236, 72, 153, 0.5)" }} /* Warning styling */
            >
              <div className="card-icon-wrapper" style={{ color: 'rgba(236, 72, 153, 1)' }}>{prob.icon}</div>
              <h3>{prob.title}</h3>
              <p>{prob.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
