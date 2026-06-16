import { X } from 'lucide-react';

const ImageZoomModal = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out transition-opacity duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X size={32} />
      </button>
      
      <img 
        src={image} 
        alt="Zoomed product view" 
        className="max-w-full max-h-[90vh] object-contain cursor-default select-none shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing if desired, or let it close
      />
    </div>
  );
};

export default ImageZoomModal;
