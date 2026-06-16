import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import QuickViewModal from '../components/QuickViewModal';

const heroImages = [
  "/bg1.png",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop"
];

const products = [
  { id: 1, name: 'Genios Weft Hair Extensions', price: '$350.00', image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Invisible Tape-In Hair Extensions', price: '$320.00', image: 'https://images.unsplash.com/photo-1596701047716-16314c4da2a6?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Keratin Fusion Hair Extensions', price: '$240.00', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Micro-Link Hair Extensions', price: '$240.00', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' }
];

const Home = () => {
  const navigate = useNavigate();
  const [showStylistForm, setShowStylistForm] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Auto-play hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const openQuickView = (e, product) => {
    e.stopPropagation(); // Prevent navigating to detail page
    setQuickViewProduct(product);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt="Beautiful hair" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-serif mb-6 max-w-2xl mx-auto leading-tight animate-fade-in-up delay-500">
            Natural look. Seamless blend. Made for women.
          </h1>
          <button 
            onClick={() => navigate('/extensions')}
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 animate-fade-in-up delay-1000"
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
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
                <div className="relative overflow-hidden mb-4 rounded-sm bg-gray-100 aspect-[4/5]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <button 
                    onClick={(e) => openQuickView(e, product)}
                    className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:text-primary z-10"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <h3 className="text-lg font-serif mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylist Registration Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setShowStylistForm(!showStylistForm)}
            className="bg-black text-white px-8 py-4 rounded-md font-semibold tracking-wide hover:bg-gray-800 transition-colors mb-12 shadow-lg"
          >
            Book Your Style Consultation
          </button>

          <div className={`transition-all duration-500 overflow-hidden ${showStylistForm ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white p-8 md:p-12 border border-gray-200 rounded-sm max-w-2xl shadow-sm">
              <h2 className="text-2xl font-serif text-[#3b415a] mb-8">Stylist Registration</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First name*</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last name*</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email address*</label>
                  <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone number*</label>
                  <div className="flex">
                    <select className="border border-gray-300 rounded-l px-4 py-2 bg-gray-50 focus:outline-none focus:border-black border-r-0">
                      <option>United States +1</option>
                    </select>
                    <input type="tel" className="w-full border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:border-black" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Salon or business name*</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Upload your cosmetology license (JPG, PNG or PDF)*</label>
                  <div className="border border-gray-300 border-dashed rounded px-4 py-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-gray-500 text-sm">Click to upload or drag and drop</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#333] text-white py-4 rounded font-medium hover:bg-black transition-colors mt-8">
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
