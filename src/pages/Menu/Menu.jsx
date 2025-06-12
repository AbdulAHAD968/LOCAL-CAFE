import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import MenuCard from '../../components/MenuCard/MenuCard';
import './Menu.css';
import img12 from './12.png';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  
  const menuItems = [
    { id: 1, name: 'Masala Chai', category: 'chai', price: 30, description: 'Traditional spiced tea', image: img12 },
    { id: 2, name: 'Kadak Chai', category: 'chai', price: 25, description: 'Strong brewed tea', image: img12 },
    { id: 3, name: 'Samosa', category: 'snacks', price: 25, description: 'Spiced potato filling', image: img12 },
    { id: 4, name: 'Pakora', category: 'snacks', price: 40, description: 'Vegetable fritters', image: img12 },
    { id: 5, name: 'Bun Maska', category: 'snacks', price: 30, description: 'Bun with butter', image: img12 },
    { id: 6, name: 'Chai + Biscuit', category: 'combos', price: 40, description: 'Tea with cookies', image: img12 },
    { id: 7, name: 'Chai + Samosa', category: 'combos', price: 50, description: 'Tea with samosa', image: img12 },
    { id: 8, name: 'Special Thali', category: 'combos', price: 120, description: 'Assorted snacks with tea', image: img12 },
  ];

  const categories = ['all', 'chai', 'snacks', 'combos'];
  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under50', label: 'Under ₹50' },
    { id: '50to100', label: '₹50 - ₹100' },
    { id: 'over100', label: 'Over ₹100' }
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
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our authentic flavors</p>
      </div>
      
      <div className="filters-container">
        <FilterButtons 
          items={categories} 
          activeItem={activeCategory} 
          onChange={setActiveCategory}
          isCategory
        />
        
        <div className="price-filters">
          {priceRanges.map(range => (
            <button
              key={range.id}
              className={`price-filter ${priceFilter === range.id ? 'active' : ''}`}
              onClick={() => setPriceFilter(range.id)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <MenuCard 
              item={item} 
              onAddToCart={addToCart}
            />
          </motion.div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="no-items">
          <p>No items match your filters. Try adjusting your selection.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;