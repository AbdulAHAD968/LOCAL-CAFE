import React from 'react';
import { motion } from 'framer-motion';
import './MenuCard.css';

const MenuCard = ({ item, onAddToCart, delay = 0 }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        category: item.category,
        quantity: 1
      });
    }
  };

  return (
    <motion.div 
      className="menu-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card-image">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
        <div className="card-footer">
          <span className="card-price">Rs. {item.price.toFixed(2)}</span>
          {onAddToCart && (
            <motion.button 
              className="add-to-cart"
              onClick={handleAddToCart}
              aria-label={`Add ${item.name} to cart`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;