
import { Link } from 'react-router-dom';

interface CompanyLogoProps {
  isScrolled: boolean;
  isRouteWithVisibleNavbar: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ isScrolled, isRouteWithVisibleNavbar }) => {
  return (
    <Link to="/" className="flex items-center z-10">
      <img 
        src="/lovable-uploads/af02a5f0-874d-47bc-8efa-6d232827a50c.png" 
        alt="Bugsy International Trade Ltd Logo" 
        className="h-10 w-auto" 
      />
    </Link>
  );
};

export default CompanyLogo;
