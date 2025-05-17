
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Users, Shield } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <RevealOnScroll delay={delay}>
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full"
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-coffee/10 p-3 rounded-xl inline-block mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-serif mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </RevealOnScroll>
  );
};

const Services = () => {
  const services = [
    {
      title: "Market Access",
      description: "We connect Ugandan producers with European importers looking for high-quality products, opening new market opportunities.",
      icon: <Globe className="h-6 w-6 text-coffee" />,
      delay: 0
    },
    {
      title: "Trade Facilitation",
      description: "Our team manages the entire export process, from documentation to logistics, making international trade seamless.",
      icon: <TrendingUp className="h-6 w-6 text-coffee" />,
      delay: 1
    },
    {
      title: "Producer Support",
      description: "We work closely with local producers to improve quality, sustainability practices, and meet international standards.",
      icon: <Users className="h-6 w-6 text-coffee" />,
      delay: 2
    },
    {
      title: "Quality Assurance",
      description: "Our rigorous quality control processes ensure that every product meets the highest standards before export.",
      icon: <Shield className="h-6 w-6 text-coffee" />,
      delay: 3
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            title="Our Services"
            subtitle="We provide comprehensive support for both producers and importers, ensuring a smooth and beneficial trading relationship."
            centered
          />
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <RevealOnScroll delay={4}>
            <Link to="/services">
              <Button size="lg" className="bg-coffee hover:bg-coffee-dark">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Services;
