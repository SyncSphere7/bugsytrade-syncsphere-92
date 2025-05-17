
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Jørgensen",
      position: "Head of Sourcing",
      company: "Nordic Coffee Roasters",
      quote: "BugsyTrade has transformed our sourcing process. Their deep connections with Ugandan producers have given us access to exceptional coffee beans with unique flavor profiles that our customers love. Their commitment to quality and sustainability aligns perfectly with our values."
    },
    {
      id: 2,
      name: "François Dubois",
      position: "Procurement Director",
      company: "Chocolaterie Parisienne",
      quote: "Finding reliable sources of high-quality cocoa has always been challenging. BugsyTrade not only provides us with premium Ugandan cocoa but ensures consistent quality and transparent trading practices. They have become an invaluable partner for our artisanal chocolate production."
    },
    {
      id: 3,
      name: "Isabella Romano",
      position: "CEO",
      company: "Tè Sublime",
      quote: "We've been importing tea through BugsyTrade for three years now, and their service has been impeccable. The quality of Ugandan tea they provide is exceptional, and their handling of all export logistics makes the process seamless. A truly professional operation."
    }
  ];
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-24 bg-coffee-dark text-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            title="What Our Partners Say"
            subtitle="Hear from the European importers who trust us with their sourcing needs."
            centered
            className="text-white"
            subtitleClassName="text-coffee-light"
          />
        </RevealOnScroll>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentTestimonial].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <svg className="w-12 h-12 text-coffee-light mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl font-serif italic mb-8">"{testimonials[currentTestimonial].quote}"</p>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-coffee-light">
                    {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-coffee text-white hover:bg-coffee-light transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index ? 'bg-coffee-light scale-125' : 'bg-coffee'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-coffee text-white hover:bg-coffee-light transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
