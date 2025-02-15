import React from 'react';

// Import social media icons (you can use Font Awesome, Material Icons, or any library you prefer)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
            <h1 className="heading">Contact Us</h1>
        <p className="description">
          We would love to hear from you! Feel free to reach out with any questions or comments.
        </p>
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>

        <a href="mailto:contact@website.com" className="cta-button">
          Send Us an Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
