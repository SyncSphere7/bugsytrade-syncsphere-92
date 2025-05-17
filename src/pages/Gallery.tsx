
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
      alt: "Coffee farmer harvesting",
      category: "Coffee Production"
    },
    {
      src: "/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png",
      alt: "Coffee beans",
      category: "Products"
    },
    {
      src: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
      alt: "Tea plantation",
      category: "Tea Production"
    },
    {
      src: "/lovable-uploads/b2b53896-79f4-4ebd-a14a-311bb4eff9a9.png",
      alt: "Coffee processing",
      category: "Coffee Processing"
    },
    {
      src: "/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png",
      alt: "Quality testing",
      category: "Quality Control"
    },
    {
      src: "/lovable-uploads/77bed13d-6c7e-4c8f-aee5-b4ee0239ed76.png",
      alt: "Vanilla beans",
      category: "Products"
    },
    {
      src: "/lovable-uploads/832530d3-5298-42e6-ba50-d9e7b79a44e4.png",
      alt: "Coffee farmer",
      category: "Producers"
    },
    {
      src: "/lovable-uploads/cf6fd754-2a15-4f7d-b7b5-cdf97a580988.png",
      alt: "Export loading",
      category: "Logistics"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-cream py-32">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <img 
            src="/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png" 
            alt="Uganda agriculture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-700">
              Visual showcases of Uganda's agricultural excellence, production facilities, and the dedicated farmers we work with.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Exploring Uganda's Agricultural Heritage"
              subtitle="Images from the farms and production facilities that make Ugandan exports exceptional"
              centered
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {galleryImages.map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="overflow-hidden rounded-lg shadow-lg group relative h-64">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-medium px-2 py-1 bg-coffee/80 rounded-md self-start">
                      {image.category}
                    </span>
                    <h3 className="text-white mt-2">{image.alt}</h3>
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
              <h2 className="text-3xl font-bold font-serif mb-6">Our Visual Story</h2>
              <p className="text-lg text-gray-700">
                These images represent the dedication, care, and expertise that go into producing Uganda's premium agricultural exports. From the farmers tending their crops to the meticulous processing that ensures quality, each image tells part of our story. 
              </p>
              <p className="text-lg text-gray-700 mt-4">
                As Bugsy Trade, we're proud to connect these exceptional producers with global markets, showcasing the best that Uganda has to offer.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
