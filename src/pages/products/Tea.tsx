
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Coffee as LeafIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const Tea = () => {
  const teaVarieties = [
    {
      name: "Black Tea",
      description: "Our premium Ugandan black tea is known for its rich, bold flavor and bright coppery infusion. Full-bodied with a smooth, malty character.",
      image: "/lovable-uploads/c000e7b1-a06b-45db-8221-0e4097cfe66b.png",
      region: "Western Uganda",
      process: "Orthodox and CTC"
    },
    {
      name: "Green Tea",
      description: "Delicate and refreshing, our Ugandan green tea offers a light, grassy flavor with subtle sweet notes and a clean finish.",
      image: "/lovable-uploads/1d98c576-13d7-4de0-b9ba-2ff7ba0e3bef.png",
      region: "Mount Rwenzori",
      process: "Pan-fired"
    },
    {
      name: "White Tea",
      description: "Our rare white tea showcases the finest, most tender leaves and buds, creating a delicate infusion with subtle floral and honey notes.",
      image: "/lovable-uploads/320f3fcc-fdbc-4878-bd3f-f25e483dce1b.png", // Keeping this image as it has a woman
      region: "Kyenjojo District",
      process: "Hand-processed"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-forest-dark text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/7b18691e-7868-4d2c-9d1b-2d3113d91828.png" 
            alt="Lush tea plantation landscape" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Exceptional Ugandan Tea
            </h1>
            <p className="text-xl text-forest-light">
              From Uganda's lush mountainous regions, we bring you teas of remarkable character and quality.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Uganda's Tea Heritage"
            subtitle="Uganda produces distinctive teas with unique characteristics shaped by the country's equatorial location and high-altitude growing conditions."
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Uganda's tea industry, established in the 1920s, has flourished thanks to the country's ideal growing conditions. The high altitude, rich volcanic soils, and consistent rainfall create perfect conditions for producing teas with exceptional flavor profiles.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We source our teas from established estates and smallholder farmers across Uganda's key tea-growing regions, including the Western Highlands and areas surrounding Mount Rwenzori, often called the "Mountains of the Moon."
              </p>
              <p className="text-lg text-gray-700">
                Ugandan tea is increasingly recognized for its quality and distinctive characteristics, offering a bright, brisk cup with robust flavors that make it perfect for blending or enjoying as a single-origin offering.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/b6e7050c-a1a8-4e35-9e40-de890b5e1a5b.png" 
                alt="Rolling hills of tea plantations" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Tea Varieties"
            subtitle="Explore our selection of premium Ugandan teas"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teaVarieties.map((variety, index) => (
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
                      <LeafIcon className="h-5 w-5 mr-2 text-forest" />
                      <span>Region: {variety.region}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-forest" />
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
            title="Quality & Standards"
            subtitle="We adhere to rigorous quality standards to ensure every batch meets international requirements"
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/320f3fcc-fdbc-4878-bd3f-f25e483dce1b.png" 
                alt="Tea farmer with harvested leaves" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6">
                At Bugsy International Trade, we implement stringent quality control measures throughout the supply chain. Our tea undergoes careful selection, processing, and testing to ensure it meets the highest international standards.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We work closely with producers who maintain sustainable farming practices and adhere to ethical labor standards. By fostering long-term relationships with our tea gardens, we ensure consistent quality and responsible production.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment extends beyond quality to include full traceability. We can provide detailed information about the origin, processing methods, and journey of our teas from plantation to export.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Import Premium Ugandan Tea?</h2>
          <p className="text-xl text-forest-light max-w-2xl mx-auto mb-10">
            Contact us to discuss your specific requirements, volume needs, and how we can help bring the distinctive character of Ugandan tea to your customers.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white hover:bg-white hover:text-forest transition-all"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Tea;
