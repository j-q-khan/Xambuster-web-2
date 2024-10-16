import React from 'react';

const Stats = () => {
  const stats = [
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '1M+', label: 'Data Points Analyzed' },
    { value: '50+', label: 'Integrations' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Xambuster by the Numbers</h2>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">{stat.value}</div>
              <div className="text-xl text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;