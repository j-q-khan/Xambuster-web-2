import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What subjects are available?',
      answer: 'We offer questions for all major IGCSE subjects, including Mathematics, Sciences, and English.'
    },
    {
      question: 'How does the AI feedback work?',
      answer: 'Our AI analyzes your answers and provides personalized explanations and study recommendations.'
    },
    {
      question: 'Can I use XamBuster on my mobile device?',
      answer: 'Yes, XamBuster is fully responsive and works on all devices, including smartphones and tablets.'
    },
    {
      question: 'How often is the question bank updated?',
      answer: 'We regularly update our question bank with the latest past papers and exam board releases.'
    }
  ];

  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;