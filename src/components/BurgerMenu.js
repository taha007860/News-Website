import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import style from '../styles/BurgerMenu.css';

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getMenuIcon = () => {
    return isMenuOpen ? <FaTimes /> : <FaBars />;
  };

  return (
    <div className="burger-menu" onClick={handleMenuClick}>
      <div className="menu-icon">{getMenuIcon()}</div>
      {isMenuOpen && (
        <ul className="menu-list">
          <li><a href="#">الرئيسية</a></li>
            <li><a href="#">الأخبار</a></li>
            <li><a href="#">الرياضة</a></li>
            <li><a href="#">الاقتصاد</a></li>
            <li><a href="#">الثقافة</a></li>
            <li><a href="#">فيديو وصور</a></li>
            <li><a href="#">اراء</a></li>
        </ul>
      )}
    </div>
  );
}

export default BurgerMenu;
