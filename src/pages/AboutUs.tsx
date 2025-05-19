
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Handshake, Globe, Briefcase } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Award className="h-12 w-12 text-coffee" />,
      title: "Excellence",
      description: "We maintain unwavering standards across our operations, ensuring only the finest Ugandan products reach global markets."
    },
    {
      icon: <Handshake className="h-12 w-12 text-coffee" />,
      title: "Partnership",
      description: "We forge lasting relationships with farmers and buyers based on mutual respect and shared success."
    },
    {
      icon: <Users className="h-12 w-12 text-coffee" />,
      title: "Community",
      description: "We invest in the wellbeing and development of the communities where we source our agricultural products."
    },
    {
      icon: <Globe className="h-12 w-12 text-coffee" />,
      title: "Sustainability",
      description: "We champion environmentally responsible practices throughout our supply chain."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-coffee" />,
      title: "Integrity",
      description: "We conduct business with transparency, honesty, and accountability in every interaction."
    }
  ];

  return (
    <Layout>
      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RevealOnScroll>
                <SectionHeading
                  title="Our Mission"
                  subtitle="Building bridges between Uganda's agricultural heritage and global markets"
                />
                
                <div className="space-y-6 text-gray-700 text-lg">
                  <p>
                    At Bugsy International Trade, we're dedicated to showcasing the exceptional quality of Uganda's agricultural products to the world. We believe in creating sustainable value chains that benefit everyone from producer to consumer.
                  </p>
                  <p>
                    Our mission goes beyond trade – we're committed to advancing the livelihoods of farming communities while delivering premium products that meet the highest international standards.
                  </p>
                  <p>
                    Through responsible business practices, we aim to establish Uganda as a globally recognized source of premium coffee, tea, and cocoa, while ensuring environmental sustainability and social responsibility.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="relative">
              <RevealOnScroll direction="left">
                <div className="relative flex justify-center items-center">
                  <div className="bg-[#FDE1D3] p-8 rounded-lg shadow-xl">
                    <img 
                      src="/lovable-uploads/61a1a7d4-2e59-4228-a321-aa41fc67959e.png" 
                      alt="Bugsy International Trade Logo" 
                      className="w-full max-w-md"
                    />
                  </div>
                  <div className="absolute -top-10 -right-10 bg-coffee/10 h-full w-full rounded-lg -z-10"></div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we do at Bugsy International Trade"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center p-6">
                      <div className="mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold font-serif mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">3+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">12+</div>
                <div className="text-gray-700">Producer Partners</div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">6+</div>
                <div className="text-gray-700">Partner Countries</div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">100%</div>
                <div className="text-gray-700">Client Satisfaction</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-coffee-light max-w-2xl mx-auto mb-10">
            Join us in bringing Uganda's exceptional agricultural products to markets around the world.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white hover:bg-white hover:text-coffee transition-all"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
