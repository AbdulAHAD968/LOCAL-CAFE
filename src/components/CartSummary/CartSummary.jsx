import React from 'react';
import './CartSummary.css';

const CartSummary = ({ items, onClear }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const uniqueItems = [...new Set(items.map(item => item.name))];
  
  return (
    <div className="cart-summary">
      <h3>Your Selection</h3>
      
      {uniqueItems.length > 0 ? (
        <>
          <ul className="cart-items">
            {uniqueItems.map(name => {
              const count = items.filter(item => item.name === name).length;
              const item = items.find(item => item.name === name);
              return (
                <li key={name} className="cart-item">
                  <span className="item-name">{name}</span>
                  <span className="item-quantity">x{count}</span>
                  <span className="item-price">₹{item.price * count}</span>
                </li>
              );
            })}
          </ul>
          
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          
          <div className="cart-actions">
            <button 
              className="clear-cart"
              onClick={onClear}
            >
              Clear Selection
            </button>
          </div>
        </>
      ) : (
        <p className="empty-cart">Your selection is empty</p>
      )}
    </div>
  );
};

export default CartSummary;