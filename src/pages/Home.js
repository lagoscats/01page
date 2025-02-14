import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const Home = () => {
  const navigate = useNavigate();

  const navigateToRegistration = () => {
    navigate("/registration"); // Redirect to the registration page
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="heading">Welcome to Our Website!</h1>
        <p className="subheading">
          Sign up today to start your journey with us.
        </p>
        <button className="cta-button" onClick={navigateToRegistration}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
