
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Film, Play } from 'lucide-react';

const Movies = () => {
  const videos = [
    {
      title: "Coffee Harvesting Process",
      description: "Watch how our partner farmers carefully harvest coffee cherries at the peak of ripeness.",
      thumbnail: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
      duration: "3:45",
      link: "https://www.youtube.com/watch?v=example1"
    },
    {
      title: "Tea Production Excellence",
      description: "A behind-the-scenes look at Uganda's premium tea production facilities.",
      thumbnail: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
      duration: "5:12",
      link: "https://www.youtube.com/watch?v=example2"
    },
    {
      title: "Vanilla Cultivation",
      description: "The meticulous process of growing, pollinating, and harvesting premium vanilla.",
      thumbnail: "/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png",
      duration: "4:30",
      link: "https://www.youtube.com/watch?v=example3"
    },
    {
      title: "From Farm to Export",
      description: "Follow the journey of Uganda's agricultural products from farm to international shipping.",
      thumbnail: "/lovable-uploads/cf6fd754-2a15-4f7d-b7b5-cdf97a580988.png",
      duration: "6:18",
      link: "https://www.youtube.com/watch?v=example4"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <img 
            src="/lovable-uploads/b2b53896-79f4-4ebd-a14a-311bb4eff9a9.png" 
            alt="Coffee production" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Film className="h-8 w-8 mr-3 text-coffee-light" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                Videos
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Visual stories showcasing Uganda's agricultural excellence, production processes, and the journey from farm to export.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Our Video Collection"
              subtitle="Explore the stories, processes, and people behind Uganda's premium agricultural exports"
              centered
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {videos.map((video, index) => (
              <RevealOnScroll key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="relative h-64 group">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={video.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-coffee text-white rounded-full p-4 transform transition-transform duration-300 hover:scale-110"
                      >
                        <Play className="h-8 w-8" />
                      </a>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm font-medium px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.description}</p>
                    <a 
                      href={video.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-coffee font-medium mt-4 hover:underline"
                    >
                      Watch Video <Play className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6">Our Video Story</h2>
              <p className="text-lg text-gray-700">
                These videos showcase the dedication, expertise, and passion that go into every step of producing Uganda's premium agricultural exports. From planting and harvesting to processing and shipping, each video offers insight into our commitment to quality and sustainability.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                At Bugsy Trade, we believe in transparency at every stage. These visual stories help our partners and customers understand the journey of the products they import, reinforcing trust and appreciation for Uganda's agricultural excellence.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Movies;
