
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Coffee as CoffeeIcon } from "lucide-react";

const Coffee = () => {
  const coffeeVarieties = [
    {
      name: "Arabica",
      description: "Grown in the highlands of Uganda, our Arabica coffee beans offer a sweet, complex flavor profile with bright acidity and notes of fruit and chocolate.",
      image: "/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png",
      altitude: "1,200-2,200m",
      process: "Washed and Natural"
    },
    {
      name: "Robusta",
      description: "Cultivated in the lower elevations, Ugandan Robusta is known for its strong body, higher caffeine content, and nutty, earthy flavors.",
      image: "/lovable-uploads/832530d3-5298-42e6-ba50-d9e7b79a44e4.png",
      altitude: "800-1,500m", 
      process: "Washed"
    },
    {
      name: "Specialty Grades",
      description: "Our specialty-grade coffee meets strict quality standards, featuring the finest beans with unique flavor profiles from select microclimates.",
      image: "/lovable-uploads/b2b53896-79f4-4ebd-a14a-311bb4eff9a9.png",
      altitude: "1,500-2,200m",
      process: "Honey and Natural"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-coffee-dark text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png" 
            alt="Coffee beans" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Premium Ugandan Coffee
            </h1>
            <p className="text-xl text-coffee-light">
              From the rich soils of Uganda to your cup - we connect you with some of the finest coffee beans Africa has to offer.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Coffee Story"
            subtitle="Uganda produces both Arabica and Robusta coffee, with distinctive flavors shaped by the country's rich soil and ideal growing conditions."
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Uganda, often called "The Pearl of Africa," offers perfect conditions for growing exceptional coffee. The country's equatorial location, high altitude regions, and fertile volcanic soils create an ideal environment for coffee cultivation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We work directly with sustainable coffee farms across Uganda's key growing regions, including Mount Elgon, the Rwenzori Mountains, and the West Nile region. Our close relationships with farmers ensure fair prices and maintain the highest quality standards from harvest to export.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're seeking the bright, fruity notes of highland Arabica or the bold, earthy character of Ugandan Robusta, Bugsy International Trade delivers premium coffee beans that showcase the unique terroir of Uganda.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png" 
                alt="Coffee plantation in Uganda" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Coffee Varieties"
            subtitle="Explore our selection of premium Ugandan coffee beans"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coffeeVarieties.map((variety, index) => (
              <Card key={index} className="overflow-hidden h-full border-none shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={variety.image} 
                    alt={variety.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{variety.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">
                    {variety.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                    <div className="flex items-center">
                      <CoffeeIcon className="h-5 w-5 mr-2 text-coffee" />
                      <span>Altitude: {variety.altitude}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-coffee" />
                      <span>Process: {variety.process}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Sustainability Commitment"
            subtitle="We believe in responsible sourcing and supporting the communities that grow our coffee"
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png" 
                alt="Sustainable coffee farming" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6">
                At Bugsy International Trade, sustainability is at the core of our business. We work with farmers who implement environmentally friendly growing practices, preserve biodiversity, and protect Uganda's precious natural resources.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our partnerships support fair wages and better living conditions for coffee farmers and their families. We invest in community development projects, including education initiatives and infrastructure improvements in coffee-growing regions.
              </p>
              <p className="text-lg text-gray-700">
                By choosing our coffee, you're supporting a more equitable and sustainable coffee industry that values both environmental stewardship and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Import Premium Ugandan Coffee?</h2>
          <p className="text-xl text-coffee-light max-w-2xl mx-auto mb-10">
            Contact us to discuss your specific requirements, volume needs, and how we can help bring the distinctive flavor of Ugandan coffee to your customers.
          </p>
          <Button 
            size="lg" 
            className="bg-white/20 text-white border border-white hover:bg-white hover:text-coffee transition-all"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Coffee;
