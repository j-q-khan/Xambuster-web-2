import React from 'react';
import { Search, PieChart, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Search, title: 'Find questions by topic instantly', description: 'No more rummaging through entire papers! Search for past questions by specific topics and practice with ease.' },
    { icon: PieChart, title: 'See which topics feature most in past exams', description: 'Valuable insights on which topics appear the most, so you know exactly where to focus.' },
    { icon: MessageSquare, title: 'AI-driven practice insights', description: 'Our AI helps you understand mistakes, so you never get stuck again.' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why XamBuster Works!</h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-gray-800 p-6 rounded-lg">
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
            See Full Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;