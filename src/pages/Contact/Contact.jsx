import React, { useEffect, useState } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import CartSummary from '../../components/CartSummary/CartSummary';
import './Contact.css';

const Contact = () => {
  const [cartItems, setCartItems] = useState([]);

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

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('chaiMahfilCart');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Visit Us</h1>
        <p>We'd love to hear from you</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Details</h2>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>
          
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <span>+91 98765 43210 (WhatsApp)</span>
          </div>
          
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <address>123 Chai Street, Mumbai, Maharashtra 400001</address>
          </div>
          
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="hours">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
          </div>
        </div>
        
        <div className="map-container">
          <iframe
            title="Chai Mahfil Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715973047157!2d72.8242143153766!3d19.0339872582289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3a13e5f5e5%3A0x1b02a5f5a5f5a5f5!2sChai%20Mahfil!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      {cartItems.length > 0 && (
        <div className="cart-summary-section">
          <CartSummary items={cartItems} onClear={clearCart} />
        </div>
      )}
    </div>
  );
};

export default Contact;