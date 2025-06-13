import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-name">Chai Mahfil</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/info" className="nav-link">Info</Link>
          <Link to="/contact" className="nav-link cart-icon">
            <FaShoppingCart />
          </Link>
        </nav>
        
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;