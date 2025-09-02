import React from 'react';
import { Star, Users, Globe, Award } from 'lucide-react';

const Trust = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients'  },
    { icon: Globe, number: '25+', label: 'Countries Served'},
    { icon: Award, number: '1000+', label: 'Projects Delivered' },
    { icon: Star, number: '15+', label: 'Years Experience'}
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted Worldwide
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Trusted by clients for quality, integrity, and customer success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <span className="text-2xl mb-2 block">{stat.emoji}</span>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-emerald-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose NLR Global?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <span className="text-2xl mb-2 block">✨</span>
                <h4 className="text-white font-semibold mb-2">Innovation-Driven</h4>
                <p className="text-emerald-100 text-sm">Cutting-edge solutions that keep you ahead</p>
              </div>
              <div className="text-center">
                <span className="text-2xl mb-2 block">🛡️</span>
                <h4 className="text-white font-semibold mb-2">Secure & Reliable</h4>
                <p className="text-emerald-100 text-sm">Enterprise-grade security in every solution</p>
              </div>
              <div className="text-center">
                <span className="text-2xl mb-2 block">🌐</span>
                <h4 className="text-white font-semibold mb-2">Global Expertise</h4>
                <p className="text-emerald-100 text-sm">Worldwide experience, local understanding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;