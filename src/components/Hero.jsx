import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="flex flex-col items-center text-center text-white">
    
    <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      NLR Global
      <span className="text-emerald-400 block">Software Solutions</span>
    </h1>
    
    <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl">
      A leading Global IT Services & Consulting company, delivering secure, scalable, 
      and innovative digital transformation solutions worldwide.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <button
        onClick={scrollToContact}
        className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
      >
        Contact Us
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
      <button 
        onClick={() => scrollToSection('services')}
        className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
      >
        Our Services
      </button>
    </div>
    
    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-600 max-w-xl">
      <div className="text-center">
        <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
        <p className="text-sm text-blue-200">Secure Solutions</p>
      </div>
      <div className="text-center">
        <Zap className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
        <p className="text-sm text-blue-200">Fast Delivery</p>
      </div>
      <div className="text-center">
        <Globe className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
        <p className="text-sm text-blue-200">Global Reach</p>
      </div>
    </div>
    
  </div>
</div>


          {/* <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-6">💻 Our Expertise</h3>
              <div className="space-y-4">
                {[
                  { icon: '🛠️', title: 'Software Development', desc: 'Custom applications & solutions' },
                  { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable infrastructure & migration' },
                  { icon: '🔒', title: 'Cybersecurity', desc: 'Enterprise-grade protection' },
                  { icon: '💡', title: 'IT Consulting', desc: 'Strategic technology guidance' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Hero;