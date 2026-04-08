import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "The Pixel Equation completely changed how we approach our marketing. We scaled 3x in just two quarters by unifying our branding and ad strategy.",
    name: "Sarah Jenkins",
    role: "Founder, Zenith Apparel",
    stat: "3x Revenue Growth"
  },
  {
    quote: "Finally, an agency that doesn't just guess. The custom automation systems they built saved our operations team 20 hours a week.",
    name: "Mark Tesser",
    role: "COO, FlowState Tech",
    stat: "20 Hrs/wk Saved"
  },
  {
    quote: "Their 'Applied Prompt Engineering' course is a masterclass. Our creative team's output doubled without losing our brand voice.",
    name: "Elena Rodriguez",
    role: "Creative Director",
    stat: "2x Content Output"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        
        <div className="testimonial-wrapper">
          <Quote size={60} className="quote-icon" />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="testimonial-content"
            >
              <p className="quote-text">"{testimonials[currentIndex].quote}"</p>
              
              <div className="testimonial-meta">
                <div className="meta-info">
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-role">{testimonials[currentIndex].role}</p>
                </div>
                <div className="meta-stat highlight">
                  {testimonials[currentIndex].stat}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <button onClick={prevTestimonial} className="control-btn" aria-label="Previous Testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)}></span>
              ))}
            </div>
            <button onClick={nextTestimonial} className="control-btn" aria-label="Next Testimonial">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
