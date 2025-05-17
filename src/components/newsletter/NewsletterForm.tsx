
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  className?: string;
  buttonLabel?: string;
  placeholder?: string;
  darkMode?: boolean;
}

const NewsletterForm = ({
  className = "",
  buttonLabel = "Subscribe",
  placeholder = "Your email address",
  darkMode = false
}: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real application, this would call an API endpoint
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Reset form
      setEmail("");
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <Input 
        type="email" 
        placeholder={placeholder} 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={darkMode ? "bg-coffee text-white placeholder-coffee-light border-coffee" : ""} 
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className={darkMode ? "w-full bg-forest hover:bg-forest-dark text-white" : "w-full bg-coffee hover:bg-coffee-dark"}
        disabled={isLoading}
      >
        {isLoading ? "Subscribing..." : buttonLabel}
      </Button>
    </form>
  );
};

export default NewsletterForm;
