import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="C:\Users\TEC-GATE\chat\public\logo512.pngg" alt="Logo" />
        <span className="logo-text">Logo text</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Features">Features</a></li>
        <li><a href="/Pricing">Pricing</a></li>
      
          <li><a href="/Login">Login</a></li>
        <li><a href="/SignUp">Sign Up</a></li>
     
      </ul>
    </nav>
  );
};

export default Navbar;
