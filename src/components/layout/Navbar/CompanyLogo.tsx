
import { Link, useLocation } from 'react-router-dom';

interface CompanyLogoProps {
  isScrolled: boolean;
  isRouteWithVisibleNavbar: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ isScrolled, isRouteWithVisibleNavbar }) => {
  const location = useLocation();
  // Determine if we should use the white logo based on scroll state and route
  // We specifically want the white logo on the home page (/) when not scrolled
  const shouldUseWhiteLogo = !isScrolled && location.pathname === "/" && !isRouteWithVisibleNavbar;
  
  return (
    <Link to="/" className="flex items-center z-10">
      {shouldUseWhiteLogo ? (
        // White version for dark backgrounds
        <img 
          src="/lovable-uploads/8f18eb04-dc0e-4a5a-9498-4783405cbc41.png"
          alt="Bugsy International Trade Ltd Logo" 
          className="h-10 w-auto" 
        />
      ) : (
        // Regular dark version for light backgrounds
        <img 
          src="/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c.png"
          alt="Bugsy International Trade Ltd Logo" 
          className="h-10 w-auto" 
        />
      )}
      
      {/* Hidden image preload for smooth transitions */}
      <img 
        src="/lovable-uploads/8f18eb04-dc0e-4a5a-9498-4783405cbc41.png"
        className="hidden" 
        alt="" 
      />
    </Link>
  );
};

export default CompanyLogo;
