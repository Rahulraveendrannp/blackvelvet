import { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { productColors } from '../data/products';

const QuickViewModal = ({ isOpen, product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(productColors[0]);
  const [selectedLength, setSelectedLength] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product && product.length) {
      setSelectedLength(product.length.split(' - ')[0].replace('"', '') + '"');
    }
  }, [product]);

  if (!isOpen || !product) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1F1916] w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative rounded-sm shadow-2xl border border-[#332A24] hide-scrollbar">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#15110E] text-[#EAEAEA] p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#111111] transition-colors"
        >
          <X size={20} />
        </button>

        {/* Scrollable Images Column */}
        <div className="md:w-1/2 h-[40vh] md:h-[90vh] overflow-y-auto bg-[#15110E] flex flex-col hide-scrollbar border-r border-[#332A24]">
          {/* Main image */}
          <img src={product.image} alt={product.name} className="w-full aspect-[4/5] object-cover" />
          
          {/* Dummy additional images to show scrolling */}
          <img src="https://placehold.co/600x800/1F1916/D4AF37.png?text=Detail+Image+2" alt="Details" className="w-full aspect-[4/5] object-cover border-t border-[#332A24]" />
          <img src="https://placehold.co/600x800/15110E/D4AF37.png?text=Detail+Image+3" alt="Details" className="w-full aspect-[4/5] object-cover border-t border-[#332A24]" />
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-8 flex flex-col hide-scrollbar">
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-2">{product.name}</h2>
            <p className="text-xl text-[#EAEAEA]">{product.price}</p>
          </div>

          <div className="w-full h-px bg-[#332A24] mb-6"></div>

          <div className="space-y-5 flex-grow">
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
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full bg-[#15110E] text-[#D4AF37] border border-[#D4AF37] py-4 rounded hover:bg-[#D4AF37] hover:text-[#111111] transition-colors font-medium">
                Add to Cart
              </button>
              <button className="w-full bg-[#D4AF37] text-[#111111] py-4 rounded hover:bg-[#C8A45D] transition-colors font-medium">
                Buy it now
              </button>
            </div>
            
            {/* Payment Icons */}
            <div className="flex flex-wrap gap-2 pt-4 items-center text-[#A89F91] font-medium text-sm">
               <span>Secure Checkout:</span>
               <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">Visa</div>
               <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">Mastercard</div>
               <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">PayPal</div>
               <div className="border border-[#332A24] px-2 py-1 rounded bg-[#15110E]">Apple Pay</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
