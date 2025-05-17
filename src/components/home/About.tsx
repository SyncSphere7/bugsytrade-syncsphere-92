
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <RevealOnScroll>
              <SectionHeading
                title="Our Commitment to Quality and Sustainability"
                subtitle="At BugsyTrade, we bridge the gap between Uganda's exceptional agricultural products and discerning European importers."
              />
              
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  Founded with a vision to showcase the rich agricultural heritage of Uganda, we specialize in connecting premium coffee, tea, and cocoa producers with importers who value quality, sustainability, and ethical sourcing.
                </p>
                <p>
                  Our deep relationships with local farmers ensure fair prices, sustainable practices, and exceptional products that meet the highest international standards. We handle the entire export process, making international trade seamless.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-coffee text-3xl font-bold font-serif mb-2">10+</div>
                  <div className="text-gray-700">Years of Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-coffee text-3xl font-bold font-serif mb-2">250+</div>
                  <div className="text-gray-700">Producer Partners</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-coffee text-3xl font-bold font-serif mb-2">15+</div>
                  <div className="text-gray-700">European Countries</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-coffee text-3xl font-bold font-serif mb-2">98%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
              </div>
              
              <Link to="/about">
                <Button className="bg-coffee hover:bg-coffee-dark">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </RevealOnScroll>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <RevealOnScroll direction="left">
              <div className="relative">
                <img 
                  src="/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png" 
                  alt="Coffee farmer harvesting coffee cherries" 
                  className="rounded-lg w-full shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg w-48 md:w-64 hidden md:block">
                  <img 
                    src="/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png" 
                    alt="Freshly harvested coffee cherries" 
                    className="rounded-md"
                  />
                </div>
                <div className="absolute -top-10 -left-10 bg-forest/10 h-full w-full rounded-lg -z-10"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
