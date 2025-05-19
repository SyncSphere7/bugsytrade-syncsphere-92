
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import CompanyLogo from './CompanyLogo';
import ContactButton from './ContactButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Define which routes should have an initially visible navbar
  const routesWithVisibleNavbar = ['/producers', '/services', '/about', '/gallery', '/movies', '/import-process'];
  const isRouteWithVisibleNavbar = routesWithVisibleNavbar.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isRouteWithVisibleNavbar
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md py-3 backdrop-blur-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <CompanyLogo isScrolled={isScrolled} isRouteWithVisibleNavbar={isRouteWithVisibleNavbar} />
          
          {/* Desktop navigation - Centered menu */}
          <NavLinks isScrolled={isScrolled} isRouteWithVisibleNavbar={isRouteWithVisibleNavbar} />
          
          {/* Contact Us button - Right aligned */}
          <ContactButton isScrolled={isScrolled} isRouteWithVisibleNavbar={isRouteWithVisibleNavbar} />
          
          {/* Mobile menu button - kept at right side for mobile */}
          <div className="lg:hidden">
            <button 
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={isScrolled || isRouteWithVisibleNavbar ? 'text-gray-800' : 'text-white'}>Menu</span>
              {mobileMenuOpen ? (
                <span className={`text-2xl ${isScrolled || isRouteWithVisibleNavbar ? 'text-gray-800' : 'text-white'}`}>×</span>
              ) : (
                <span className={`text-2xl ${isScrolled || isRouteWithVisibleNavbar ? 'text-gray-800' : 'text-white'}`}>≡</span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
