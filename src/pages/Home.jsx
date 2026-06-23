import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import QuickViewModal from '../components/QuickViewModal';
import { products } from '../data/products';

const heroImages = [
  "/bg1.png",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop",
  "/bg3.png"
];

const Home = () => {
  const navigate = useNavigate();

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
        
        {currentHeroIndex !== 2 && (
          <div className="relative z-10 text-center px-4">
            <h1 className="text-2xl md:text-4xl font-serif mb-6 max-w-2xl mx-auto leading-tight text-[#D4AF37] animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              Natural look. Seamless blend. Made for women.
            </h1>
            <button 
              onClick={() => navigate('/products')}
              className="px-8 py-3 font-semibold uppercase tracking-wider border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 backdrop-blur-sm bg-white/5 animate-fade-in-up" style={{ animationDelay: '2.5s' }}
            >
              Shop now
            </button>
          </div>
        )}

        {/* Carousel controls */}
        {/* <button onClick={prevSlide} className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10">
          <ChevronRight size={32} />
        </button> */}

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
              className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#15110E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#D4AF37] mb-4">Why Choose Us</h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto opacity-50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-[#332A24] rounded-xl hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 group bg-[#1F1916]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#15110E] flex items-center justify-center border border-[#332A24] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                <span className="text-[#D4AF37] text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Premium Quality</h3>
              <p className="text-[#A89F91] text-sm leading-relaxed">100% authentic raw Indian hair sourced directly from temples. Unprocessed, cuticles intact, and long-lasting.</p>
            </div>
            
            <div className="p-8 border border-[#332A24] rounded-xl hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 group bg-[#1F1916]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#15110E] flex items-center justify-center border border-[#332A24] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                <span className="text-[#D4AF37] text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Versatile Styling</h3>
              <p className="text-[#A89F91] text-sm leading-relaxed">Can be bleached, colored, curled, or straightened to match your desired look effortlessly while maintaining health.</p>
            </div>
            
            <div className="p-8 border border-[#332A24] rounded-xl hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 group bg-[#1F1916]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#15110E] flex items-center justify-center border border-[#332A24] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                <span className="text-[#D4AF37] text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Global Shipping</h3>
              <p className="text-[#A89F91] text-sm leading-relaxed">We deliver our premium hair extensions worldwide with secure, trackable, and fast shipping options.</p>
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
