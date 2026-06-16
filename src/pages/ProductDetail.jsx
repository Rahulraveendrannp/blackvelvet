import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ImageZoomModal from '../components/ImageZoomModal';

// Dummy data
const products = [
  { id: 1, name: 'Tape-In Hair Extensions', price: '$250.00', image: 'https://images.unsplash.com/photo-1596701047716-16314c4da2a6?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Micro-Link Hair Extensions', price: '$240.00', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Keratin Fusion Hair Extensions', price: '$240.00', image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Invisible Tape-In Hair Extensions', price: '$320.00', image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, name: 'Genios Weft Hair Extensions', price: '$350.00', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'Clip-In Hair Extensions', price: '$180.00', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' }
];

const colors = [
  "#1 Jet Black", "#1B Natural Black", "#2 Dark Brown",
  "#2B Soft Black - Unavailable", "#4 Chocolate Brown - Unavailable",
  "#5 Medium Brown - Unavailable", "#14 Golden Blonde", "#60 Platinum Blonde"
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[3]; // Fallback

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedLength, setSelectedLength] = useState("24\"");
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Use product image and some dummy images for the gallery
  const galleryImages = [
    product.image,
    "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">

          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="relative group cursor-zoom-in" onClick={() => setIsZoomOpen(true)}>
              <img
                src={galleryImages[activeImageIndex]}
                alt={product.name}
                className="w-full aspect-square object-cover bg-gray-100"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
                {activeImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4 overflow-x-auto hide-scrollbar">
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`w-24 h-24 object-cover border-2 cursor-pointer transition-colors ${activeImageIndex === idx ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
                  alt="thumb"
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.price}</p>

            <div className="space-y-6 flex-grow">
              {/* Color Select */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Color</label>
                <div className="relative">
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full appearance-none border border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-black"
                  >
                    {colors.map(color => (
                      <option key={color} value={color} disabled={color.includes("Unavailable")}>
                        {color}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Length Select */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Length</label>
                <div className="relative">
                  <select
                    value={selectedLength}
                    onChange={(e) => setSelectedLength(e.target.value)}
                    className="w-full appearance-none border border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-black"
                  >
                    <option>18"</option>
                    <option>20"</option>
                    <option>22"</option>
                    <option>24"</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex gap-4 pt-6">
                <div className="flex items-center border border-gray-300 rounded h-14">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 h-full hover:bg-gray-50 transition-colors">-</button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-5 h-full hover:bg-gray-50 transition-colors">+</button>
                </div>
                <button className="flex-1 bg-black text-white h-14 rounded font-medium hover:bg-gray-800 transition-colors flex justify-center items-center gap-2 text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  Add to cart
                </button>
              </div>

              {/* Payment Icons */}
              <div className="flex flex-wrap gap-2 pt-6">
                <img src="https://cdn.shopify.com/s/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4f594113ce73e21e6ee342ab39878.svg" alt="Visa" className="h-7" />
                <img src="https://cdn.shopify.com/s/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="Mastercard" className="h-7" />
                <img src="https://cdn.shopify.com/s/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="PayPal" className="h-7" />
                <img src="https://cdn.shopify.com/s/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="Apple Pay" className="h-7" />
              </div>

              {/* Product Description */}
              <div className="pt-8 text-sm text-gray-700 leading-relaxed border-t border-gray-100 mt-8">
                <p className="mb-4">
                  Our <strong>{product.name}</strong> feature ultra-thin adhesive tabs that lie completely flat — the most undetectable extension method available. 100% Remy human hair.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>100% Remy Human Hair</li>
                  <li>Ultra-thin invisible tape tabs</li>
                  <li>20 pieces per pack</li>
                  <li>Reusable up to 3-4 times</li>
                  <li>Best for fine to medium hair</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-serif mb-12 text-center text-gray-900">View Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((simProduct) => (
            <div key={simProduct.id} className="group cursor-pointer" onClick={() => {
              window.scrollTo(0, 0);
              window.location.href = `/product/${simProduct.id}`;
            }}>
              <div className="relative overflow-hidden mb-4 rounded-sm bg-gray-100 aspect-[4/5]">
                <img 
                  src={simProduct.image} 
                  alt={simProduct.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-serif mb-1 group-hover:text-primary transition-colors text-center">{simProduct.name}</h3>
              <p className="text-sm text-gray-500 text-center">{simProduct.price}</p>
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
