
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();
  const allCategories = ["All", "Coffee", "Tea", "Cocoa", "Industry News", "Producer Stories"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const blogPosts = [
    {
      id: 1,
      title: "The Growing Demand for Specialty Ugandan Coffee in Europe",
      excerpt: "European consumers are increasingly seeking out specialty Ugandan coffee for its unique flavors and ethical sourcing practices.",
      image: "/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png",
      category: "Coffee",
      author: "Iwo Bulski",
      date: "May 12, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainability Practices in Ugandan Tea Production",
      excerpt: "How Ugandan tea producers are implementing innovative sustainability practices that benefit both the environment and product quality.",
      image: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
      category: "Tea",
      author: "Maria Adeke",
      date: "May 5, 2025",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "From Bean to Bar: Uganda's Emerging Cocoa Industry",
      excerpt: "Uganda's cocoa industry is gaining recognition for its fine flavor beans, catching the attention of premium chocolate makers worldwide.",
      image: "/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png",
      category: "Cocoa",
      author: "David Ochen",
      date: "April 28, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "EU Import Regulations: What Ugandan Exporters Need to Know",
      excerpt: "Navigating the complex landscape of European Union import regulations for agricultural products from East Africa.",
      image: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
      category: "Industry News",
      author: "Robert Kyambadde",
      date: "April 21, 2025",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Meet the Women Transforming Uganda's Coffee Sector",
      excerpt: "Female coffee farmers and cooperative leaders are driving innovation and quality improvements across Uganda's coffee industry.",
      image: "/lovable-uploads/b2b53896-79f4-4ebd-a14a-311bb4eff9a9.png",
      category: "Producer Stories",
      author: "Maria Adeke",
      date: "April 14, 2025",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Climate Change Adaptation in Uganda's Coffee Regions",
      excerpt: "How Ugandan coffee farmers are implementing innovative practices to adapt to changing climate conditions and protect crop quality.",
      image: "/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png",
      category: "Coffee",
      author: "David Ochen",
      date: "April 7, 2025",
      readTime: "6 min read"
    }
  ];
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-cream py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              BugsyTrade Blog
            </h1>
            <p className="text-xl text-gray-700">
              Insights, stories, and updates from Uganda's agricultural export sector.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {allCategories.map((category, index) => (
              <Button 
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${activeCategory === category ? 'bg-coffee hover:bg-coffee-dark' : 'text-coffee border-coffee hover:bg-coffee/10'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {activeCategory !== "All" && (
            <RevealOnScroll>
              <SectionHeading
                title={`${activeCategory} Articles`}
                subtitle={`Insights and updates related to ${activeCategory.toLowerCase()}`}
                centered
              />
            </RevealOnScroll>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPosts.map((post, index) => (
              <RevealOnScroll key={post.id} delay={index * 2} direction="up">
                <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col cursor-pointer" onClick={() => navigate(`/blog/${post.id}`)}>
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 right-4 bg-coffee text-white text-sm font-medium py-1 px-3 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-xl font-serif font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button variant="link" className="p-0 h-auto text-coffee hover:text-coffee-dark">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600">
                There are currently no articles in the {activeCategory} category.
              </p>
              <Button 
                onClick={() => setActiveCategory("All")} 
                variant="outline" 
                className="mt-4 border-coffee text-coffee hover:bg-coffee hover:text-white"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-700 mb-8">
                Stay updated with the latest news, insights, and stories from Uganda's agricultural export sector.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
                  required
                />
                <Button className="bg-coffee hover:bg-coffee-dark whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
