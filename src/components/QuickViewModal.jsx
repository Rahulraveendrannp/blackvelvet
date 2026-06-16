import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

const colors = [
  "#1 Jet Black",
  "#1B Natural Black",
  "#2 Dark Brown",
  "#2B Soft Black - Unavailable",
  "#4 Chocolate Brown - Unavailable",
  "#5 Medium Brown - Unavailable",
  "#14 Golden Blonde",
  "#60 Platinum Blonde",
];

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedLength, setSelectedLength] = useState("20\"");
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-8">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Scrollable Images Column */}
        <div className="md:w-1/2 h-[40vh] md:h-[90vh] overflow-y-auto bg-gray-50 flex flex-col hide-scrollbar">
          {/* Main image */}
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />

          {/* Dummy additional images to show scrolling */}
          <img src="https://images.unsplash.com/photo-1596701047716-16314c4da2a6?q=80&w=1000&auto=format&fit=crop" alt="Details" className="w-full h-auto object-cover border-t-4 border-white" />
          <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop" alt="Details" className="w-full h-auto object-cover border-t-4 border-white" />
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
          <h2 className="text-2xl font-serif text-gray-900 mb-2">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-8">{product.price}</p>

          <div className="space-y-6">
            {/* Color Select */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Color</label>
              <div className="relative">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full appearance-none border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:border-black"
                >
                  {colors.map(color => (
                    <option key={color} value={color} disabled={color.includes("Unavailable")}>
                      {color}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Length Select */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Length</label>
              <div className="relative">
                <select
                  value={selectedLength}
                  onChange={(e) => setSelectedLength(e.target.value)}
                  className="w-full appearance-none border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:border-black"
                >
                  <option>18"</option>
                  <option>20"</option>
                  <option>22"</option>
                  <option>24"</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-50">-</button>
                <span className="px-4 py-2 text-center w-12">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-50">+</button>
              </div>
              <button className="flex-1 bg-black text-white rounded font-medium hover:bg-gray-800 transition-colors flex justify-center items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                Add to cart
              </button>
            </div>

            {/* Payment Icons */}
            <div className="flex flex-wrap gap-2 pt-6">
              <img src="https://cdn.shopify.com/s/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4f594113ce73e21e6ee342ab39878.svg" alt="Visa" className="h-6" />
              <img src="https://cdn.shopify.com/s/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="Mastercard" className="h-6" />
              <img src="https://cdn.shopify.com/s/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="PayPal" className="h-6" />
              <img src="https://cdn.shopify.com/s/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="Apple Pay" className="h-6" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
