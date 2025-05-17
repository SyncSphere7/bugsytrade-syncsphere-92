
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Define which routes should have an initially visible navbar
  const routesWithVisibleNavbar = ['/producers', '/services', '/about', '/blog'];
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

  // Determine the text color based on scroll state and route
  const getTextColorClass = () => {
    if (isScrolled || isRouteWithVisibleNavbar) {
      return 'text-gray-800 dark:text-gray-200';
    }
    return 'text-white';
  };

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
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c.png" 
              alt="Logo" 
              className="h-10 w-auto" 
            />
          </Link>
          
          {/* Desktop navigation - Centered menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-base font-medium transition hover-underline ${getTextColorClass()}`}>
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800">
                <DropdownMenuItem>
                  <Link to="/products/coffee" className="w-full">Coffee</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products/tea" className="w-full">Tea</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products/cocoa" className="w-full">Cocoa</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/producers" 
              className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
            >
              Producers
            </Link>
            <Link 
              to="/services" 
              className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
            >
              Blog
            </Link>
          </nav>
          
          {/* Contact Us button - Right aligned */}
          <Link to="/contact" className="hidden lg:block">
            <Button 
              variant={isScrolled || isRouteWithVisibleNavbar ? "default" : "outline"} 
              className={`rounded-md ${!isScrolled && !isRouteWithVisibleNavbar ? 'text-white border-white hover:text-white bg-transparent hover:bg-white/20' : ''}`}
            >
              Contact Us
            </Button>
          </Link>
          
          {/* Mobile menu button - kept at right side for mobile */}
          <div className="lg:hidden">
            <button 
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={getTextColorClass()}>Menu</span>
              {mobileMenuOpen ? (
                <span className={`text-2xl ${getTextColorClass()}`}>×</span>
              ) : (
                <span className={`text-2xl ${getTextColorClass()}`}>≡</span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - Slide in from right */}
      <div 
        className={`fixed inset-0 bg-coffee-dark z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-6 p-6 overflow-y-auto">
          <Link 
            to="/" 
            className="text-xl font-medium text-white hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className="flex flex-col items-center space-y-4">
            <span className="text-xl font-medium text-white">Products</span>
            <Link 
              to="/products/coffee" 
              className="text-lg font-medium text-primary hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Coffee
            </Link>
            <Link 
              to="/products/tea" 
              className="text-lg font-medium text-primary hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tea
            </Link>
            <Link 
              to="/products/cocoa" 
              className="text-lg font-medium text-primary hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cocoa
            </Link>
          </div>
          
          <Link 
            to="/producers" 
            className="text-xl font-medium text-white hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Producers
          </Link>
          
          <Link 
            to="/services" 
            className="text-xl font-medium text-white hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          
          <Link 
            to="/about" 
            className="text-xl font-medium text-white hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          <Link 
            to="/blog" 
            className="text-xl font-medium text-white hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          
          <Link 
            to="/contact" 
            className="mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-2 rounded-md border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
