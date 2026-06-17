import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Grid, List, ShoppingBag } from 'lucide-react';
import QuickViewModal from '../components/QuickViewModal';
import { products } from '../data/products';

const Products = () => {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const openQuickView = (e, product) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#1F1916] text-[#EAEAEA] font-sans">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        <h1 className="text-4xl font-serif mb-6 text-[#D4AF37]">Our Products</h1>
        <p className="text-sm text-[#D1C9BE] leading-relaxed">
          Black Velvet 100% Human Indian Raw hair extensions are both hand-selected and ethically sourced, which is the highest quality of human hair extensions available.
        </p>
      </div>

      {/* Filters and Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center border-t border-[#332A24] text-sm">
        <div className="flex space-x-6 mb-4 sm:mb-0 text-[#A89F91]">
          <button className="flex items-center hover:text-[#D4AF37] transition-colors">Category <ChevronDown size={16} className="ml-1" /></button>
          <button className="flex items-center hover:text-[#D4AF37] transition-colors">Price <ChevronDown size={16} className="ml-1" /></button>
        </div>
        
        <div className="flex items-center space-x-4 text-[#A89F91]">
          <span>{products.length} items</span>
          <button className="flex items-center hover:text-[#D4AF37] transition-colors ml-4">Sort <ChevronDown size={16} className="ml-1" /></button>
          <div className="flex space-x-2 ml-4">
            <button className="p-1 text-[#1F1916] bg-[#D4AF37] rounded"><Grid size={18} /></button>
            <button className="p-1 hover:text-[#D4AF37] transition-colors"><List size={18} /></button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {products.map((product) => (
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
      </div>

      <QuickViewModal 
        isOpen={!!quickViewProduct} 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};

export default Products;
