import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Brain, BarChart2, UserPlus, List, Check, Clock } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Search, title: 'Topic-Based Practice', description: 'Find questions by specific topics instantly' },
    { icon: BarChart2, title: 'Exam Analytics', description: 'See which topics feature most in past exams' },
    { icon: Brain, title: 'AI Feedback', description: 'Learn from mistakes with AI-driven insights' },
  ];

  const howItWorksSteps = [
    { icon: UserPlus, title: 'Sign Up', description: 'Create your account and set your study goals' },
    { icon: List, title: 'Choose Topics', description: 'Select specific areas you want to focus on' },
    { icon: Brain, title: 'Practice & Learn', description: 'Answer questions and get AI-powered feedback' },
  ];

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
    <div className="bg-dark min-h-screen text-white">
      {/* Header */}
      <header className="bg-primary-800 py-4 rounded-b-3xl">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-secondary-300">XamBuster</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-secondary-100 hover:text-secondary-300">Home</Link></li>
              <li>
                <select className="bg-secondary-500 text-primary-900 px-4 py-2 rounded-full">
                  <option>Subjects</option>
                  <option>Math</option>
                  <option>Science</option>
                  <option>English</option>
                </select>
              </li>
              <li><Link to="/about" className="text-secondary-100 hover:text-secondary-300">About</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search" className="bg-primary-700 text-white px-4 py-2 rounded-full pl-10" />
              <Search className="absolute left-3 top-2.5 text-secondary-300" size={18} />
            </div>
            <Link to="/signup" className="bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          <div className="col-span-2 bg-accent-lavender text-dark p-8 rounded-3xl">
            <h1 className="text-5xl font-bold mb-4">The IGCSE<br />Exams Are<br />Coming...</h1>
            <p className="text-xl mb-6">Are you ready to ace them?</p>
            <Link to="/signup" className="bg-accent-pink text-white px-6 py-3 rounded-full font-semibold inline-flex items-center">
              Start Preparing Now <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="space-y-4">
            <div className="bg-accent-blue text-white p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-2">Practice Questions</h2>
              <p>Access thousands of past paper questions</p>
            </div>
            <div className="bg-accent-green text-white p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-2">AI-Powered Learning</h2>
              <p>Get personalized feedback and explanations</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16 bg-accent-purple p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Why XamBuster Works</h2>
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl">
                <feature.icon className="w-12 h-12 text-accent-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/features" className="bg-white text-accent-purple px-6 py-3 rounded-full font-semibold inline-flex items-center">
              Explore All Features <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16 bg-accent-yellow p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 text-dark text-center">How XamBuster Works</h2>
          <div className="grid grid-cols-3 gap-6">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl">
                <div className="bg-accent-yellow rounded-full p-3 inline-block mb-4">
                  <step.icon className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Step {index + 1}: {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="bg-dark text-white px-6 py-3 rounded-full font-semibold inline-flex items-center">
              Learn More <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16 bg-accent-lavender p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 text-dark text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 ${plan.highlighted ? 'border-4 border-accent-purple' : ''}`}>
                <h3 className="text-2xl font-bold mb-4 text-dark">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent-purple">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">/{plan.period}</span>}
                </div>
                <ul className="mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-accent-green mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`block text-center py-2 px-4 rounded-full font-semibold ${
                    plan.highlighted
                      ? 'bg-accent-purple hover:bg-accent-purple text-white'
                      : 'bg-accent-blue hover:bg-accent-blue text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="bg-dark text-white px-6 py-3 rounded-full font-semibold inline-flex items-center">
              Compare Plans <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent-pink p-8 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Boost Your Grades?</h2>
          <p className="text-xl mb-6 text-white">Join thousands of students already using XamBuster to excel in their IGCSE exams.</p>
          <Link to="/signup" className="bg-white text-accent-pink px-8 py-3 rounded-full font-semibold inline-flex items-center">
            Get Started for Free <ArrowRight className="ml-2" />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-8 rounded-t-3xl mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-300">XamBuster</h3>
              <p className="text-gray-400">&copy; 2023 XamBuster. All rights reserved.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-secondary-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-400 hover:text-secondary-300">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-secondary-300">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-secondary-300">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;