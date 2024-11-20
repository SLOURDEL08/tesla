import React, { useState } from 'react';
import { dropdownData } from '../../../../data/dropdownData';
import { navigationItems } from '../../../../data/navigationData';

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isContentView, setIsContentView] = useState(false);

  const openSection = (id) => {
    setActiveSection(id);
    setIsContentView(true);
  };

  const goBack = () => {
    setIsContentView(false);
    setActiveSection(null);
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      {!isContentView ? (
        <>
          <div className="mobile-menu-header">
            <span></span>
            <span className="menu-title">Menu</span>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>

          <div className="mobile-sections-grid">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                className="section-button"
                onClick={() => openSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mobile-menu-header">
            <button className="back-btn" onClick={goBack}>←</button>
            <span className="menu-title">
              {navigationItems.find(item => item.id === activeSection)?.label}
            </span>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>

          <div className="section-content">
            {activeSection === 'disco-dp' ? (
              <div className="discover-mobile-grid">
                {dropdownData[activeSection].items.map((section, index) => (
                  <div key={index} className="discover-mobile-section">
                    <h3>{section.title}</h3>
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>{link}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mobile-grid">
                {dropdownData[activeSection]?.items.map((menuItem, index) => (
                  <div key={index} className="mobile-grid-item">
                    {menuItem.image && <img src={menuItem.image} alt={menuItem.name} />}
                    <p>{menuItem.name}</p>
                    <div className="mobile-links">
                      {menuItem.links?.map((link, i) => (
                        <a key={i} href="/">{link}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      <div className="mobile-menu-footer">
        <button className="footer-btn">
          <img src="question.png" alt="Support" />
          <span>Support</span>
        </button>
        <button className="footer-btn">
          <img src="globe.png" alt="Language" />
          <span>Language</span>
        </button>
        <button className="footer-btn">
          <img src="user.png" alt="Account" />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;