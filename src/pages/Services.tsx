
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Users, Shield, Truck, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Market Access",
      description: "We connect Ugandan producers with European importers looking for high-quality products, opening new market opportunities.",
      icon: <Globe className="h-16 w-16 text-coffee" />,
      features: [
        "Market research and opportunity identification",
        "Buyer-seller matching based on quality and volume requirements",
        "Relationship development and management",
        "Contract negotiation support"
      ]
    },
    {
      title: "Trade Facilitation",
      description: "Our team manages the entire export process, from documentation to logistics, making international trade seamless.",
      icon: <TrendingUp className="h-16 w-16 text-coffee" />,
      features: [
        "Export documentation preparation and management",
        "Customs clearance assistance",
        "Insurance and risk management",
        "Financial transaction facilitation"
      ]
    },
    {
      title: "Producer Support",
      description: "We work closely with local producers to improve quality, sustainability practices, and meet international standards.",
      icon: <Users className="h-16 w-16 text-coffee" />,
      features: [
        "Technical training and capacity building",
        "Quality improvement programming",
        "Certification support (Organic, Fair Trade, Rainforest Alliance)",
        "Access to financing opportunities"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Our rigorous quality control processes ensure that every product meets the highest standards before export.",
      icon: <Shield className="h-16 w-16 text-coffee" />,
      features: [
        "Pre-shipment inspection and testing",
        "Product grading and classification",
        "Quality certification",
        "Compliance with international standards"
      ]
    },
    {
      title: "Logistics Management",
      description: "We handle all aspects of transportation, ensuring your products arrive safely and on schedule.",
      icon: <Truck className="h-16 w-16 text-coffee" />,
      features: [
        "Route optimization and planning",
        "Carrier selection and management",
        "Shipment tracking and monitoring",
        "Warehousing and inventory management"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Our expertise in international regulations ensures smooth entry into European markets.",
      icon: <FileCheck className="h-16 w-16 text-coffee" />,
      features: [
        "Compliance with EU import regulations",
        "Food safety requirements management",
        "Documentation and certification verification",
        "Regulatory updates and advisory"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Updated with joined hands image */}
      <div className="relative bg-cream py-32">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <img 
            src="/lovable-uploads/b2b53896-79f4-4ebd-a14a-311bb4eff9a9.png" 
            alt="Joined hands in business partnership" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700">
              Comprehensive support for both producers and importers, ensuring smooth and beneficial trading relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif mb-6">Bridging Gaps in Global Trade</h2>
              <p className="text-lg text-gray-700 mb-6">
                At BugsyTrade, we provide end-to-end solutions that simplify the complex process of international trade. Our services are designed to overcome the challenges that often prevent direct connections between Ugandan producers and European markets.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a producer looking to export your products or an importer seeking reliable sources of premium Ugandan coffee, tea, or cocoa, our comprehensive service offerings ensure a smooth, efficient, and mutually beneficial trading experience.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Our Comprehensive Services"
              subtitle="End-to-end solutions for the agricultural export value chain"
              centered
            />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 2} direction="up">
                <Card className="h-full border-none shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold font-serif mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2 text-left w-full">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-coffee mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Our Approach"
              subtitle="How we deliver exceptional service at every stage"
              centered
            />
            
            <div className="max-w-4xl mx-auto mt-16">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-coffee/10 rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold text-coffee">
                      1
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold font-serif mb-3">Assessment & Planning</h3>
                    <p className="text-gray-700">
                      We begin by understanding your specific needs and objectives, whether you're a producer looking to export or a buyer seeking quality products. Our team conducts a thorough assessment and develops a customized plan tailored to your requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-coffee/10 rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold text-coffee">
                      2
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold font-serif mb-3">Implementation & Execution</h3>
                    <p className="text-gray-700">
                      With a clear plan in place, our experienced team executes each step with precision and attention to detail. We handle documentation, logistics, quality control, and all other aspects of the export process, keeping you informed at every stage.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-coffee/10 rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold text-coffee">
                      3
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold font-serif mb-3">Monitoring & Support</h3>
                    <p className="text-gray-700">
                      Our relationship doesn't end with delivery. We continuously monitor performance, gather feedback, and provide ongoing support to ensure long-term success. Our goal is to build lasting partnerships that deliver value to all parties involved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-coffee-light max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our services can help you achieve your international trade objectives.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white hover:bg-white hover:text-coffee transition-all"
            >
              Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
