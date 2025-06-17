import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MenuCard from '../../components/MenuCard/MenuCard';
import { menuItems } from '../../plugNplay/menuItems';
import { CartContext } from '../../components/CartSummary/CartContext';
import './Menu.css';

const Menu = () => {
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [isCartNotification, setIsCartNotification] = useState(false);
  const { addToCart } = useContext(CartContext);

  const categories = ['all', 'chai', 'snacks', 'soda', 'paratha', 'icecream', 'beverages', 'rolls'];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under50', label: 'Under Rs.50' },
    { id: '50to100', label: 'Rs.50 - Rs.100' },
    { id: '100to200', label: 'Rs.100 - Rs.200' },
    { id: '200to300', label: 'Rs.200 - Rs.300' },
    { id: 'over300', label: 'Over Rs.300' }
  ];

  const handleAddToCart = (item) => {

    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      quantity: 1,
    };
    
    addToCart(cartItem);
    
    // Show notification
    setIsCartNotification(true);
    setTimeout(() => setIsCartNotification(false), 2000);
  };

  const filteredItems = menuItems.filter(item => {
    // Category filter
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    
    // Price filter
    switch (priceFilter) {
      case 'under50':
        return item.price < 50;
      case '50to100':
        return item.price >= 50 && item.price <= 100;
      case '100to200':
        return item.price >= 100 && item.price <= 200;
      case '200to300':
        return item.price >= 200 && item.price <= 300;
      case 'over300':
        return item.price > 300;
      default:
        return true;
    }
  });

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Mahfil <span>Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Where every sip tells a story
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-scroll-indicator"
          >
            <span>Scroll to explore</span>
            <div className="scroll-line"></div>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-bg-image"></div>
      </div>
      
      {/* Main Content */}
      <div className="menu-content">
        <div className="filters-container">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="section-header"
          >
            <h2>Filter Menu</h2>
            <p>Find your perfect chai moment</p>
          </motion.div>
          
          <FilterButtons 
            items={categories} 
            activeItem={activeCategory} 
            onChange={setActiveCategory}
            isCategory
          />
          
          <div className="price-filters">
            {priceRanges.map(range => (
              <motion.button
                key={range.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`price-filter ${priceFilter === range.id ? 'active' : ''}`}
                onClick={() => setPriceFilter(range.id)}
              >
                {range.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <AnimatePresence key={item.id}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <MenuCard 
                  item={item} 
                  onAddToCart={() => handleAddToCart(item)} 
                />
              </motion.div>
            </AnimatePresence>
          ))
        ) : (
          <motion.div
            className="no-items"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="no-items-content">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3v15m-6 0h18M9 18l6-6m0 0l-6-6" />
              </svg>
              <h3>No items match your filters</h3>
              <p>Try adjusting your selection to discover our delicious offerings</p>
              <button 
                className="reset-filters"
                onClick={() => {
                  setActiveCategory('all');
                  setPriceFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>


      </div>
      
      {/* Cart Notification */}
      <AnimatePresence>
        {isCartNotification && (
          <motion.div
            className="cart-notification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Item added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;