
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Handshake, Globe, Briefcase } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    {
      year: "2010",
      title: "Founded in Kampala",
      description: "BugsyTrade was established with a vision to showcase Uganda's agricultural excellence globally."
    },
    {
      year: "2013",
      title: "First European Partnership",
      description: "Secured our first major distribution agreement with a European specialty coffee importer."
    },
    {
      year: "2016",
      title: "Quality Certification",
      description: "Achieved international quality certifications for our export operations and supply chain."
    },
    {
      year: "2019",
      title: "Producer Network Expansion",
      description: "Expanded our network to include 200+ small-scale farmers across Uganda's prime growing regions."
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "Launched comprehensive sustainability program focusing on environmental and social responsibility."
    },
  ];

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

  const team = [
    {
      name: "Iwo Bulski",
      role: "Founder & CEO",
      image: "/lovable-uploads/cf6fd754-2a15-4f7d-b7b5-cdf97a580988.png",
      bio: "With over 15 years in agricultural exports, Iwo founded BugsyTrade to showcase Uganda's premium products globally."
    },
    {
      name: "David Ochen",
      role: "Head of Producer Relations",
      image: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
      bio: "David works directly with our network of farmers, ensuring sustainable practices and premium quality."
    },
    {
      name: "Maria Adeke",
      role: "Quality Assurance Director",
      image: "/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png",
      bio: "Maria oversees our rigorous quality control processes to meet international standards."
    },
    {
      name: "Robert Kyambadde",
      role: "Export Logistics Manager",
      image: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
      bio: "Robert ensures seamless delivery of our products from Uganda to European destinations."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-cream py-32">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <img 
            src="/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png" 
            alt="Coffee plantation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700">
              Connecting Uganda's agricultural excellence with European markets since 2010.
            </p>
          </div>
        </div>
      </div>

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
                    At BugsyTrade, we're dedicated to showcasing the exceptional quality of Uganda's agricultural products to the world. We believe in creating sustainable value chains that benefit everyone from producer to consumer.
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
                <div className="relative">
                  <img 
                    src="/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png" 
                    alt="Ugandan coffee farmers" 
                    className="rounded-lg w-full shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg w-48 md:w-64 hidden md:block">
                    <img 
                      src="/lovable-uploads/832530d3-5298-42e6-ba50-d9e7b79a44e4.png" 
                      alt="Coffee processing" 
                      className="rounded-md"
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
              subtitle="The principles that guide everything we do at BugsyTrade"
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

      {/* Our Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Our Journey"
              subtitle="Key milestones in BugsyTrade's growth and development"
              centered
            />
            
            <div className="relative mt-20">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-coffee/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-24">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-coffee border-4 border-cream"></div>
                    
                    {/* Content */}
                    <div className="flex-1"></div>
                    <div className="flex-1 relative">
                      <div className="md:hidden absolute left-0 top-0 -translate-x-3 w-6 h-6 rounded-full bg-coffee border-4 border-white"></div>
                      <div className="pl-8 md:pl-0">
                        <div className="text-3xl font-bold text-coffee mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Our Leadership Team"
              subtitle="Meet the dedicated professionals behind BugsyTrade"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif mb-1">{member.name}</h3>
                    <p className="text-coffee mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
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
                <div className="text-coffee text-4xl font-bold font-serif mb-2">10+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">250+</div>
                <div className="text-gray-700">Producer Partners</div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">15+</div>
                <div className="text-gray-700">European Countries</div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-sm text-center">
                <div className="text-coffee text-4xl font-bold font-serif mb-2">98%</div>
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
