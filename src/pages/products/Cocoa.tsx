
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Coffee as BeanIcon } from "lucide-react";

const Cocoa = () => {
  const cocoaProducts = [
    {
      name: "Premium Cocoa Beans",
      description: "Our premium whole cocoa beans are carefully selected for size, flavor, and aroma, perfect for specialty chocolate makers seeking distinctive character.",
      image: "/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png",
      fermentation: "5-7 days",
      flavor: "Fruity, nutty notes"
    },
    {
      name: "Cocoa Nibs",
      description: "These crushed, fermented cocoa beans offer intense chocolate flavor and crunchy texture, ideal for culinary applications or as a nutritious ingredient.",
      image: "/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png",
      fermentation: "6-8 days",
      flavor: "Rich, deep chocolate"
    },
    {
      name: "Cocoa Powder",
      description: "Our natural, unsweetened cocoa powder delivers bold chocolate flavor and rich color, perfect for baking, beverages, and confectionery applications.",
      image: "/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png",
      fermentation: "Traditional process",
      flavor: "Intense, earthy profile"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-amber-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png" 
            alt="Cocoa beans" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Fine Ugandan Cocoa
            </h1>
            <p className="text-xl text-amber-200">
              From Uganda's fertile soils, we bring you cocoa of exceptional quality with distinctive flavor profiles.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Uganda's Growing Cocoa Industry"
            subtitle="Uganda is emerging as an exciting origin for high-quality cocoa, producing beans with unique flavor profiles shaped by the country's equatorial climate."
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Though relatively new to the international cocoa market, Uganda is quickly gaining recognition for producing distinctive cocoa beans. The country's equatorial climate, ample rainfall, and fertile soils create ideal growing conditions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ugandan cocoa is primarily grown by smallholder farmers in regions like Bundibugyo, Mukono, and Jinja. These areas provide the perfect balance of shade, moisture, and temperature needed for quality cocoa production.
              </p>
              <p className="text-lg text-gray-700">
                We partner with cooperatives and farmer groups committed to quality improvement and sustainable farming practices. Through these partnerships, we're helping to develop Uganda's reputation as a source of premium cocoa while ensuring fair returns for farmers.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png" 
                alt="Cocoa pods in Uganda" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Cocoa Products"
            subtitle="Explore our selection of premium Ugandan cocoa products"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cocoaProducts.map((product, index) => (
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
                      <BeanIcon className="h-5 w-5 mr-2 text-amber-800" />
                      <span>Fermentation: {product.fermentation}</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-amber-800" />
                      <span>Flavor: {product.flavor}</span>
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
            title="Quality & Processing"
            subtitle="From harvest to export, we maintain strict quality standards throughout the cocoa production process"
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png" 
                alt="Cocoa processing" 
                className="rounded-lg shadow-xl max-h-96 object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Quality begins in the field with proper harvesting techniques. Only perfectly ripe pods are harvested, ensuring optimal sugar content and flavor development in the beans.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The post-harvest process is crucial for flavor development. Our cocoa undergoes controlled fermentation for 5-7 days, followed by careful sun-drying to achieve the ideal moisture content of 7-8%.
              </p>
              <p className="text-lg text-gray-700">
                Before export, all our cocoa undergoes rigorous quality testing and grading. We ensure compliance with international standards for moisture content, bean size, fermentation quality, and absence of defects or foreign matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Import Premium Ugandan Cocoa?</h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto mb-10">
            Contact us to discuss your specific requirements, volume needs, and how we can help bring the distinctive character of Ugandan cocoa to your products.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Cocoa;
