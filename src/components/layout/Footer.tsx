
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 5000,
      });
      form.reset();
    }, 500);
  };

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
              <span className="text-2xl font-serif font-bold">Bugsy International Trade</span>
            </div>
            <p className="text-coffee-light max-w-xs">
              Connecting Ugandan coffee, tea, and cocoa producers with European importers through sustainable and ethical trading.
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-coffee-light hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
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
                <Link to="/products/coffee" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Coffee
                </Link>
              </li>
              <li>
                <Link to="/products/tea" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Tea
                </Link>
              </li>
              <li>
                <Link to="/products/cocoa" className="text-coffee-light hover:text-white hover-underline transition-colors">
                  Cocoa
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
                <span>123 Coffee Rd, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-light shrink-0" />
                <span>+256 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-light shrink-0" />
                <span>info@bugsytrade.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-coffee-light mb-4">
              Subscribe to our newsletter to receive updates on market trends, new producers, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                required 
                className="bg-coffee text-white placeholder-coffee-light border-coffee" 
              />
              <Button type="submit" className="w-full bg-forest hover:bg-forest-dark text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-coffee">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-coffee-light text-sm">
              © {new Date().getFullYear()} Bugsy International Trade. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
    </footer>
  );
};

export default Footer;
