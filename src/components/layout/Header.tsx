import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = 'auto';
  }, [location]);

  // Toggle body scroll when mobile menu is open/closed
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Who We Are', section: 'about' },
    { name: 'What We Do', section: 'services' },
    { name: 'Featured Work', section: 'portfolio' },
    { name: 'Contact Us', section: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    return true; // Always handle the navigation
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      role="banner"
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          aria-label="Renovations - Home"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/portfolio/logo.png" 
              alt="Renovations Builder Logo" 
              className="logo-header w-auto" 
              loading="eager"
            />
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={`#${item.section}`}
                className={`font-medium transition-colors duration-300 ${isScrolled ? "" : "text-white"} ${location.pathname === '/' && document.getElementById(item.section) ? (document.getElementById(item.section)!.getBoundingClientRect().top <= 100 ? '' : 'text-gray-700 hover:text-primary-500') : 'text-gray-700 hover:text-primary-500'}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.section);
                }}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${isScrolled ? "black" : "white"}`}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.section}`}
                  className={`font-medium transition-colors duration-300 py-2 ${location.pathname === '/' && document.getElementById(item.section) ? (document.getElementById(item.section)!.getBoundingClientRect().top <= 100 ? '' : 'text-gray-700 hover:text-primary-500') : 'text-gray-700 hover:text-primary-500'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.section);
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                    }, 900); // delay closing so scroll happens first
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;