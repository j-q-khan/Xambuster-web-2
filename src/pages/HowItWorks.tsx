import React from 'react';
import { UserPlus, List, Brain } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: UserPlus, title: 'Sign Up and Set Your Goals', description: 'Tell us which subjects you need help with and start your personalized study journey.' },
    { icon: List, title: 'Pick a Topic and Start Practicing', description: 'Select from thousands of past paper questions and focus on specific areas.' },
    { icon: Brain, title: 'Learn from AI Insights', description: 'Get instant feedback on your answers and learn where you need more practice.' },
  ];

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">How XamBuster Works</h1>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-16">
              <div className="bg-purple-600 rounded-full p-4 mr-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
                <p className="text-gray-400 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="/signup" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Start Practicing Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;