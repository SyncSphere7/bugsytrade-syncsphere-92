
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png" 
          alt="Global coffee trade network" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Experience Uganda's Finest?
            </h2>
            <p className="text-lg md:text-xl text-coffee-light mb-10">
              Whether you're a producer looking to expand your market or an importer seeking premium products, 
              we're here to facilitate connections that benefit all parties.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-coffee hover:bg-coffee-dark text-white">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coffee-dark">
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
