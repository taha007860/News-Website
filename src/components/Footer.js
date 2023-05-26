import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-section">
        <h4 id="only">بما تتطلبه</h4>
        <ul>
          <li>هناك العديد من أنواع</li>
          <li>بعض التوتر أو الكلمات</li>
          <li>يجب التحقق منها فورا</li>
        </ul>
      </div>
      <div id="none1" className="footer-section">
      <h4>بما تتطلبه</h4>
        <ul>
          <li>هناك العديد من أنواع</li>
          <li>بعض التوتر أو الكلمات</li>
          <li>يجب التحقق منها فورا</li>
        </ul>
      </div>
      <div id="none" className="footer-section">
      <h4>بما تتطلبه</h4>
        <ul>
          <li>هناك العديد من أنواع</li>
          <li>بعض التوتر أو الكلمات</li>
          <li>يجب التحقق منها فورا</li>
        </ul>
      </div>
      <div className="footer-section">
      </div>
      <div className="footer-section">
      <h4 id="you">مشاهدة على توبار</h4>
      <div id="flex">
      <div className="register-bar">
          <input type="email" />
          <button>للاشتراك</button>
        </div>
        <div className="social-icons">
          {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="http://pteris.com/Images/100089-green-metallic-orb-icon-social-media-logos-linkedin-logo.png" alt="LinkedIn" />
          </a>

          {/* Facebook icon */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.writeon.net.au/wp-content/uploads/2013/03/green-facebook-icon.jpg" alt="Facebook" />
          </a>

          {/* Twitter icon */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="http://www.clipartbest.com/cliparts/aiq/Lak/aiqLak46T.png" alt="Twitter" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
