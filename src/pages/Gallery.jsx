import { useState } from 'react';
import ImageZoomModal from '../components/ImageZoomModal';

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop",
    title: "Raw Elegance",
    description: "Experience the pure, untouched beauty of our premium wavy bundles that cascade with natural grace.",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop",
    title: "Deep Wave Perfection",
    description: "Voluminous, bouncy deep waves that maintain their rich texture wash after wash.",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
    title: "Bone Straight Luxe",
    description: "Silky, smooth, and effortlessly sleek. The ultimate premium straight look for any occasion.",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1000&auto=format&fit=crop",
    title: "Authentically Sourced",
    description: "Ethically sourced directly from South Indian temples, ensuring cuticles are perfectly aligned and healthy.",
    span: "col-span-1 row-span-2"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560014312-3783856eb2cc?q=80&w=1000&auto=format&fit=crop",
    title: "Flawless Blend",
    description: "Our frontals and closures seamlessly blend with your natural hairline for an undetectable, flawless finish.",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop",
    title: "Color & Styling Ready",
    description: "100% unprocessed raw hair that takes bleach, color, and heat styling beautifully without losing its luster.",
    span: "col-span-1 md:col-span-3 row-span-2"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-24 min-h-screen bg-[#1F1916] text-[#EAEAEA] font-sans pb-20">
      {/* Header */}
      <div className="text-center py-12 md:py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4 uppercase tracking-widest">Our Gallery</h1>
        <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-50 mb-6"></div>
        <p className="max-w-2xl mx-auto text-[#A89F91] text-lg leading-relaxed">
          Step into a world of unparalleled luxury. Explore the artistry, texture, and authentic beauty of Black Velvet Indian Raw Hair.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.span} border border-[#332A24] hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]`}
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Context / Text Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-12 h-1 bg-[#D4AF37] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <h3 className="text-2xl font-serif text-[#D4AF37] mb-2 drop-shadow-md">{item.title}</h3>
                <p className="text-[#EAEAEA] text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <ImageZoomModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Gallery;
