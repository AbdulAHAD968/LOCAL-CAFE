import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LazyParallaxSection = () => {
  const controls = useAnimation();
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
      className="parallax-section"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 1.5
          }
        }
      }}
    >
      <div className="parallax-content">
        <motion.h2 
          className="parallax-title"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.3
              }
            }
          }}
        >
          Experience the Authentic Taste
        </motion.h2>
        <motion.p 
          className="parallax-text"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.6
              }
            }
          }}
        >
          Every sip tells a story of tradition and craftsmanship
        </motion.p>
      </div>
    </motion.section>
  );
};

export default LazyParallaxSection;