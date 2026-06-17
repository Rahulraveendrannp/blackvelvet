import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1F1916] text-[#EAEAEA] font-sans pb-20">
      
      {/* Page Title */}
      <div className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4 uppercase tracking-widest">About Us</h1>
        <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Founder Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 border border-[#D4AF37] translate-x-4 translate-y-4 rounded-sm opacity-50"></div>
              <img 
                src="/avatar.jpg" 
                alt="Kala Sree - Founder Avatar" 
                className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl transition-all duration-700 hover:brightness-110"
              />
            </div>
          </div>
          <div className="md:w-7/12 space-y-6">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#A89F91]">About the Founder</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37]">Kala Sree</h2>
            <h3 className="text-xl font-medium text-white">Founder | 5th Generation Hair Expert</h3>
            <p className="text-lg leading-relaxed text-[#D1C9BE]">
              Black Velvet Indian Raw Hair is proudly led by Kala Sree, continuing a family legacy that has been rooted in the South Indian hair industry for over five decades. Built on generations of expertise, our brand is dedicated to delivering authentic, premium-quality Indian Raw Hair to customers around the world.
            </p>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#A89F91]">Our Heritage</h4>
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37]">50+ Years of Family Tradition</h2>
          <p className="text-lg leading-relaxed text-[#D1C9BE]">
            As a fifth-generation business, we carry forward the knowledge, values, and craftsmanship passed down through generations. Our deep understanding of raw hair sourcing allows us to provide only the finest quality South Indian Raw Hair while maintaining the highest standards of authenticity and consistency.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-[#15110E] p-12 md:p-16 rounded-sm shadow-2xl border-t border-[#D4AF37] text-center max-w-5xl mx-auto">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#A89F91] mb-6">Our Mission</h4>
          <p className="text-xl md:text-2xl font-serif text-[#EAEAEA] leading-relaxed italic">
            "To provide 100% natural, unprocessed, and ethically sourced single-donor Indian Raw Hair while maintaining exceptional quality, transparency, and customer satisfaction."
          </p>
        </section>

        {/* Promise Section */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#A89F91] mb-4">Our Promise</h4>
            <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37]">What We Guarantee</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              "100% Natural & Unprocessed Hair",
              "Single Head Donor Collection",
              "No Harsh Chemicals",
              "No Salon Waste Hair",
              "Premium Quality Assurance",
              "Worldwide Shipping"
            ].map((promise, index) => (
              <div key={index} className="flex items-center space-x-4 bg-[#15110E] p-6 rounded-sm shadow-lg border border-[#332A24] hover:border-[#D4AF37] transition-colors">
                <div className="flex-shrink-0 bg-[#D4AF37]/10 p-2 rounded-full">
                  <Check className="text-[#D4AF37]" size={24} />
                </div>
                <span className="text-lg font-medium text-[#EAEAEA]">{promise}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-12">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#A89F91]">Our Commitment</h4>
          <p className="text-lg leading-relaxed text-[#D1C9BE]">
            At Black Velvet Indian Raw Hair, every bundle reflects our dedication to purity, quality, and trust. We are committed to preserving the natural beauty of authentic Indian Raw Hair and delivering excellence to customers worldwide.
          </p>
          <div className="pt-8">
            <Link to="/products" className="inline-block border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-colors backdrop-blur-sm bg-white/5">
              Explore Our Collection
            </Link>
          </div>
        </section>

      </div>

      {/* Footer Banner */}
      <div className="mt-24 border-y border-[#332A24] bg-[#15110E] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#332A24]">
          <div className="pt-4 md:pt-0 md:px-12 w-full md:w-auto">
            <span className="text-[#D4AF37] font-serif text-xl md:text-2xl block mb-1">50+ Years</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A89F91]">Heritage</span>
          </div>
          <div className="pt-4 md:pt-0 md:px-12 w-full md:w-auto">
            <span className="text-[#D4AF37] font-serif text-xl md:text-2xl block mb-1">5th Gen</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A89F91]">Hair Experts</span>
          </div>
          <div className="pt-4 md:pt-0 md:px-12 w-full md:w-auto">
            <span className="text-[#D4AF37] font-serif text-xl md:text-2xl block mb-1">Global</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A89F91]">Worldwide Shipping</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
