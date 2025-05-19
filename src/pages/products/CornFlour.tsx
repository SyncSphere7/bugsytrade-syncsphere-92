
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Wheat } from "lucide-react";
import { Link } from 'react-router-dom';

const CornFlour = () => {
  const cornProducts = [
    {
      name: "Standard Corn Flour",
      description: "Our standard corn flour is finely milled from high-quality Ugandan maize, perfect for everyday cooking and baking applications.",
      image: "/lovable-uploads/7d7eedb7-e9a8-4abc-ba9f-7906ab64bd91.png",
      grade: "Standard Grade",
      process: "Stone Ground"
    },
    {
      name: "Premium Corn Flour",
      description: "Our premium corn flour offers exceptional texture and flavor, ideal for commercial baking and food production applications.",
      image: "/lovable-uploads/e2f5c9b2-91c3-41bb-8cab-0773e3c8bdb6.png",
      grade: "Premium Grade",
      process: "Roller Milled"
    },
    {
      name: "Organic Corn Flour",
      description: "Certified organic corn flour sourced from farms that use no chemical pesticides or fertilizers, offering clean flavor and sustainable growing practices.",
      image: "/lovable-uploads/7d7eedb7-e9a8-4abc-ba9f-7906ab64bd91.png",
      grade: "Organic Certified",
      process: "Traditional Milling"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-yellow-700 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/7d7eedb7-e9a8-4abc-ba9f-7906ab64bd91.png" 
            alt="Corn flour" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Quality Ugandan Corn Flour
            </h1>
            <p className="text-xl text-yellow-200">
              From Uganda's fertile farmlands, we deliver premium corn flour (maize) with exceptional quality and versatility.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Uganda's Corn Production Excellence"
            subtitle="Uganda produces some of Africa's finest corn (maize), benefiting from fertile soils, favorable climate, and traditional farming expertise."
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Uganda's natural advantages make it an excellent region for corn production. The country's equatorial climate, with its balance of sunshine and rainfall, creates ideal growing conditions for maize crops throughout the year.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our corn flour is produced from carefully selected maize varieties that offer exceptional starch content, flavor, and nutritional value. We work with farming communities across Uganda's prime agricultural regions to source only the highest quality corn.
              </p>
              <p className="text-lg text-gray-700">
                The milling process combines traditional methods with modern techniques to preserve the natural qualities of the corn while ensuring consistent texture and performance. The result is a versatile flour that meets the needs of both culinary professionals and food manufacturers.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/e2f5c9b2-91c3-41bb-8cab-0773e3c8bdb6.png" 
                alt="Corn flour in Uganda" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Corn Flour Products"
            subtitle="Explore our selection of premium Ugandan corn flour products"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {cornProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden h-full border-none shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                    <div className="flex items-center">
                      <Wheat className="h-5 w-5 mr-2 text-yellow-700" />
                      <span>Grade: {product.grade}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-yellow-700" />
                      <span>Process: {product.process}</span>
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
            title="Quality Control & Processing"
            subtitle="Our commitment to quality ensures corn flour that meets the highest international standards"
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/7d7eedb7-e9a8-4abc-ba9f-7906ab64bd91.png" 
                alt="Corn flour processing" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Quality begins in the field, where we work with farmers who implement good agricultural practices. The corn is carefully harvested at optimal maturity to ensure maximum flavor development and nutritional value.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Before milling, all corn undergoes thorough cleaning and inspection to remove foreign materials and ensure only the highest quality kernels are processed. Our milling facilities maintain strict hygiene protocols and quality controls.
              </p>
              <p className="text-lg text-gray-700">
                Each batch of corn flour is tested for moisture content, particle size, and other key quality parameters. We also perform regular microbiological testing to ensure food safety compliance, giving our customers confidence in every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Import Premium Ugandan Corn Flour?</h2>
          <p className="text-xl text-yellow-200 max-w-2xl mx-auto mb-10">
            Contact us to discuss your specific requirements, volume needs, and how we can help bring high-quality Ugandan corn flour to your market.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white hover:bg-white hover:text-yellow-700 transition-all"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CornFlour;
