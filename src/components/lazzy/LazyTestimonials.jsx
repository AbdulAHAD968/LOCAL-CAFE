import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LazyTestimonials = ({ controls }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        root: null,
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.section 
      ref={ref}
      className="testimonials-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            when: "beforeChildren"
          }
        }
      }}
    >
      <motion.h2 className="section-title" variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }
      }}>
        What Our Customers Say
      </motion.h2>
      <div className="testimonials-grid">
        {[1, 2, 3].map((item, index) => (
          <motion.div 
            key={index}
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2
                }
              }
            }}
          >
            <p className="testimonial-text">
              {index === 0 
                ? '"The best chai in town! The aroma and flavor take me back to my childhood."'
                : index === 1
                ? '"A perfect place to unwind after work. Their samosas are crispy and delicious."'
                : '"Friendly staff and authentic taste. My go-to place for chai cravings!"'}
            </p>
            <p className="testimonial-author">
              {index === 0 
                ? '- Priya S.'
                : index === 1
                ? '- Rajesh K.'
                : '- Ananya M.'}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LazyTestimonials;