// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Profile from '../assets/ugomma.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Business</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <img src= { Profile } style={{ width: "50px", height: "30px", borderRadius: "50%" }} alt="ugomma" />
      </ul>
      <button className="cta-button">
        <Link to="/registration">Register Now</Link>
      </button>
    </nav>
  );
};

export default Navbar;
