import React, { useState } from 'react';

const Services = () => {
  const [zoomEffect, setZoomEffect] = useState(null);

  const handleMouseEnter = (index) => {
    setZoomEffect(index);
  };

  const handleMouseLeave = () => {
    setZoomEffect(null);
  };

  return (
    <div className="services-container">
      {['Web Development', 'Mobile App Development', 'UI/UX Design', 'SEO Optimization', 'Cloud Computing', 'Digital Marketing'].map((service, index) => (
        <div
          key={index}
          className={`service-item ${zoomEffect === index ? 'zoom-in' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <h3>{service}</h3>
          <p>Description of the service.</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
