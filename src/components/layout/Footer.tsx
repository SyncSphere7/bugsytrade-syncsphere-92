import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c.png" 
                alt="Bugsy International Trade Logo" 
                className="h-8 w-auto" 
              />
              <span className="text-2xl font-serif font-bold">Bugsy International Trade Ltd</span>
            </div>
            <p className="text-coffee-light max-w-xs">
              Connecting Ugandan coffee, tea, vanilla, and corn flour producers with European importers through sustainable and ethical trading.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-coffee-light hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-coffee-light hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/company/bugsy-international-trade-ltd/" target="_blank" rel="noopener noreferrer"
                className="text-coffee-light hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="text-coffee-light hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/producers" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Producers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/import-process" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Import Process
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coffee-light mt-1 shrink-0" />
                <span>P.O.Box 183371, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-light shrink-0" />
                <span>WhatsApp: +256 786 700 022</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-light shrink-0" />
                <span>office@bugsytrade.com</span>
              </li>
            </ul>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://ugandacoffee.go.ug" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-coffee-light hover:text-white hover-underline transition-colors"
                >
                  Uganda Coffee Development Authority
                </a>
              </li>
              <li>
                <a 
                  href="https://www.agriculture.go.ug/the-ministry/"
                  target="_blank"
                  rel="noopener noreferrer"  
                  className="text-coffee-light hover:text-white hover-underline transition-colors"
                >
                  Ministry of Agriculture Uganda
                </a>
              </li>
              <li>
                <a 
                  href="https://ugandacoffeefederation.org/resource-center/uganda-coffee-industry/"
                  target="_blank"
                  rel="noopener noreferrer"  
                  className="text-coffee-light hover:text-white hover-underline transition-colors"
                >
                  Uganda Coffee Federation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-coffee">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-coffee-light text-sm">
              © {new Date().getFullYear()} Bugsy International Trade Ltd. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <p className="text-coffee-light text-sm">
                Made by <a 
                  href="https://syncsphereofficial.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:underline">
                    SyncSphere
                </a>
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-coffee-light hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="text-coffee-light hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
