import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#15110E] text-[#EAEAEA] py-16 border-t border-[#332A24] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Tagline Section */}
        <div className="mb-16 border-b border-[#332A24] pb-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4">Black Velvet Indian Raw Hair</h2>
          <p className="text-xl md:text-2xl italic text-[#EAEAEA] mb-6 font-serif">"Pure Hair. Pure Trust. Pure You."</p>
          <p className="text-[#A89F91] text-lg leading-relaxed">
            Delivering authentic South Indian Raw Hair with unmatched quality, craftsmanship, and heritage for customers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#A89F91]">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-[#D4AF37] transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 2: Address */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#D4AF37]">Address</h4>
            <div className="space-y-2 text-sm text-[#A89F91] leading-relaxed">
              <p className="font-semibold text-[#EAEAEA]">COMPANY HEADQUARTERS</p>
              <p>19 A, SULOCHANA NAGAR</p>
              <p>MOULIVAKKAM</p>
              <p>CHENNAI, TAMIL NADU, 600116</p>
            </div>
          </div>

          {/* Column 3: Order Now */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#D4AF37]">Order Now</h4>
            <div className="space-y-4 text-sm text-[#A89F91]">
              <p>Telephone: <a href="tel:+15551234567" className="hover:text-[#D4AF37] transition-colors">+1 (555) 123-4567</a></p>
              <p>Fax: +1 (555) 123-45689</p>
              <p><a href="mailto:sales@blackvelvet.com" className="hover:text-[#D4AF37] transition-colors underline">sales@blackvelvet.com</a></p>
              <p><Link to="/" className="hover:text-[#D4AF37] transition-colors underline">www.blackvelvet.com</Link></p>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#D4AF37]">Contact Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="bg-[#1F1916] p-3 rounded-sm border border-[#332A24] text-[#EAEAEA] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="bg-[#1F1916] p-3 rounded-sm border border-[#332A24] text-[#EAEAEA] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="bg-[#1F1916] p-3 rounded-sm border border-[#332A24] text-[#EAEAEA] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="bg-[#1F1916] p-3 rounded-sm border border-[#332A24] text-[#EAEAEA] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#332A24] mt-16 pt-8 text-center text-xs text-[#A89F91]">
          <p>&copy; {new Date().getFullYear()} Black Velvet Indian Raw Hair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
