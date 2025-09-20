import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import chainChapterLogo from '../assets/Chain Chapter.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but only after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border border-white/10 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        borderRadius: '0 0 20px 20px',
        margin: '0 16px',
        width: 'calc(100% - 32px)',
        maxWidth: 'calc(100vw - 32px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={chainChapterLogo} 
              alt="Chain Chapter" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-semibold text-lg">Chain Chapter</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#who-we-are" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Who We Are
            </a>
            <a 
              href="#what-we-do" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              What We Do
            </a>
            <a 
              href="#events" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Events
            </a>
            <a 
              href="#opportunities" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Opportunities
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              <a 
                href="#who-we-are" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </a>
              <a 
                href="#what-we-do" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Do
              </a>
              <a 
                href="#events" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#opportunities" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Opportunities
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
