import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../../components/Carousel/Carousel';
import MenuCard from '../../components/MenuCard/MenuCard';
import './Home.css';
import img12 from './12.png';

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
      
      <section className="mission-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            At Chai Mahfil, we bring people together over the finest chai and snacks, 
            creating moments of joy and connection. Our ingredients are locally sourced, 
            and every cup is brewed with care and tradition.
          </p>
        </motion.div>
      </section>
      
      <section className="featured-section">
        <h2 className="section-title">Featured Items</h2>
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <MenuCard 
              key={item.id}
              item={item}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
      
      <section className="parallax-section">
        <div className="parallax-content">
          <h2 className="parallax-title">Experience the Authentic Taste</h2>
          <p className="parallax-text">
            Every sip tells a story of tradition and craftsmanship
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;