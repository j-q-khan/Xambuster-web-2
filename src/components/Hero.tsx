import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-800">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-bold mb-6 text-secondary-300">Ace IGCSE Exams with XamBuster!</h1>
          <p className="text-xl mb-8 text-secondary-100">
            Thousands of past exam questions, smart insights, and AI-powered explanations at your fingertips.
          </p>
          <button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 px-6 py-3 rounded-full flex items-center font-semibold">
            Start Your Free Trial Now <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Students using XamBuster" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;