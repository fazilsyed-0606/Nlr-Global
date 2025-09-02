import React from 'react';
import { Target, Eye, Handshake } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            🚀 Driving innovation and excellence in every solution we deliver
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center group hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            {/* <span className="text-3xl mb-4 block">🚀</span> */}
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To empower businesses with secure, scalable, and innovative technology solutions that drive growth and digital transformation.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center group hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-8 w-8 text-white" />
            </div>
            {/* <span className="text-3xl mb-4 block">⭐</span> */}
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To be a trusted global leader in next-generation IT services, setting new standards for innovation and excellence.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center group hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            {/* <span className="text-3xl mb-4 block">🤝</span> */}
            <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
            <p className="text-blue-100 leading-relaxed">
              Committed to quality, integrity, and unwavering focus on customer success in every project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;