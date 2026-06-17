import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import QuickViewModal from '../components/QuickViewModal';
import { products } from '../data/products';

const heroImages = [
  "/bg1.png",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop"
];

const Home = () => {
  const navigate = useNavigate();
  const [showStylistForm, setShowStylistForm] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const openQuickView = (e, product) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const nextSlide = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#1F1916] font-sans">
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Backgrounds */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt="Background" 
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-4xl font-serif mb-6 max-w-2xl mx-auto leading-tight text-[#D4AF37] animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            Natural look. Seamless blend. Made for women.
          </h1>
          <button 
            onClick={() => navigate('/products')}
            className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300 backdrop-blur-sm bg-white/5 animate-fade-in-up" style={{ animationDelay: '2.5s' }}
          >
            Shop now
          </button>
        </div>

        {/* Carousel controls */}
        <button onClick={prevSlide} className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10">
          <ChevronRight size={32} />
        </button>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentHeroIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-24 bg-[#1F1916]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#D4AF37] mb-4">New Arrivals</h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
                <div className="relative overflow-hidden mb-4 rounded-sm bg-[#15110E] aspect-[4/5] border border-[#332A24] group-hover:border-[#D4AF37] transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <button 
                    onClick={(e) => openQuickView(e, product)}
                    className="absolute bottom-4 right-4 bg-[#1F1916] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 text-[#D4AF37] border border-[#D4AF37] z-10"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-serif mb-1 group-hover:text-[#D4AF37] transition-colors text-[#EAEAEA]">{product.name}</h3>
                  <p className="text-xs text-[#A89F91] mb-1">{product.length}</p>
                  <p className="text-sm text-[#D4AF37] font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigate('/products')}
              className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-colors backdrop-blur-sm bg-white/5"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Stylist Registration Section */}
      <section className="py-24 bg-[#15110E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button 
              onClick={() => setShowStylistForm(!showStylistForm)}
              className="bg-[#D4AF37] text-[#111111] px-10 py-4 font-semibold tracking-wider uppercase hover:bg-[#C8A45D] transition-colors mb-12 shadow-lg"
            >
              Book Your Style Consultation
            </button>
          </div>

          <div className={`transition-all duration-500 overflow-hidden ${showStylistForm ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-[#1F1916] p-8 md:p-12 border border-[#332A24] rounded-sm max-w-2xl mx-auto shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif text-[#D4AF37]">Stylist Registration</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#A89F91] mb-2">First name*</label>
                    <input type="text" className="w-full border border-[#332A24] bg-[#15110E] text-[#EAEAEA] rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] placeholder-[#665D56] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#A89F91] mb-2">Last name*</label>
                    <input type="text" className="w-full border border-[#332A24] bg-[#15110E] text-[#EAEAEA] rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] placeholder-[#665D56] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#A89F91] mb-2">Email address*</label>
                  <input type="email" className="w-full border border-[#332A24] bg-[#15110E] text-[#EAEAEA] rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] placeholder-[#665D56] transition-colors" />
                </div>

                <div>
                  <label className="block text-sm text-[#A89F91] mb-2">Phone number*</label>
                  <div className="flex">
                    <select className="border border-[#332A24] rounded-l px-4 py-3 bg-[#1F1916] text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] border-r-0">
                      <option>United States +1</option>
                    </select>
                    <input type="tel" className="w-full border border-[#332A24] rounded-r bg-[#15110E] text-[#EAEAEA] px-4 py-3 focus:outline-none focus:border-[#D4AF37] placeholder-[#665D56] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#A89F91] mb-2">Salon or business name*</label>
                  <input type="text" className="w-full border border-[#332A24] bg-[#15110E] text-[#EAEAEA] rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] placeholder-[#665D56] transition-colors" />
                </div>

                <div>
                  <label className="block text-sm text-[#A89F91] mb-2">Upload your cosmetology license (JPG, PNG or PDF)*</label>
                  <div className="border border-[#332A24] border-dashed rounded px-4 py-8 text-center cursor-pointer hover:bg-[#15110E]/50 transition-colors bg-[#15110E]">
                    <span className="text-[#A89F91] text-sm">Click to upload or drag and drop</span>
                  </div>
                </div>

                <button type="submit" className="w-full border border-[#D4AF37] text-[#D4AF37] py-4 rounded font-medium hover:bg-[#D4AF37] hover:text-[#111111] transition-colors mt-8 uppercase tracking-wider">
                  Create my stylist account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Quick View Modal */}
      <QuickViewModal 
        isOpen={!!quickViewProduct} 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};

export default Home;
