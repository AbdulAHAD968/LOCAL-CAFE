import React, { useEffect, useState } from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter,
  FaClock,
  FaLeaf,
  FaGlassCheers
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import CartSummary from '../../components/CartSummary/CartSummary';
import './Contact.css';

const Contact = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

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
    <div className="premium-contact-page">
      {/* Hero Section */}
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-hero-content">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience Chai Mahfil
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Where every sip tells a story
          </motion.p>
          <motion.div 
            className="decorative-leaf"
            initial={{ rotate: -15, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaLeaf />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="premium-contact-container">
        {/* Contact Information */}
        <motion.div 
          className="premium-contact-info"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h2>Our Details</h2>
            <div className="gold-line"></div>
          </div>
          
          <div className="contact-grid">
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon-circle gold-bg">
                <FaPhone />
              </div>
              <h3>Call Us</h3>
              <p>+92 000 0000000</p>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon-circle green-bg">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>+92 000 0000000</p>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon-circle brown-bg">
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <address> Ishaq wahla market Near Alsaudia Pump Fuji Park Road - AhmedPur East, Punjab, Pakistan</address>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon-circle gold-bg">
                <FaClock />
              </div>
              <h3>Opening Hours</h3>
              <p>Mon-Fri: 6:00PM - 12:00AM</p>
              <p>Sat-Sun: 5:00PM - 1:00AM</p>
            </motion.div>
          </div>
          
          {/* Social Media */}
          <div className="social-section">
            <h3>Connect With Us</h3>
            <motion.div className="social-icons">
              <motion.a 
                href="https://facebook.com" 
                aria-label="Facebook"
                whileHover={{ y: -3, scale: 1.1 }}
                className="social-icon"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                aria-label="Instagram"
                whileHover={{ y: -3, scale: 1.1 }}
                className="social-icon"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                aria-label="Twitter"
                whileHover={{ y: -3, scale: 1.1 }}
                className="social-icon"
              >
                <FaTwitter />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Map Section */}
        <motion.div 
          className="premium-map-container"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="map-overlay" onClick={() => setIsMapLoaded(true)}>
            {!isMapLoaded && (
              <div className="map-placeholder">
                <FaMapMarkerAlt className="placeholder-icon" />
                <p>Click to view our location</p>
              </div>
            )}
            <iframe
              title="Chai Mahfil Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.9122813727134!2d71.27616070326475!3d29.12923689542192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393bcb00347607a5%3A0x52b5463959aa97a5!2sChai%20Mahfil!5e1!3m2!1sen!2s!4v1750007079711!5m2!1sen!2s${isMapLoaded ? '' : '&output=embed'}`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: isMapLoaded ? 'none' : 'blur(5px)' }}
              allowFullScreen=""
              loading="lazy"
              className={isMapLoaded ? 'map-loaded' : ''}
            ></iframe>
          </div>
        </motion.div>
      </div>
      
      {/* Footer CTA */}
      <div className="contact-cta">
        <FaGlassCheers className="cta-icon" />
        <h3>Ready to experience premium chai?</h3>
        <motion.a 
          href="/contact" 
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(217, 119, 6, 0.4)' }}
        >
          Visit Now!
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;