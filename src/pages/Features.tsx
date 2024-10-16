import React from 'react';
import { Search, PieChart, MessageSquare, Target, Calendar, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Search, title: 'Topic-Based Practice', description: 'No more rummaging through entire papers! Search for past questions by specific topics and practice with ease.' },
    { icon: PieChart, title: 'Exam Analytics', description: 'Valuable insights on which topics appear the most, so you know exactly where to focus.' },
    { icon: MessageSquare, title: 'AI Feedback & Guidance', description: 'Our AI helps you understand mistakes, so you never get stuck again.' },
    { icon: Target, title: 'Daily Practice Goals', description: 'Just 10 questions a day keeps the stress away. Consistency is key to exam success.' },
    { icon: Calendar, title: 'Study Planner', description: 'Create a personalized study schedule that adapts to your progress and exam dates.' },
    { icon: Zap, title: 'Performance Tracking', description: 'Monitor your improvement over time with detailed analytics and progress reports.' },
  ];

  return (
    <section className="py-20 pt-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Everything You Need to Crush the IGCSEs</h1>
        <p className="text-xl text-center mb-16 text-gray-600">Explore XamBuster's features and see how we make exam prep simple and effective.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="/signup" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;