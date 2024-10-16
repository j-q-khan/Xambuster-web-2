import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <img 
              src="https://ucarecdn.com/1e648c72-ab0f-40fa-9791-05d5e574ef23/" 
              alt="Xambuster Logo" 
              className="h-8 mb-4"
            />
            <p className="text-gray-400">&copy; 2023 Xambuster. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;