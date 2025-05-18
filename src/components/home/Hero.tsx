
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxValue = scrollY * 0.2;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Parallax Image - Brighter version */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110"
        style={{ 
          backgroundImage: `url('/lovable-uploads/832530d3-5298-42e6-ba50-d9e7b79a44e4.png')`,
          transform: `translateY(${parallaxValue}px)`,
          backgroundPositionY: `${-parallaxValue * 0.5}px`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-4 gap-3"
          >
            <p className="text-white font-medium text-lg md:text-xl">Bugsy International Trade Ltd</p>
            <img 
              src="https://flagcdn.com/w40/ug.png" 
              alt="Uganda Flag" 
              className="h-6 w-auto ml-2" 
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Connecting Uganda's Finest <span className="text-forest-light">Agricultural Products</span> to The World
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            Bridging the gap between Uganda's premium producers and European importers through sustainable and ethical relationships.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/products">
              <Button size="lg" className="text-base bg-coffee hover:bg-coffee-dark">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-base text-white border-coffee bg-coffee-dark/70 hover:bg-white hover:text-coffee-dark">
                Connect With Us
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-white opacity-80 hover:opacity-100 transition">
            <svg className="w-6 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
