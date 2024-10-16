import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">We're Here to Help!</h1>
        <p className="text-xl text-center mb-16 text-gray-400">Have questions? Reach out to us anytime.</p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <form className="bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-gray-700 rounded px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-gray-700 rounded px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-gray-700 rounded px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-gray-700 rounded px-3 py-2"></textarea>
              </div>
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-gray-800 p-6 rounded-lg h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-2 text-purple-500" />
                <span>support@xambuster.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-2 text-purple-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-purple-500" />
                <span>123 Exam Street, Study City, 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;