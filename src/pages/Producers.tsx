
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Producers = () => {
  const producerGroups = [
    {
      title: "Coffee Producers",
      description: "Our network of coffee farmers across Uganda's prime growing regions.",
      producers: [
        {
          name: "Rwenzori Mountain Coffee Cooperative",
          location: "Western Uganda",
          established: "2003",
          members: "420+ smallholder farmers",
          specialty: "Specialty Arabica Coffee",
          description: "This cooperative of small-scale farmers produces exceptional arabica coffee at high altitudes in the Rwenzori Mountains. Their commitment to organic farming practices and community development has earned them recognition for both quality and sustainability."
        },
        {
          name: "Bugisu Organic Farmers Association",
          location: "Eastern Uganda",
          established: "1998",
          members: "350+ family farmers",
          specialty: "Washed Arabica Coffee",
          description: "Located on the slopes of Mt. Elgon, these farmers produce some of Uganda's most prized coffee. Their traditional processing methods combined with modern quality control result in beans with distinctive floral notes and bright acidity."
        },
        {
          name: "Ankole Coffee Producers Cooperative",
          location: "Southwestern Uganda",
          established: "2010",
          members: "280+ producers",
          specialty: "Robusta Coffee",
          description: "This cooperative specializes in high-quality robusta coffee, challenging the perception that robusta is inferior to arabica. Their innovative processing techniques result in clean, smooth cups with exceptional body and chocolate notes."
        }
      ]
    },
    {
      title: "Tea Producers",
      description: "Uganda's skilled tea farmers and processors create exceptional products for global markets.",
      producers: [
        {
          name: "Ankole Tea Estates",
          location: "Southwestern Uganda",
          established: "1965",
          members: "Estate-grown and 180+ outgrowers",
          specialty: "Black Tea",
          description: "This family-owned estate has been growing tea for three generations. Their high-elevation tea gardens produce robust, aromatic teas that are sought after by premium tea brands across Europe for their distinctive character and full-bodied flavor."
        },
        {
          name: "Kabarole Women's Tea Initiative",
          location: "Western Uganda",
          established: "2012",
          members: "140+ women farmers",
          specialty: "Green and White Teas",
          description: "This women-led cooperative focuses on specialty teas, creating exceptional green and white varieties. Their commitment to sustainable practices and women's empowerment has created both economic opportunities and superior tea products."
        }
      ]
    },
    {
      title: "Vanilla Producers",
      description: "Our vanilla partners maintain meticulous growing and curing standards for premium quality.",
      producers: [
        {
          name: "Mukono Vanilla Growers Association",
          location: "Central Uganda",
          established: "2008",
          members: "120+ vanilla farming families",
          specialty: "Premium Vanilla Beans",
          description: "This association specializes in traditional vanilla cultivation, with careful hand-pollination and meticulous post-harvest processing. Their beans are known for their exceptional length, moisture content, and complex flavor profile with notes of chocolate and cream."
        },
        {
          name: "Vanilla Uganda Cooperative",
          location: "Eastern Uganda",
          established: "2014",
          members: "85+ small-scale farmers",
          specialty: "Organic Certified Vanilla",
          description: "Committed to organic farming practices, this cooperative produces vanilla that meets strict international organic standards. Their sustainable farming approach and traditional curing methods result in beans with exceptional aroma and flavor complexity."
        }
      ]
    },
    {
      title: "Corn Flour (Maize) Producers",
      description: "Our corn flour partners combine traditional knowledge with modern milling for superior product quality.",
      producers: [
        {
          name: "Masindi Maize Processors Association",
          location: "Western Uganda",
          established: "2011",
          members: "200+ maize farmers and processors",
          specialty: "Premium Corn Flour",
          description: "This association brings together farmers and millers to produce high-quality corn flour. Their integrated approach ensures quality control from seed selection through cultivation, harvesting, and processing, resulting in flour with exceptional texture and flavor."
        },
        {
          name: "Organic Grains Uganda",
          location: "Northern Uganda",
          established: "2015",
          members: "150+ organic certified farmers",
          specialty: "Organic Corn Flour",
          description: "Specializing in chemical-free cultivation, this cooperative produces organic corn that's milled using both traditional stone-grinding and modern techniques. Their commitment to sustainability extends through their entire production chain."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-cream py-32">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <img 
            src="/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png" 
            alt="Ugandan farmer" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Our Producer Partners
            </h1>
            <p className="text-xl text-gray-700">
              Meet the dedicated farmers and cooperatives behind Uganda's exceptional agricultural products.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction with new coffee farming images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold font-serif mb-6">Building Sustainable Partnerships</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Bugsy Trade, we believe that exceptional agricultural products begin with the producers. We're proud to partner with cooperatives, associations, and individual farmers who share our commitment to quality, sustainability, and ethical practices.
              </p>
              <p className="text-lg text-gray-700">
                These partnerships are the foundation of our business, allowing us to bring Uganda's finest agricultural products to European markets while ensuring that the benefits flow back to the communities where these products originate.
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Coffee Harvesting Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <RevealOnScroll>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/c95807c4-1ec4-4d5d-b6da-994f3b055709.png" 
                  alt="Coffee farmers harvesting coffee cherries in Uganda" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-cream">
                  <h3 className="font-serif font-bold mb-2">Coffee Harvesting</h3>
                  <p className="text-sm text-gray-700">Our coffee farmers carefully select only the ripest cherries for premium quality.</p>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/01d03c7a-f0d3-4906-a849-c0d0055ee0ca.png" 
                  alt="Freshly harvested coffee cherries" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-cream">
                  <h3 className="font-serif font-bold mb-2">Premium Coffee Cherries</h3>
                  <p className="text-sm text-gray-700">The vibrant red coffee cherries contain the beans that will become your favorite coffee.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Producer Groups */}
      {producerGroups.map((group, groupIndex) => (
        <section key={groupIndex} className={`py-24 ${groupIndex % 2 === 0 ? 'bg-cream' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <SectionHeading
                title={group.title}
                subtitle={group.description}
                centered
              />
            </RevealOnScroll>
            
            <div className="mt-16 space-y-16">
              {group.producers.map((producer, producerIndex) => (
                <RevealOnScroll key={producerIndex} delay={producerIndex * 2}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8 lg:p-10">
                      <h3 className="text-2xl font-serif font-bold mb-2">{producer.name}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                        <div className="text-coffee"><strong>Location:</strong> {producer.location}</div>
                        <div className="text-coffee"><strong>Established:</strong> {producer.established}</div>
                        <div className="text-coffee"><strong>Members:</strong> {producer.members}</div>
                        <div className="text-coffee"><strong>Specialty:</strong> {producer.specialty}</div>
                      </div>
                      <p className="text-gray-700">{producer.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Work With Our Producers</h2>
          <p className="text-xl text-coffee-light max-w-2xl mx-auto mb-10">
            Interested in sourcing high-quality Ugandan products for your business? Let's start a conversation.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white hover:bg-white hover:text-coffee transition-all"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Producers;
