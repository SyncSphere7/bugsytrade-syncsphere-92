
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  isScrolled: boolean;
  isRouteWithVisibleNavbar: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({ isScrolled, isRouteWithVisibleNavbar }) => {
  return (
    <Link to="/contact" className="hidden lg:block">
      <Button 
        variant={isScrolled || isRouteWithVisibleNavbar ? "default" : "outline"} 
        className={`rounded-md ${!isScrolled && !isRouteWithVisibleNavbar ? 'text-white border-white hover:bg-white/20' : ''}`}
      >
        Contact Us
      </Button>
    </Link>
  );
};

export default ContactButton;
