
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 bg-coffee-dark z-40 lg:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex flex-col h-full justify-center items-center space-y-6 p-6 overflow-y-auto">
        <Link 
          to="/" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          Home
        </Link>
        
        <div className="flex flex-col items-center space-y-4">
          <span className="text-xl font-medium text-white">Products</span>
          <Link 
            to="/products/coffee" 
            className="text-lg font-medium text-primary hover:text-white transition"
            onClick={onClose}
          >
            Coffee
          </Link>
          <Link 
            to="/products/tea" 
            className="text-lg font-medium text-primary hover:text-white transition"
            onClick={onClose}
          >
            Tea
          </Link>
          <Link 
            to="/products/vanilla" 
            className="text-lg font-medium text-primary hover:text-white transition"
            onClick={onClose}
          >
            Vanilla
          </Link>
          <Link 
            to="/products/corn-flour" 
            className="text-lg font-medium text-primary hover:text-white transition"
            onClick={onClose}
          >
            Corn Flour
          </Link>
        </div>
        
        <Link 
          to="/producers" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          Producers
        </Link>
        
        <Link 
          to="/services" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          Services
        </Link>
        
        <Link 
          to="/import-process" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          Import Process
        </Link>
        
        <Link 
          to="/gallery" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          Gallery
        </Link>
        
        <Link 
          to="/movies" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          Movies
        </Link>
        
        <Link 
          to="/about" 
          className="text-xl font-medium text-white hover:text-primary transition"
          onClick={onClose}
        >
          About
        </Link>
        
        <Link 
          to="/contact" 
          className="mt-4"
          onClick={onClose}
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
  );
};

export default MobileMenu;
