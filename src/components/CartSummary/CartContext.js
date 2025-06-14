// CartContext.js
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getInitialCart = () => {
    const savedCart = localStorage.getItem('chaiMahfilCart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (parsed.expiry > Date.now()) return parsed.items;
        else localStorage.removeItem('chaiMahfilCart');
      } catch (e) {
        console.error('Failed to parse cart on init', e);
      }
    }
    return [];
  };

  const [cartItems, setCartItems] = useState(getInitialCart);

  const saveCartToLocalStorage = (items) => {
    localStorage.setItem(
      'chaiMahfilCart',
      JSON.stringify({ items, expiry: Date.now() + 5 * 60 * 1000 })
    );
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      let newItems;
      
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prevItems, { 
          ...product, 
          quantity: 1,
          price: product.price // Ensure price is included
        }];
      }
      
      saveCartToLocalStorage(newItems);
      return newItems;
    });
  };

  const updateCartItems = (items) => {
    setCartItems(items);
    saveCartToLocalStorage(items);
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      saveCartToLocalStorage(newItems);
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('chaiMahfilCart');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        cartCount,
        cartTotal,
        addToCart, 
        updateCartItems, 
        removeFromCart, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};