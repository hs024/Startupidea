import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg-primary py-16 border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center gap-8 text-center">
            <div>
                 <a href="#" className="text-2xl font-extrabold text-accent-blue tracking-tight">
                    StartUp.
                </a>
                <p className="text-text-secondary mt-2 max-w-[400px]">
                    Building the future with blue light precision.
                </p>
            </div>

            <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((link) => (
                    <a key={link} href="#" className="text-text-secondary hover:text-accent-blue transition-colors">
                        {link}
                    </a>
                ))}
            </div>
            
             <div className="w-full h-px bg-border"></div>
             
             <p className="text-text-secondary text-sm">
                 &copy; {new Date().getFullYear()} StartUp Idea. All rights reserved.
             </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
