
import { Link } from 'react-router-dom';

interface CompanyLogoProps {
  isScrolled: boolean;
  isRouteWithVisibleNavbar: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ isScrolled, isRouteWithVisibleNavbar }) => {
  // Determine if we should use the white logo based on scroll state and route
  const shouldUseWhiteLogo = !isScrolled && !isRouteWithVisibleNavbar;
  
  return (
    <Link to="/" className="flex items-center z-10">
      <img 
        src={shouldUseWhiteLogo 
          ? "/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c-white.png" 
          : "/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c.png"
        }
        alt="Bugsy International Trade Ltd Logo" 
        className="h-10 w-auto" 
      />
      
      {/* Hidden image preload for smooth transitions */}
      <img 
        src="/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c-white.png"
        className="hidden" 
        alt="" 
      />
    </Link>
  );
};

export default CompanyLogo;
