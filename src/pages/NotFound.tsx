
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-cream">
        <div className="text-center max-w-md px-6">
          <Coffee className="h-16 w-16 text-coffee mx-auto mb-6" strokeWidth={1.5} />
          <h1 className="text-5xl font-serif font-bold text-coffee-dark mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            Oops! We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-coffee hover:bg-coffee-dark">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
