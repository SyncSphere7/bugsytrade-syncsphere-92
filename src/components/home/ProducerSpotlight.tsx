
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Producer {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  specialty: string;
}

const ProducerSpotlight = () => {
  const producers: Producer[] = [
    {
      id: 1,
      name: "Rwenzori Mountain Coffee Cooperative",
      location: "Western Uganda",
      description: "This cooperative of small-scale farmers produces exceptional arabica coffee at high altitudes in the Rwenzori Mountains. Their commitment to organic farming practices and community development has earned them recognition for both quality and sustainability.",
      image: "/lovable-uploads/00f33f4c-fcbe-4609-8d08-c3c5dc79b061.png",
      specialty: "Specialty Arabica"
    },
    {
      id: 2,
      name: "Bugisu Organic Farmers Association",
      location: "Eastern Uganda",
      description: "Located on the slopes of Mt. Elgon, these farmers produce some of Uganda's most prized coffee. Their traditional processing methods combined with modern quality control result in beans with distinctive floral notes and bright acidity.",
      image: "/lovable-uploads/832530d3-5298-42e6-ba50-d9e7b79a44e4.png",
      specialty: "Washed Arabica"
    },
    {
      id: 3,
      name: "Ankole Tea Estates",
      location: "Southwestern Uganda",
      description: "This family-owned estate has been growing tea for three generations. Their high-elevation tea gardens produce robust, aromatic teas that are sought after by premium tea brands across Europe for their distinctive character and full-bodied flavor.",
      image: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
      specialty: "Black Tea"
    }
  ];
  
  const [currentProducer, setCurrentProducer] = useState(0);
  const producer = producers[currentProducer];
  
  const nextProducer = () => {
    setCurrentProducer((prev) => (prev + 1) % producers.length);
  };
  
  const prevProducer = () => {
    setCurrentProducer((prev) => (prev - 1 + producers.length) % producers.length);
  };
  
  return (
    <section className="py-24 bg-coffee/5">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            title="Producer Spotlight"
            subtitle="Meet the dedicated farmers and cooperatives behind our exceptional products."
            centered
          />
        </RevealOnScroll>
        
        <div className="mt-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={producer.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={producer.image}
                      alt={producer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
                    <div className="absolute bottom-4 left-4 lg:hidden">
                      <span className="inline-block bg-forest text-white px-3 py-1 text-sm rounded-full">
                        {producer.specialty}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={producer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="hidden lg:inline-block bg-forest text-white px-3 py-1 text-sm rounded-full mb-6">
                      {producer.specialty}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2">{producer.name}</h3>
                    <p className="text-coffee mb-6">{producer.location}</p>
                    <p className="text-gray-600 mb-8">{producer.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={prevProducer}
                          className="rounded-full border-coffee text-coffee hover:bg-coffee hover:text-white"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={nextProducer}
                          className="rounded-full border-coffee text-coffee hover:bg-coffee hover:text-white"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-500">
                        {currentProducer + 1} of {producers.length}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <RevealOnScroll>
            <Link to="/producers">
              <Button size="lg" className="bg-coffee hover:bg-coffee-dark">
                Meet All Producers <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProducerSpotlight;
