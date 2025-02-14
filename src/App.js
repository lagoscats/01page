// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Profile from "./assets/ugomma.png";
import Registration from "./pages/Registration";
import "./App.css"; // Global styling

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
