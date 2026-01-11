import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', textAlign: 'center' }}>
            <div>
                 <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-blue)' }}>
                    StartUp.
                </a>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '400px' }}>
                    Building the future with blue light precision.
                </p>
            </div>

            <div className="flex gap-4">
                <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
            </div>
            
             <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-color)' }}></div>
             
             <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                 &copy; {new Date().getFullYear()} StartUp Idea. All rights reserved.
             </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
