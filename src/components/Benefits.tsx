import React from 'react';
import { BookOpen, BarChart2, Brain } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { 
      icon: BookOpen, 
      title: 'Organized Practice', 
      description: 'Not just by subject, not just by module, not just by sub-module—but by topic! Dive deep into thousands of past questions, meticulously organized to help you master every detail.' 
    },
    { 
      icon: BarChart2, 
      title: 'Insights to Improve', 
      description: 'Get intel on high-weight exam topics and track your progress.' 
    },
    { 
      icon: Brain, 
      title: 'AI-Powered Learning', 
      description: 'AI explains your mistakes and guides you toward mastery.' 
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Ultimate IGCSE Study Partner</h2>
        <div className="grid grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="w-16 h-16 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;