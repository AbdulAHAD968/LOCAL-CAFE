import React from 'react';
import { motion } from 'framer-motion';
import './MenuCard.css';

const MenuCard = ({ item, onAddToCart, delay = 0 }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  return (
    <motion.div 
      className="menu-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <div className="card-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
        <div className="card-footer">
          <span className="card-price">Rs.{item.price}</span>
          {onAddToCart && (
            <button 
              className="add-to-cart"
              onClick={handleAddToCart}
              aria-label={`Add ${item.name} to cart`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;