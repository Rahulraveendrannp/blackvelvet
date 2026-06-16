import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="max-w-md">
            <h3 className="text-xl font-serif font-semibold mb-2">Join our email list</h3>
            <p className="text-sm text-gray-400">Get exclusive deals and early access to new products.</p>
          </div>
          <div className="w-full md:w-[400px]">
            <form className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-gray-900 border border-gray-700 text-white px-5 py-3 rounded-full focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/extensions" className="hover:text-primary transition-colors">Extensions</Link></li>
              <li><Link to="/extensions" className="hover:text-primary transition-colors">Invisible Tape-In</Link></li>
              <li><Link to="/extensions" className="hover:text-primary transition-colors">Micro Link Hair Extensions</Link></li>
              <li><Link to="/extensions" className="hover:text-primary transition-colors">Keratine Fusion Hair Extensions</Link></li>
              <li><Link to="/extensions" className="hover:text-primary transition-colors">Tape-In Hair Extensions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Black Velvet Indian Raw Hair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
