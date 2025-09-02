import React from 'react';
import { Heart, CreditCard, ShoppingBag, GraduationCap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      emoji: '🏥',
      description: 'Secure, compliant solutions for healthcare providers, including patient management systems, telemedicine platforms, and health data analytics.',
      highlights: ['HIPAA Compliance', 'Patient Data Security', 'Telemedicine Solutions', 'Electronic Health Records']
    },
    {
      icon: CreditCard,
      title: 'Finance',
      emoji: '💳',
      description: 'Robust financial technology solutions with advanced security measures, trading platforms, and regulatory compliance systems.',
      highlights: ['Banking Solutions', 'Payment Processing', 'Risk Management', 'Regulatory Compliance']
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      emoji: '🛒',
      description: 'Modern e-commerce platforms, inventory management systems, and customer experience solutions to drive retail success.',
      highlights: ['E-commerce Platforms', 'Inventory Systems', 'Customer Analytics', 'Omnichannel Solutions']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      emoji: '🎓',
      description: 'Innovative educational technology solutions including learning management systems, student portals, and online collaboration tools.',
      highlights: ['LMS Development', 'Student Portals', 'Online Learning', 'Educational Analytics']
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            🏥 Specialized solutions for Healthcare, Finance, Retail, and Education sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl mb-1 block">{industry.emoji}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-3">
                  {industry.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;