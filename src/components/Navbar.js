import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="chai-icon">☕</span>
          Chai Chronicles
        </Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 