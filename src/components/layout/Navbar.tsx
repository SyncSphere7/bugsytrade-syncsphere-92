
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md py-3 backdrop-blur-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <img 
              src="/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c.png" 
              alt="Logo" 
              className="h-10 w-auto" 
            />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover-underline text-base font-medium transition ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button 
                className={`flex items-center text-base font-medium transition hover-underline ${
                  isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
                }`}
                onClick={toggleProductsDropdown}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/products/coffee" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Coffee</Link>
                  <Link to="/products/tea" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Tea</Link>
                  <Link to="/products/cocoa" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Cocoa</Link>
                </div>
              </div>
            </div>
            <Link 
              to="/producers" 
              className={`hover-underline text-base font-medium transition ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Producers
            </Link>
            <Link 
              to="/services" 
              className={`hover-underline text-base font-medium transition ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`hover-underline text-base font-medium transition ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`hover-underline text-base font-medium transition ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Blog
            </Link>
          </nav>
          
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant={isScrolled ? "default" : "outline"} className="btn-hover-slide">
                Contact Us
              </Button>
            </Link>
          </div>
          
          <button 
            className="lg:hidden z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
            )}
          </button>
          
          {/* Mobile menu */}
          <div 
            className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
              <Link 
                to="/" 
                className="text-2xl font-medium text-white hover:text-coffee-light transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="flex flex-col items-center">
                <button 
                  className="text-2xl font-medium text-white hover:text-coffee-light transition flex items-center"
                  onClick={toggleProductsDropdown}
                >
                  Products <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {productsDropdownOpen && (
                  <div className="flex flex-col items-center mt-3 space-y-3">
                    <Link 
                      to="/products/coffee" 
                      className="text-xl font-medium text-coffee-light hover:text-white transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Coffee
                    </Link>
                    <Link 
                      to="/products/tea" 
                      className="text-xl font-medium text-coffee-light hover:text-white transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Tea
                    </Link>
                    <Link 
                      to="/products/cocoa" 
                      className="text-xl font-medium text-coffee-light hover:text-white transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Cocoa
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/producers" 
                className="text-2xl font-medium text-white hover:text-coffee-light transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Producers
              </Link>
              
              <Link 
                to="/services" 
                className="text-2xl font-medium text-white hover:text-coffee-light transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              
              <Link 
                to="/about" 
                className="text-2xl font-medium text-white hover:text-coffee-light transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/blog" 
                className="text-2xl font-medium text-white hover:text-coffee-light transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/contact" 
                className="mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-black transition">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
