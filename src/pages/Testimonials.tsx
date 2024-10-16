import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'James', grade: '10th Grade', quote: 'I never thought exam prep could be this easy! XamBuster is a game-changer.' },
    { name: 'Meera', grade: '10th Grade', quote: 'I improved my scores in just weeks thanks to targeted practice.' },
    { name: 'Ava', grade: '10th Grade', quote: 'XamBuster helped me ace my physics exams! It made studying so much easier!' },
  ];

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Hear from Students Who Aced Their Exams!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}, {testimonial.grade}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Video Testimonials</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;