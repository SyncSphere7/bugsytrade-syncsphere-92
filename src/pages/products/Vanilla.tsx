
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Flower } from "lucide-react";
import { Link } from 'react-router-dom';

const Vanilla = () => {
  const vanillaProducts = [
    {
      name: "Whole Vanilla Beans",
      description: "Our premium whole vanilla beans are carefully harvested and cured to preserve their rich, complex flavor profile and exceptional aroma.",
      image: "/lovable-uploads/81a38454-139c-4114-a250-3b9f134fbb5d.png",
      region: "Central Uganda",
      process: "Traditional sun-curing"
    },
    {
      name: "Vanilla Bean Powder",
      description: "Finely ground Ugandan vanilla beans, offering intense flavor and aroma for baking, desserts, and other culinary applications.",
      image: "/lovable-uploads/1928e6f7-88b9-483d-aeed-c2ec173e698d.png",
      region: "Western Uganda",
      process: "Ground after curing"
    },
    {
      name: "Vanilla Bean Extract",
      description: "Pure vanilla extract made from Ugandan beans, offering a rich and smooth flavor profile perfect for both home and commercial use.",
      image: "/lovable-uploads/b9d552c8-7b22-4637-8401-6a7fc844f7f7.png",
      region: "Multiple regions",
      process: "Cold extraction"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-amber-800 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/484aeee5-8dc0-4f7e-a6eb-765ac4bb27d9.png" 
            alt="Vanilla beans and flowers" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Premium Ugandan Vanilla
            </h1>
            <p className="text-xl text-amber-200">
              From Uganda's rich soils, we bring you vanilla of exceptional quality with intense flavor profiles and aromatic complexity.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Uganda's Exceptional Vanilla"
            subtitle="Uganda produces some of the world's finest vanilla, characterized by its rich flavor profile and exceptional quality."
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Uganda has emerged as a significant producer of high-quality vanilla, with ideal growing conditions that include rich soil, regular rainfall, and consistent temperatures throughout the year.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our vanilla farmers employ traditional, sustainable growing methods. The vanilla orchids are carefully hand-pollinated, and the beans are harvested at peak ripeness, ensuring maximum flavor development.
              </p>
              <p className="text-lg text-gray-700">
                The post-harvest processing of Ugandan vanilla is a meticulous art that has been refined over generations. The beans undergo a careful curing process that includes sun-drying and conditioning, which develops their distinctive flavor profile characterized by creamy, woody notes with hints of chocolate.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/484aeee5-8dc0-4f7e-a6eb-765ac4bb27d9.png" 
                alt="Vanilla beans and flowers" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Vanilla Products"
            subtitle="Explore our selection of premium Ugandan vanilla products"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {vanillaProducts.map((product, index) => (
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
                      <Flower className="h-5 w-5 mr-2 text-amber-800" />
                      <span>Region: {product.region}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-amber-800" />
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
            title="Quality & Standards"
            subtitle="Our commitment to quality ensures that our vanilla meets the highest international standards"
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/81a38454-139c-4114-a250-3b9f134fbb5d.png" 
                alt="Premium vanilla beans" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Our vanilla beans are carefully graded based on moisture content, appearance, length, and aroma. Only the finest beans make it through our selection process, ensuring consistent quality across all shipments.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We work closely with our network of vanilla farmers to ensure sustainable cultivation practices, including responsible land use and biodiversity preservation. This commitment to sustainability not only protects the environment but also ensures the long-term viability of vanilla production.
              </p>
              <p className="text-lg text-gray-700">
                From farm to shipment, we maintain strict quality control procedures. Each batch of vanilla is tested and certified to meet international food safety standards before export, providing peace of mind to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Import Premium Ugandan Vanilla?</h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto mb-10">
            Contact us to discuss your specific requirements, volume needs, and how we can help bring the distinctive character of Ugandan vanilla to your products.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white hover:bg-white hover:text-amber-800 transition-all"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Vanilla;
