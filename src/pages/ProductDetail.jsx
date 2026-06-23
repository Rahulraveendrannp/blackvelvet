import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ImageZoomModal from '../components/ImageZoomModal';
import { products, productColors } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id)) || products[0]; // Fallback
  
  const [selectedColor, setSelectedColor] = useState(productColors[0]);
  const [selectedLength, setSelectedLength] = useState(product.length.split(' - ')[0].replace('"', '') + '"');
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Generate some length options based on the product string "X - Y"
  const lengthMatch = product.length.match(/(\d+)"\s*-\s*(\d+)"/);
  let lengthOptions = ['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"'];
  if (lengthMatch) {
    const min = parseInt(lengthMatch[1]);
    const max = parseInt(lengthMatch[2]);
    lengthOptions = [];
    for (let i = min; i <= max; i += 2) {
      lengthOptions.push(`${i}"`);
    }
  }

  // Use product image and some dummy images for the gallery
  const galleryImages = [
    product.image,
    "https://placehold.co/600x800/15110E/D4AF37.png?text=Detail+View+1",
    "https://placehold.co/600x800/1F1916/D4AF37.png?text=Detail+View+2"
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#1F1916] text-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="relative group cursor-zoom-in border border-[#332A24] bg-[#15110E]" onClick={() => setIsZoomOpen(true)}>
              <img 
                src={galleryImages[activeImageIndex]} 
                alt={product.name} 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-4 right-4 bg-black/50 text-[#D4AF37] px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {activeImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 mt-4 overflow-x-auto hide-scrollbar">
              {galleryImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  className={`w-24 h-24 object-cover border-2 cursor-pointer transition-colors ${activeImageIndex === idx ? 'border-[#D4AF37]' : 'border-[#332A24] hover:border-[#A89F91]'}`} 
                  alt="thumb" 
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col">
            <nav className="text-sm text-[#A89F91] mb-4">
              Home / {product.category} / <span className="text-[#D4AF37]">{product.name}</span>
            </nav>
            
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-2">{product.name}</h1>
            <p className="text-xl text-[#EAEAEA] mb-6">{product.price}</p>
            
            <div className="w-full h-px bg-[#332A24] mb-8"></div>

            <div className="space-y-6">
              {/* Color Selection */}
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Color</label>
                <div className="relative">
                  <select 
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full appearance-none border border-[#332A24] rounded px-4 py-3 bg-[#15110E] text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    {productColors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37] pointer-events-none" size={20} />
                </div>
              </div>

              {/* Length Selection */}
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Length</label>
                <div className="relative">
                  <select 
                    value={selectedLength}
                    onChange={(e) => setSelectedLength(e.target.value)}
                    className="w-full appearance-none border border-[#332A24] rounded px-4 py-3 bg-[#15110E] text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    {lengthOptions.map(length => (
                      <option key={length} value={length}>{length}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37] pointer-events-none" size={20} />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Quantity</label>
                <div className="flex items-center border border-[#332A24] rounded w-32 bg-[#15110E]">
                  <button 
                    className="px-4 py-3 text-[#EAEAEA] hover:text-[#D4AF37] transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >-</button>
                  <input 
                    type="text" 
                    value={quantity} 
                    readOnly
                    className="w-full text-center bg-transparent text-[#EAEAEA] focus:outline-none"
                  />
                  <button 
                    className="px-4 py-3 text-[#EAEAEA] hover:text-[#D4AF37] transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#15110E] text-[#D4AF37] border border-[#D4AF37] py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300">
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#D4AF37] text-[#111111] py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-[#C8A45D] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300">
                  Buy it now
                </button>
              </div>

              {/* Payment Icons */}
              <div className="flex flex-wrap gap-2 pt-6 items-center text-[#A89F91] font-medium text-sm">
                 <span>Secure Checkout:</span>
                 <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">Visa</div>
                 <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">Mastercard</div>
                 <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">PayPal</div>
                 <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">Apple Pay</div>
              </div>

              {/* Product Description */}
              <div className="pt-8">
                <h3 className="text-lg font-serif mb-4 text-[#D4AF37]">Product Details</h3>
                <div className="space-y-4 text-sm text-[#D1C9BE] leading-relaxed">
                  <p>
                    Experience the ultimate luxury with our {product.name}. Sourced directly from South Indian temples, 
                    this 100% raw human hair offers unmatched quality and longevity.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>100% Unprocessed Indian Raw Hair</li>
                    <li>Single donor cut</li>
                    <li>Cuticles aligned in the same direction</li>
                    <li>Can be bleached, dyed, and styled</li>
                    <li>Lifespan: 3-5 years with proper care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-[#332A24] bg-[#15110E]">
        <h2 className="text-3xl font-serif mb-12 text-center text-[#D4AF37]">View Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.filter(p => p.id !== product.id).slice(0, 5).map((simProduct) => (
            <div key={simProduct.id} className="group cursor-pointer" onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/product/${simProduct.id}`);
            }}>
              <div className="relative overflow-hidden mb-4 rounded-sm bg-[#1F1916] aspect-[4/5] border border-[#332A24] group-hover:border-[#D4AF37] transition-colors">
                <img 
                  src={simProduct.image} 
                  alt={simProduct.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-serif mb-1 group-hover:text-[#D4AF37] transition-colors text-center text-[#EAEAEA]">{simProduct.name}</h3>
              <p className="text-xs text-[#A89F91] text-center mb-1">{simProduct.length}</p>
              <p className="text-sm text-[#D4AF37] text-center">{simProduct.price}</p>
            </div>
          ))}
        </div>
      </div>

      <ImageZoomModal
        isOpen={isZoomOpen}
        image={product.image}
        onClose={() => setIsZoomOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;
