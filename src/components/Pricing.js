import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Trigger zoom effect when the component is mounted (optional)
    setIsZoomed(true);
  }, []);

  return (
    <div className="pricing-container">
      <h1>Our Prices</h1>
      <div
        className={`pricing-item ${isZoomed ? 'zoom-in' : ''}`}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <h2>Basic Plan</h2>
        <p>$10/month</p>
      </div>
      <div
        className={`pricing-item ${isZoomed ? 'zoom-in' : ''}`}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <h2>Pro Plan</h2>
        <p>$20/month</p>
      </div>
      <div
        className={`pricing-item ${isZoomed ? 'zoom-in' : ''}`}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <h2>Enterprise Plan</h2>
        <p>$50/month</p>
      </div>
    </div>
  );
};

export default Pricing;
