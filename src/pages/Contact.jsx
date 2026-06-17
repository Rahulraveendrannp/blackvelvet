const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1F1916] text-[#EAEAEA] font-sans pb-20">
      {/* Header */}
      <div className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4 uppercase tracking-widest">Contact</h1>
        <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-50"></div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-[#15110E] p-8 md:p-12 border border-[#332A24] rounded-sm shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#665D56]" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#665D56]" 
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#A89F91] mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#665D56]" 
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm text-[#A89F91] mb-2">Message</label>
              <textarea 
                rows={6}
                className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-y placeholder-[#665D56]" 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:text-[#111111] transition-colors backdrop-blur-sm bg-white/5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
