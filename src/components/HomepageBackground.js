import React from 'react';
import '../styles/HomepageBackground.css';
import logo from '../assets/logo.jpeg';
function HomepageBackground() {
  return (
    <div className="homepage-background">
         <div className="white-background"></div>
         <div className="image-container">
      <img src={logo} alt="your-image-description" />
      <label id="label">الأخبار المحلية</label>
    </div>
    </div>
  );
}

export default HomepageBackground;