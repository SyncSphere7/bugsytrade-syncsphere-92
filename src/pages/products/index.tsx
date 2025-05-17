
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      title: "Coffee",
      description: "From Robusta to specialty Arabica, our coffee selection showcases the rich diversity and exceptional quality of Ugandan beans.",
      image: "/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png",
      link: "/products/coffee",
    },
    {
      title: "Tea",
      description: "Uganda's ideal climate produces bold, aromatic teas that are increasingly sought after by discerning international buyers.",
      image: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
      link: "/products/tea",
    },
    {
      title: "Cocoa",
      description: "Our premium cocoa is grown in Uganda's fertile soils, producing rich, complex flavors perfect for fine chocolate making.",
      image: "/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png",
      link: "/products/cocoa",
    }
  ];

  return (
    <Layout>
      <div className="relative bg-coffee-dark text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png" 
            alt="Uganda agriculture" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl text-coffee-light">
              Connecting European importers with Uganda's finest coffee, tea, and cocoa through sustainable and ethical trading practices.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Exceptional Quality, Direct from Uganda"
            subtitle="We specialize in high-quality Ugandan coffee, tea, and cocoa that meets the highest international standards."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg h-full transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                  <CardHeader className="relative z-10 mt-auto h-full flex flex-col justify-end">
                    <CardTitle className="text-white text-2xl font-serif">{product.title}</CardTitle>
                  </CardHeader>
                </div>
                <CardContent className="pt-6">
                  <CardDescription className="text-gray-700 mb-4">{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={product.link} className="w-full">
                    <Button variant="outline" className="w-full border-coffee text-coffee hover:bg-coffee hover:text-white">
                      Explore {product.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Commitment to Quality"
            subtitle="Every product we export undergoes rigorous quality control to ensure it meets international standards"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coffee text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Stringent Selection</h3>
              <p className="text-gray-600">
                We carefully select only the highest quality products from reliable producers who meet our strict quality standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coffee text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Thorough Testing</h3>
              <p className="text-gray-600">
                Our products undergo rigorous testing for quality, consistency, and compliance with international food safety standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coffee text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Sourcing</h3>
              <p className="text-gray-600">
                We provide full traceability for all our products, ensuring you know exactly where your imports come from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Import from Uganda?</h2>
          <p className="text-xl text-coffee-light max-w-2xl mx-auto mb-10">
            Contact us to discuss your specific requirements and how we can help bring premium Ugandan products to your market.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coffee">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
