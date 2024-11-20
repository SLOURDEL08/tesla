import React, { useState, useEffect } from 'react';
import './App.css';
import { navigationItems } from './data/navigationData.js';
import Dropdown from './components/navigation/dropdown/Dropdown.js';
import MobileMenu from './components/navigation/dropdown/mobile/MobileMenu.js';

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDropdownActive = activeDropdown !== null;

  const handleMouseEnterDropdown = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const section2 = document.querySelector('.second');
      const section4 = document.querySelector('.fourth');

      if (window.scrollY > section2?.offsetTop && window.scrollY < section4?.offsetTop) {
        header?.classList.add('scroll-style');
      } else {
        header?.classList.remove('scroll-style');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='contain-header-dropdown'>
      <header>
        <div className={`logo-block ${isDropdownActive ? 'logo-black' : ''}`}>
          <img src='tesla.png' alt='Tesla Logo' />
        </div>
        
        <nav className={`nav-block desktop-nav ${isDropdownActive ? 'items-black' : ''}`}>
          {navigationItems.map(item => (
            <p
              key={item.id}
              className={`item-vehi ${isDropdownActive ? 'items-black' : ''}`}
              onMouseEnter={() => handleMouseEnterDropdown(item.id)}
            >
              {item.label}
            </p>
          ))}
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </button>

        <div className={`btn-nav ${isDropdownActive ? 'btn-black' : ''}`}>
          <img className='btn-icons' src='question.png' alt='Support' />
          <img className='btn-icons' src='globe.png' alt='Language' />
          <img className='btn-icons' src='user.png' alt='Account' />
        </div>
      </header>

      {activeDropdown && (
        <Dropdown
          type={activeDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        />
      )}

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}

export default Header;