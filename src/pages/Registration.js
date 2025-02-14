import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [zoomEffect, setZoomEffect] = useState(null);

  useEffect(() => {
    // Trigger zoom effect when the component mounts (optional)
    setZoomEffect(true);
  }, []);

  const handleMouseEnter = (direction) => {
    setZoomEffect(direction);
  };

  const handleMouseLeave = () => {
    setZoomEffect(null);
  };

  return (
    <div className="registration-container">
      <div
        className={`registration-form ${zoomEffect === true ? 'zoom-in-left' : zoomEffect === false ? 'zoom-in-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(true)}  // Zoom from the left on hover
        onMouseLeave={handleMouseLeave}
      >
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
