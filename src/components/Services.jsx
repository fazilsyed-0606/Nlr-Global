import React from 'react';
import { Code, Cloud, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      // emoji: '💻',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies and modern development practices.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development', 'Legacy Modernization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      // emoji: '☁️',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce operational costs.',
      features: ['Cloud Migration', 'Infrastructure Design', 'DevOps Services', 'Cloud Security', 'Performance Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      // emoji: '🔒',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Threat Protection', 'Compliance Management', 'Risk Assessment', 'Incident Response']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      // emoji: '💡',
      description: 'Strategic technology consulting to help you make informed decisions and accelerate your digital transformation journey.',
      features: ['Digital Strategy', 'Technology Roadmap', 'Process Optimization', 'Change Management', 'Vendor Assessment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services designed to drive innovation and growth for businesses across the globe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl mb-2 block">{service.emoji}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;