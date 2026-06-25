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
            <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37]">Why Customers Trust Black Velvet</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              "50+ Years of Family Heritage",
              "5th Generation Hair Business",
              "100% Natural & Unprocessed Hair",
              "Single Head Donor Collection",
              "No Harsh Chemicals Used",
              "No Salon Waste Hair",
              "Premium Quality Inspection",
              "Ethically Sourced Temple Hair",
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

        {/* Process Section (New) */}
        <section className="max-w-7xl mx-auto pt-16">
          <div className="text-center mb-16">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#A89F91] mb-4">Our Process</h4>
            <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">From Temple Collection to Global Export</h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#D1C9BE]">
              At Black Velvet Indian Raw Hair, every bundle undergoes a carefully refined process to ensure exceptional quality, authenticity, and customer satisfaction. Combining generations of expertise with modern quality standards, we deliver premium South Indian Raw Hair to customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: "Temple Hair Collection", desc: "Premium South Indian temple hair is ethically sourced and carefully selected from trusted collection channels. Every strand is chosen to ensure authenticity, purity, and superior quality." },
              { num: 2, title: "Cleaning & Purification", desc: "The hair is gently cleansed and purified to remove impurities while preserving its natural strength, softness, and shine." },
              { num: 3, title: "Sorting & Selection", desc: "Each bundle is meticulously sorted according to length, texture, color, and quality standards to ensure consistency and excellence." },
              { num: 4, title: "Cuticle Alignment", desc: "Every strand is aligned in a single direction to minimize tangling, maintain smoothness, and enhance longevity." },
              { num: 5, title: "Wefting & Craftsmanship", desc: "Skilled artisans create strong, durable wefts while preserving the hair's natural characteristics and integrity." },
              { num: 6, title: "Texture Enhancement", desc: "Natural textures including Wavy, Deep Wavy, Straight, Bone Straight, Curly, and Deep Curly are carefully prepared to meet customer preferences while maintaining a natural appearance." },
              { num: 7, title: "Quality Inspection", desc: "Every product undergoes rigorous quality checks for texture consistency, strength, shedding, and overall excellence to ensure premium quality in every bundle." },
              { num: 8, title: "Luxury Packaging & Global Export", desc: "Finished products are securely packaged and prepared for worldwide delivery. We proudly serve salons, distributors, wholesalers, beauty brands, and individual customers across the globe." }
            ].map((step) => (
              <div key={step.num} className="bg-[#15110E] p-8 border-t-2 border-[#332A24] hover:border-[#D4AF37] transition-all group relative">
                <div className="text-5xl font-serif text-[#332A24] group-hover:text-[#D4AF37]/20 absolute top-4 right-4 transition-colors">0{step.num}</div>
                <h3 className="text-xl font-serif text-[#D4AF37] mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-[#A89F91] leading-relaxed relative z-10">{step.desc}</p>
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
