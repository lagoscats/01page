import React from "react";
/*import { useNavigate } from "react-router-dom"; // For navigation (optional)*/

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="heading">About Us</h1>
        <p className="description">
          We are a team of passionate individuals dedicated to creating amazing experiences for our users.
        </p>
        <p className="details">
          Our mission is to empower people through innovation, creativity, and a relentless pursuit of excellence.
        </p>
        <a href="mailto:chinedufidelis321@gmail.com" className="cta-button">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
