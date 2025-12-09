import React from 'react';

const ThemeBlob = ({ isOpen, closeMenu, onNavigate }) => {
  
  const handleThemeClick = (e, path, text) => {
    e.preventDefault();
    onNavigate(path, text); 
  };

  return (
    <div className={`theme-blob ${isOpen ? 'active' : ''}`} id="theme-blob">
        <svg className="theme-blob-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M43.2,-68.1C51.4,-61.9,50.4,-42.2,51.5,-27.2C52.7,-12.2,55.9,-1.8,57.9,10.7C59.8,23.3,60.4,38.1,54.4,49.6C48.3,61.1,35.5,69.2,23,68.4C10.4,67.6,-1.8,57.8,-13.7,51.9C-25.6,46.1,-37.2,44.1,-45,37.6C-52.7,31.1,-56.7,19.9,-56.6,9.2C-56.5,-1.5,-52.3,-11.8,-49.3,-24.2C-46.2,-36.6,-44.3,-51.3,-36.3,-57.6C-28.3,-63.8,-14.1,-61.7,1.7,-64.3C17.5,-66.9,35,-74.2,43.2,-68.1Z" transform="translate(100 100)" />
        </svg>
        <div className="theme-blob-inner">
            <div className="theme-blob-title">SWITCH THEME</div>
            <div className="theme-blob-menu dropdown-menu">
                
                <a href="#" className="dropdown-item" onClick={(e) => handleThemeClick(e, '/themes/king-of-curses', "GATHERING CURSED ENERGY")}>
                    <span className="d-icon">👹</span> King of Curses
                </a>
                
                <a href="#" className="dropdown-item" onClick={(e) => handleThemeClick(e, '/', "SYSTEM RESET")}>
                    <span className="d-icon">🏠</span> Home
                </a>

            </div>
        </div>
    </div>
  );
};

export default ThemeBlob;