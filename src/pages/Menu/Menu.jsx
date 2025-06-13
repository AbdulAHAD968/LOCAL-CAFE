import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MenuCard from '../../components/MenuCard/MenuCard';
import { menuItems } from '../../plugNplay/menuItems';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isCartNotification, setIsCartNotification] = useState(false);

  const categories = ['all', 'chai', 'snacks', 'combos' , 'paratha'];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under50', label: 'Under Rs.50' },
    { id: '50to100', label: 'Rs.50 - Rs.100' },
    { id: 'over100', label: 'Over Rs.100' }
  ];

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('chaiMahfilCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (parsedCart.expiry > Date.now()) {
          setCartItems(parsedCart.items);
        } else {
          localStorage.removeItem('chaiMahfilCart');
        }
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    
    // Show notification
    setIsCartNotification(true);
    setTimeout(() => setIsCartNotification(false), 3000);
    
    // Save to localStorage with 5-minute expiry
    const cartData = {
      items: newCartItems,
      expiry: Date.now() + 5 * 60 * 1000 // 5 minutes
    };
    localStorage.setItem('chaiMahfilCart', JSON.stringify(cartData));
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
      case 'over100':
        return item.price > 100;
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
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <MenuCard 
                    item={item} 
                    onAddToCart={addToCart}
                  />
                </motion.div>
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
          </AnimatePresence>
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