// Cart.jsx
import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CartContext } from '../../components/CartSummary/CartContext';
import './Cart.css';

const Cart = () => {
  const { 
    cartItems, 
    cartTotal,
    updateCartItems, 
    removeFromCart 
  } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCartItems(updatedCart);
  };

  if (isLoading) {
    return (
      <div className="cart-loading">
        <div className="spinner"></div>
        <p>Loading your cart...</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="cart-container"
      >
        <div className="cart-header">
          <h1>Your Order</h1>
          <Link to="/menu" className="back-to-menu">
            ← Back to Menu
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            className="empty-cart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.7c-.3.4-.7.7-1.1.8C3 16.6 2 16 2 15V5c0-1.1.9-2 2-2h3" />
              <circle cx="7" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
            </svg>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added anything to your cart yet</p>
            <Link to="/menu" className="btn-primary">
              Browse Menu
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="cart-items">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="cart-item"
                  >
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p className="item-category">{item.category}</p>
                      <p className="item-price">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-control">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="cart-summary">
              <div className="summary-row total">
                <span>Total Amount</span>
                <span>Rs. {cartTotal.toFixed(2)}</span>
              </div>

              <a href={`tel:+921234567890`} className="btn-order">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Place Order
              </a>

              <p className="order-note">
                Please call us to confirm your order. We'll prepare it well before you arrive!
              </p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;