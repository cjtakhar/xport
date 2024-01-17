// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-logo">xport</div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li className="navbar-link">
          <Link to="/login">Login</Link> 
        </li>
        <li className="navbar-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
// App.js
