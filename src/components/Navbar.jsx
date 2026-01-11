import React, { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  const navStyles = {
    position: 'sticky',
    top: '15px',
    zIndex: 1000,
    width: '90%',
    margin: '0 auto',
    backgroundColor: isDark ? 'rgba(5, 5, 5, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    border: '1px solid var(--border-color)',
    borderRadius: '50px',
    backdropFilter: 'blur(12px)',
    boxShadow: isDark ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const mobileMenuStyles = {
    position: 'absolute',
    top: '80px',
    left: 0,
    width: '100%',
    backgroundColor: isDark ? 'rgba(5, 5, 5, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    padding: '1rem',
    borderRadius: '24px',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backdropFilter: 'blur(12px)',
    zIndex: 1001,
  };

  return (
    <nav style={navStyles}>
      <div className="container flex items-center justify-between" style={{ height: '60px' }}>
        <a href="#" style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)'
        }}>
          Webloom
        </a>

        {/* Center Links - Desktop */}
        <div className="desktop-menu absolute-center flex items-center gap-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Right Buttons - Desktop */}
        <div className="desktop-menu flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className="theme-toggle"
                aria-label="Toggle Theme"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">Get Started</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn flex flex-row gap-1"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px',display: 'flex',flexDirection: 'column',gap: '4px'  }}
        >
          <span style={{ width: '16px', height: '2px', backgroundColor: 'var(--text-primary)', display: 'block' }}></span>
          <span style={{ width: '16px', height: '2px', backgroundColor: 'var(--text-primary)', display: 'block' }}></span>
          <span style={{ width: '16px', height: '2px', backgroundColor: 'var(--text-primary)', display: 'block' }}></span>
        </button>
      </div> 
      
      {/* Basic Mobile Menu */}
      {isOpen && (
          <div style={mobileMenuStyles}>
              <a href="#services" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)' }}>Services</a>
              <a href="#team" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)' }}>Team</a>
              <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)' }}>Contact</a>
              <button 
                onClick={() => { toggleTheme(); setIsOpen(false); }}
                style={{ textAlign: 'left', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
              >
                  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              </button>
          </div>
      )}
    </nav>
  );
};

export default Navbar;