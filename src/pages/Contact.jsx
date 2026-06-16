const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-serif">Contact</h1>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input 
                type="text" 
                placeholder="Name"
                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
              />
            </div>
          </div>

          <div>
            <input 
              type="tel" 
              placeholder="Phone"
              className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
            />
          </div>

          <div>
            <textarea 
              placeholder="Comment"
              rows={6}
              className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-y" 
            ></textarea>
          </div>

          <div>
            <button 
              type="submit" 
              className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
