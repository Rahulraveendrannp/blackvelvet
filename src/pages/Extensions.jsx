import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Grid, List, ShoppingBag } from 'lucide-react';
import QuickViewModal from '../components/QuickViewModal';

const products = [
  { id: 1, name: 'Tape-In Hair Extensions', price: '$250.00', image: 'https://images.unsplash.com/photo-1596701047716-16314c4da2a6?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Micro-Link Hair Extensions', price: '$240.00', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Keratin Fusion Hair Extensions', price: '$240.00', image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Invisible Tape-In Hair Extensions', price: '$320.00', image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, name: 'Genios Weft Hair Extensions', price: '$350.00', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'Clip-In Hair Extensions', price: '$180.00', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop' }
];

const Extensions = () => {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const openQuickView = (e, product) => {
    e.stopPropagation(); // Prevent navigating to detail page
    setQuickViewProduct(product);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        <h1 className="text-4xl font-serif mb-6">Extensions</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Black Velvet 100% Human Indian Raw hair extensions are both hand-selected and ethically sourced, which is the highest quality of human hair extensions available.
        </p>
      </div>

      {/* Filters and Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 text-sm">
        <div className="flex space-x-6 mb-4 sm:mb-0 text-gray-600">
          <button className="flex items-center hover:text-black">Disponibilidad <ChevronDown size={16} className="ml-1" /></button>
          <button className="flex items-center hover:text-black">Precio <ChevronDown size={16} className="ml-1" /></button>
        </div>

        <div className="flex items-center space-x-4 text-gray-600">
          <span>{products.length} items</span>
          <button className="flex items-center hover:text-black ml-4">Sort <ChevronDown size={16} className="ml-1" /></button>
          <div className="flex space-x-2 ml-4">
            <button className="p-1 text-black bg-gray-100 rounded"><Grid size={18} /></button>
            <button className="p-1 hover:text-black"><List size={18} /></button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
              <div className="relative overflow-hidden mb-4 rounded-sm bg-gray-100 aspect-square">
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
              <h3 className="text-sm font-serif mb-1 group-hover:text-primary transition-colors text-gray-800">{product.name}</h3>
              <p className="text-xs text-gray-500">{product.price}</p>
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

export default Extensions;
