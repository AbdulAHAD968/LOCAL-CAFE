import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import MenuCard from '../../components/MenuCard/MenuCard';
import StyledLink from '../../components/commonStyles/StyledLink';
import './Home.css';
import img12 from '../images/12.png';

import {
  containerVariants,
  fadeUp,
  fadeIn,
  slideInFromLeft,
  slideInFromRight
} from '../../components/commonStyles/variants';


const Home = () => {

  const featuredItems = [
    {
      id: 1,
      name: 'Masala Chai',
      description: 'Traditional spiced tea with ginger, cardamom, and cinnamon',
      price: 30,
      image: img12
    },
    {
      id: 2,
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: 25,
      image: img12
    },
    {
      id: 3,
      name: 'Chai + Biscuit Combo',
      description: 'Perfect pairing of our signature chai with crispy biscuits',
      price: 40,
      image: img12
    }
  ];

  return (
    <div className="home">
      <Carousel />
      
      <motion.section 
        className="mission-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUp}>
          <h2 className="section-title">Our Mission</h2>
          <motion.p 
            className="mission-text"
            variants={fadeIn}
          >
            At Chai Mahfil, we bring people together over the finest chai and snacks, 
            creating moments of joy and connection. Our ingredients are locally sourced, 
            and every cup is brewed with care and tradition.
          </motion.p>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="featured-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={slideInFromLeft}>
          Featured Items
        </motion.h2>
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
            >
              <MenuCard 
                item={item}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <motion.section 
        className="parallax-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="parallax-content">
          <motion.h2 
            className="parallax-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience the Authentic Taste
          </motion.h2>
          <motion.p 
            className="parallax-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Every sip tells a story of tradition and craftsmanship
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUp}>
          <h2 className="cta-title">Ready to Experience Chai Mahfil?</h2>
          <motion.div 
            className="cta-buttons"
            variants={fadeIn}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInFromLeft}
            >
              <Link to="/contact" className="cta-button visit-button">
                Visit Us
              </Link>
              
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInFromRight}
            >
              <Link to="/menu" className="cta-button order-button">
                Order Now
              </Link>

            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="testimonials-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={fadeUp}>
          What Our Customers Say
        </motion.h2>
        <div className="testimonials-grid">
          <motion.div 
            className="testimonial-card"
            variants={slideInFromLeft}
          >
            <p className="testimonial-text">
              "The best chai in town! The aroma and flavor take me back to my childhood."
            </p>
            <p className="testimonial-author">- Priya S.</p>
          </motion.div>
          <motion.div 
            className="testimonial-card"
            variants={fadeUp}
          >
            <p className="testimonial-text">
              "A perfect place to unwind after work. Their samosas are crispy and delicious."
            </p>
            <p className="testimonial-author">- Rajesh K.</p>
          </motion.div>
          <motion.div 
            className="testimonial-card"
            variants={slideInFromRight}
          >
            <p className="testimonial-text">
              "Friendly staff and authentic taste. My go-to place for chai cravings!"
            </p>
            <p className="testimonial-author">- Ananya M.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;