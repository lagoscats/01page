import React from "react";
import { Link } from "react-router-dom"; // For linking to the registration page
import About from "./About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
/*import HeroImage from './HeroImage'; // Example of another component you may have*/

const Home = () => {
  return (
    <div className="home">
      
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>Welcome to Our Amazing App!</h1>
          <p>Join us now to experience the future of web technology.</p>

          {/* Call to Action Button */}
          <Link to="/registration" className="cta-button">
            Register Now
          </Link>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
      <Pricing />

      {/* Footer with Social Media Links */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 YourCompany. All rights reserved.</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
