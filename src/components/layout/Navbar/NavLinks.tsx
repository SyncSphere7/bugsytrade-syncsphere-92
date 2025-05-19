
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinksProps {
  isScrolled: boolean;
  isRouteWithVisibleNavbar: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isScrolled, isRouteWithVisibleNavbar }) => {
  // Determine the text color class based on scroll state and route
  const getTextColorClass = () => {
    if (isScrolled || isRouteWithVisibleNavbar) {
      return 'text-gray-800 dark:text-gray-200';
    }
    return 'text-white';
  };

  return (
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
            <Link to="/products/vanilla" className="w-full">Vanilla</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/products/corn-flour" className="w-full">Corn Flour (Maize)</Link>
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
        to="/import-process" 
        className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
      >
        Import Process
      </Link>
      <Link 
        to="/gallery" 
        className={`hover-underline text-base font-medium transition ${getTextColorClass()}`}
      >
        Gallery
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
  );
};

export default NavLinks;
