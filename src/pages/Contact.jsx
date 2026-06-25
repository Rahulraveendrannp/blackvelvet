import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Read the URL from environment variables
      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);

      // We use no-cors mode for Google Apps Script to avoid CORS issues when sending data
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      // With no-cors, we can't read the response, so we assume success if no error was thrown
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      console.error('Error!', error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#1F1916] text-[#EAEAEA] font-sans pb-20">
      {/* Header */}
      {/* <div className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4 uppercase tracking-widest">Contact</h1>
        <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-50"></div>
      </div> */}

      {/* Contact Form */}
      <div className="max-w-2xl py-12 mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-[#15110E] p-8 md:p-12 border border-[#332A24] rounded-sm shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#665D56]" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#A89F91] mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#665D56]" 
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#A89F91] mb-2">Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-[#665D56]" 
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm text-[#A89F91] mb-2">Message</label>
              <textarea 
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-[#332A24] bg-[#1F1916] text-[#EAEAEA] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-y placeholder-[#665D56]" 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 backdrop-blur-sm bg-white/5 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Popup Notification */}
      {submitStatus !== 'idle' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          {submitStatus === 'success' ? (
            <div className="bg-[#15110E] p-8 max-w-md w-full border border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)] rounded-lg text-center transform transition-all animate-fade-in-up">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#1F1916] flex items-center justify-center border-2 border-[#D4AF37]">
                <span className="text-[#D4AF37] text-3xl">✓</span>
              </div>
              <h3 className="text-[#D4AF37] font-serif text-2xl mb-3">Message Sent</h3>
              <p className="text-[#EAEAEA] text-sm md:text-base leading-relaxed">
                Thank you for reaching out! We have received your message and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <div className="bg-[#15110E] p-8 max-w-md w-full border border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.15)] rounded-lg text-center transform transition-all animate-fade-in-up">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#1F1916] flex items-center justify-center border-2 border-red-500/50">
                <span className="text-red-400 text-3xl">!</span>
              </div>
              <h3 className="text-red-400 font-serif text-2xl mb-3">Oops!</h3>
              <p className="text-[#EAEAEA] text-sm md:text-base leading-relaxed">
                Something went wrong while sending your message. Please try again later.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact;
