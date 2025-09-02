import React from 'react';
import { MapPin, Building, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About NLR Global
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                NLR Global Software Solutions is a leading global IT services and consulting company dedicated to delivering digital transformation solutions that empower businesses worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our headquarters in Nellore, Andhra Pradesh, India, we serve clients across the globe, combining local expertise with international standards to deliver exceptional technology solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced professionals specializes in software development, cloud solutions, cybersecurity, and IT consulting, ensuring your business stays competitive in today's digital landscape.
              </p>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                {/* <span className="text-2xl mr-2">📍</span> */}
                <h4 className="text-lg font-semibold text-gray-900">Our Location</h4>
              </div>
              <p className="text-gray-700">
                Headquartered in Nellore, Andhra Pradesh, India – serving clients worldwide with 24/7 support and global delivery capabilities.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Presence</h4>
                    <p className="text-gray-600 text-sm">Serving clients across multiple continents with local support and global expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Highly skilled professionals with extensive experience in modern technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock support ensuring your business operations never stop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">
                Join hundreds of satisfied clients who trust us with their digital transformation journey.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;