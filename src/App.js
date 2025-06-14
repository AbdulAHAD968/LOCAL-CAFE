import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> {/* fallback 404 */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
