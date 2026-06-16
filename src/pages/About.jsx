import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="bg-[#f0f0f0] py-12 text-center mb-16">
        <h1 className="text-4xl font-serif text-[#111]">About</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">
              {/* Decorative blobs/circles */}
              <div className="absolute top-0 left-8 w-12 h-12 rounded-full bg-primary z-0"></div>
              <div className="absolute top-12 left-0 w-6 h-6 rounded-full bg-primary z-0"></div>
              <div className="absolute bottom-12 right-0 w-8 h-8 rounded-full bg-primary z-0"></div>
              
              {/* Main Image Container with blob shape */}
              <div className="absolute inset-0 z-10 bg-primary/20 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden border-4 border-white shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                   alt="Yanka's Hair Pro Founder" 
                   className="w-full h-full object-cover"
                 />
              </div>
              
              {/* Background accent blob */}
              <div className="absolute inset-[-20px] z-0 bg-primary opacity-60 rounded-[50%_50%_40%_60%_/_60%_40%_50%_50%]"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#111]">Where Beauty Meets Confidence</h2>
            
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Welcome to Black Velvet Indian Raw Hair, where beauty and confidence come alive through the artistry of hair. We are a team of passionate and skilled professionals dedicated to helping you unleash your inner radiance and express your unique style through the transformational power of hair.
            </p>
            
            <h3 className="text-xl font-bold text-[#111] pt-4">Our Mission</h3>
            
            <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-4">
              At Black Velvet Indian Raw Hair, our mission is to elevate your hair game and empower you with the confidence that comes from feeling your best. We understand that your hair is not just a part of your appearance; it's a reflection of your personality and individuality. That's why we are committed to delivering exceptional hair extension services that are tailored to your preferences and needs.
            </p>

            <Link 
              to="/extensions" 
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Shop now
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
