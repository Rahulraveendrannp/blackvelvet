import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-black text-white py-3 shadow-lg' : 'bg-transparent text-white py-5'
    }`;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center justify-center py-2 transition-colors">
              <img src="/logo_transparent.png" alt="Black Velvet Indian Raw Hair" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          {/* <div className="hidden md:flex items-center space-x-5">
            <button className="hover:text-primary transition-colors hover:scale-110 transform"><Search size={20} /></button>
            <button className="hover:text-primary transition-colors hover:scale-110 transform"><User size={20} /></button>
            <button className="hover:text-primary transition-colors hover:scale-110 transform"><ShoppingBag size={20} /></button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium hover:bg-primary/20 hover:text-primary rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {/* <div className="flex space-x-6 px-3 py-4 mt-2 border-t border-gray-800">
              <button className="hover:text-primary transition-colors"><Search size={20} /></button>
              <button className="hover:text-primary transition-colors"><User size={20} /></button>
              <button className="hover:text-primary transition-colors"><ShoppingBag size={20} /></button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
