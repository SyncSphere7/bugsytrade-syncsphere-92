import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { GalleryHorizontal, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    category: string;
  } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const galleryImages = [
    {
      src: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
      alt: "Coffee farmer harvesting",
      category: "Coffee Harvesting"
    },
    {
      src: "/lovable-uploads/484aeee5-8dc0-4f7e-a6eb-765ac4bb27d9.png",
      alt: "Vanilla",
      category: "Products"
    },
    {
      src: "/lovable-uploads/f561f716-3f6e-44ad-a447-6acabbb7c3c0.png",
      alt: "Tea farm",
      category: "Tea Plantation"
    },
    {
      src: "/lovable-uploads/232fe62f-c76b-4b04-b61c-c2183ee807ee.png",
      alt: "Coffee drying process",
      category: "Coffee Processing"
    },
    {
      src: "/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png",
      alt: "Quality testing",
      category: "Quality Control"
    },
    {
      src: "/lovable-uploads/7860ed45-bff1-499f-9156-29a03357ace0.png",
      alt: "Corn flour (Maize)",
      category: "Products"
    },
    {
      src: "/lovable-uploads/59c2d627-cefe-49b3-ab03-6f10e62e8259.png",
      alt: "Coffee farmers",
      category: "Producers"
    },
    {
      src: "/lovable-uploads/8eb18bbd-b442-4b10-8f02-a9d4bffb113c.png",
      alt: "Coffee sacks ready for export",
      category: "Logistics"
    },
    {
      src: "/lovable-uploads/04e37e5f-c894-44ca-befb-09da3c97a88e.png",
      alt: "Quality Control",
      category: "Coffee Producer Laboratory"
    },
    {
      src: "/lovable-uploads/42b7c0b4-18df-4c24-80ee-5fdad0cec81d.png",
      alt: "Husks (Cascara)",
      category: "Shells for connoisseurs"
    },
    {
      src: "/lovable-uploads/a2ce816c-80af-420e-847f-c3ad5b214416.png",
      alt: "Full container ready for our client",
      category: "Transportation"
    },
    {
      src: "/lovable-uploads/ea99c3b2-eefc-41f0-b360-3063c63d0793.png",
      alt: "Transporting coffee to Europe",
      category: "Export"
    },
    {
      src: "/lovable-uploads/9659d9b3-582e-4bbe-b747-bd8beee082fd.png",
      alt: "Team members in office",
      category: "Partners"
    },
    {
      src: "/lovable-uploads/ec5ee5f4-dcf0-4942-a370-b9ea8b4dcb21.png",
      alt: "Coffee processing facility",
      category: "Production"
    },
    {
      src: "/lovable-uploads/dbf75d77-3218-4f6c-a6cf-a6046850bc09.png",
      alt: "Coffee plantation",
      category: "Farming"
    },
    {
      src: "/lovable-uploads/f5837b6e-3813-4c38-874e-3885dfdff5b8.png",
      alt: "Farmers with representative",
      category: "Partnerships"
    },
    {
      src: "/lovable-uploads/8178c7d4-5c44-4d92-957f-26cb0afa52c1.png",
      alt: "Coffee trees inspection",
      category: "Quality Control"
    },
    {
      src: "/lovable-uploads/ca1cc375-7bd6-4428-8801-ecbbcfec36ce.png",
      alt: "Coffee bean sorting",
      category: "Processing"
    },
    {
      src: "/lovable-uploads/c50d7949-94cf-4ffa-8f90-32ea59c474a4.png",
      alt: "Coffee processing equipment",
      category: "Equipment"
    },
    {
      src: "/lovable-uploads/40451d55-5686-454c-afb7-ca9c5cd1f30a.png",
      alt: "Industrial processing facility",
      category: "Production"
    },
    {
      src: "/lovable-uploads/cb5cf09a-088e-4952-abf3-1c9fcabcd01a.png",
      alt: "Coffee bean storage",
      category: "Storage"
    },
    {
      src: "/lovable-uploads/fd6419aa-3f95-4d7e-adcb-bd5865b77d80.png",
      alt: "Warehouse with representatives",
      category: "Distribution"
    },
    {
      src: "/lovable-uploads/ade9315d-1dba-405d-969b-da28acfdca0a.png",
      alt: "Business meeting",
      category: "Partnerships"
    },
    {
      src: "/lovable-uploads/af79d09b-5773-425d-8a49-cd007aafae7f.png",
      alt: "Partnership handshake",
      category: "Partnerships"
    }
  ];

  const handleImageClick = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
  };

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    }
  };

  const handleNextImage = () => {
    if (selectedIndex < galleryImages.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    }
  };

  return (
    <Layout>
      <div className="relative bg-cream py-32">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <img 
            src="/lovable-uploads/f561f716-3f6e-44ad-a447-6acabbb7c3c0.png" 
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
              <a href="mailto:office@bugsytrade.com" className="text-coffee hover:underline ml-1">
                Contact us
              </a> for more information.
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

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
              <div className="flex items-center gap-2 py-2 px-4 rounded-md bg-coffee text-white">
                <GalleryHorizontal className="h-5 w-5" />
                <span className="font-medium">All Images</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {galleryImages.map((image, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div 
                  className="overflow-hidden rounded-lg shadow-lg group relative h-64 cursor-pointer"
                  onClick={() => handleImageClick(image, index)}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 pointer-events-none">
                    <div className="flex flex-col gap-2">
                      <span className="text-white text-sm font-medium px-2 py-1 bg-coffee/80 rounded-md self-start">
                        {image.category}
                      </span>
                      <h3 className="text-white text-shadow">{image.alt}</h3>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/80 p-1 rounded-full">
                      <Maximize className="h-4 w-4 text-gray-800" />
                    </div>
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

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-3xl">
          <div className="relative overflow-hidden rounded-lg">
            {selectedImage && (
              <>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full object-contain max-h-[70vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    {selectedImage.category}
                  </p>
                </div>
                
                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/70 hover:bg-white border-none"
                    onClick={handlePrevImage}
                    disabled={selectedIndex <= 0}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/70 hover:bg-white border-none"
                    onClick={handleNextImage}
                    disabled={selectedIndex >= galleryImages.length - 1}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </div>
                
                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 rounded text-white text-sm">
                  {selectedIndex + 1} / {galleryImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
