
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, link, delay }) => {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <Card className="overflow-hidden border-none shadow-lg h-full transition-transform hover:scale-[1.02]">
        <div className="relative h-64">
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
          <CardHeader className="relative z-10 mt-auto h-full flex flex-col justify-end">
            <CardTitle className="text-white text-2xl font-serif">{title}</CardTitle>
          </CardHeader>
        </div>
        <CardContent className="pt-6">
          <CardDescription className="text-gray-700 mb-4">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link to={link} className="w-full">
            <Button variant="outline" className="w-full border-coffee text-coffee hover:bg-coffee hover:text-white">
              Discover {title} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </RevealOnScroll>
  );
};

const Products = () => {
  const products = [
    {
      title: "Coffee",
      description: "From Robusta to specialty Arabica, our coffee selection showcases the rich diversity and exceptional quality of Ugandan beans.",
      image: "/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png",
      link: "/products/coffee",
      delay: 0
    },
    {
      title: "Tea",
      description: "Uganda's ideal climate produces bold, aromatic teas that are increasingly sought after by discerning international buyers.",
      image: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
      link: "/products/tea",
      delay: 2
    },
    {
      title: "Vanilla",
      description: "Premium Ugandan vanilla, known for its exceptional flavor profile and aromatic qualities, perfect for culinary applications.",
      image: "/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png",
      link: "/products/vanilla",
      delay: 4
    },
    {
      title: "Corn Flour",
      description: "High-quality maize flour from Uganda's fertile lands, offering superior texture and taste for a variety of food applications.",
      image: "/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png",
      link: "/products/corn-flour",
      delay: 6
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <SectionHeading
            title="Our Premium Products"
            subtitle="We specialize in high-quality Ugandan agricultural products that meet the highest international standards."
            centered
          />
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              link={product.link}
              delay={product.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <RevealOnScroll delay={8}>
            <Link to="/products">
              <Button size="lg" className="bg-coffee hover:bg-coffee-dark">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Products;
