import React, { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <nav className={`sticky top-4 z-[1000] w-[90%] mx-auto rounded-[50px] backdrop-blur-xl border border-border transition-all duration-300 ease-in-out ${
      isDark ? 'bg-black/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' : 'bg-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]'
    }`}>
      <div className="container flex items-center justify-between h-[60px]">
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-text-primary">
          Webloom
        </a>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {['Services', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-text-primary hover:text-accent-blue transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Right Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-white/5 border border-border text-text-primary hover:bg-white/10 transition-all text-lg"
                aria-label="Toggle Theme"
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <a href="#contact" className="px-6 py-2.5 rounded-full text-sm font-semibold bg-accent-blue text-button-text shadow-[0_0_15px_var(--accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_0_25px_var(--accent-glow)] hover:brightness-110 transition-all">
              Get Started
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-text-primary block"></span>
          <span className="w-6 h-0.5 bg-text-primary block"></span>
          <span className="w-6 h-0.5 bg-text-primary block"></span>
        </button>
      </div>
      
      {/* Basic Mobile Menu */}
      {isOpen && (
          <div className={`absolute top-20 left-0 w-full p-4 rounded-3xl border border-border flex flex-col gap-4 backdrop-blur-xl z-[1001] ${
            isDark ? 'bg-black/95' : 'bg-white/95'
          }`}>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-text-primary hover:text-accent-blue">Services</a>
              <a href="#team" onClick={() => setIsOpen(false)} className="text-text-primary hover:text-accent-blue">Team</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-text-primary hover:text-accent-blue">Contact</a>
              <button 
                onClick={() => { toggleTheme(); setIsOpen(false); }}
                className="text-left text-text-primary hover:text-accent-blue"
              >
                  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              </button>
          </div>
      )}
    </nav>
  );
};

export default Navbar;