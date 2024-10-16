import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '€0',
      features: [
        'Access to a limited set of past paper questions',
        'Basic progress tracking',
        'Community forum access',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Premium',
      price: '€9.99',
      period: 'per month',
      features: [
        'Unlimited access to all past paper questions',
        'AI feedback and explanations',
        'Advanced analytics and insights',
        'Personalized study planner',
        'Priority support',
      ],
      cta: 'Go Premium',
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan and Start Crushing Your Exams</h1>
        <p className="text-xl text-center mb-16 text-gray-400">Simple, transparent pricing. No surprises.</p>
        <div className="flex justify-center space-x-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-gray-800 rounded-lg p-8 w-96 ${plan.highlighted ? 'border-2 border-purple-500' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-400">/{plan.period}</span>}
              </div>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/signup"
                className={`block text-center py-2 px-4 rounded-full font-semibold ${
                  plan.highlighted
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;