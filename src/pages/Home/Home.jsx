import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import MenuCard from '../../components/MenuCard/MenuCard';
import './Home.css';

import img13 from '../images/chai-image-home.webp';
import img14 from '../images/samosa-home.webp';
import img15 from '../images/chicken-paratha-home.jpg';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

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
      name: 'Karak Chai',
      description: 'Traditional spiced tea with ginger, cardamom, and cinnamon',
      price: 60,
      image: img13,
      premium: true
    },
    {
      id: 2,
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: 40,
      image: img14,
      premium: true
    },
    {
      id: 3,
      name: 'Chicken Paratha',
      description: 'Perfect pairing of our signature chai with crispy biscuits',
      price: 150,
      image: img15,
      premium: true
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="gold-star" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="gold-star" />);
      } else {
        stars.push(<FaRegStar key={i} className="gold-star" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="home premium-contact-page">
      <Carousel />
      
      <motion.section 
        className="mission-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUp}>
          <h2 className="section-title">
            <span className="gold-accent-text">Our Mission</span>
          </h2>
          <motion.p 
            className="mission-text"
            variants={fadeIn}
          >
            At <span className="gold-accent-text">Chai Mahfil</span>, we bring people together over the finest chai and snacks, 
            creating moments of joy and connection. Our ingredients are locally sourced, 
            and every cup is brewed with care and tradition.
          </motion.p>
          <div className="gold-divider"></div>
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
          <span className="gold-accent-text">Featured Items</span>
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
                premium={true}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <motion.section 
        className="parallax-section premium-parallax"
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
            Experience the <span className="gold-accent-text">Authentic Taste</span>
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
          <h2 className="cta-title">Ready to Experience <span className="gold-accent-text">Chai Mahfil</span>?</h2>
          <motion.div 
            className="cta-buttons"
            variants={fadeIn}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInFromLeft}
            >
              <Link to="/contact" className="cta-button visit-button premium-button">
                Visit Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInFromRight}
            >
              <Link to="/menu" className="cta-button order-button premium-button">
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Premium Testimonial Section */}
      <div className="testimonial-section premium-testimonials">
        <div className="section-header">
          <h2><span className="gold-accent-text">What Our Customers Say</span></h2>
          <div className="gold-line"></div>
        </div>
        <div className="testimonials">
          <motion.div 
            className="testimonial-card premium-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-quote gold-accent-text">"</div>
            <p>The best chai experience in AhmedPur! The ambiance takes you back to the royal era of Pakistani tea houses.</p>
            <div className="rating">
              {renderStars(4.5)}
              <span className="rating-text">4.5/5</span>
            </div>
            <div className="testimonial-author">- Sheikh Anas</div>
          </motion.div>
          
          <motion.div 
            className="testimonial-card premium-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-quote gold-accent-text">"</div>
            <p>Authentic flavors with premium service. Their special chai is worth every penny!</p>
            <div className="rating">
              {renderStars(5)}
              <span className="rating-text">5/5</span>
            </div>
            <div className="testimonial-author">- Ahmer Sagheer</div>
          </motion.div>
          
          <motion.div 
            className="testimonial-card premium-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-quote gold-accent-text">"</div>
            <p>Perfect blend of tradition and luxury. The staff makes you feel like royalty.</p>
            <div className="rating">
              {renderStars(4)}
              <span className="rating-text">4/5</span>
            </div>
            <div className="testimonial-author">- Abdul Samad</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;