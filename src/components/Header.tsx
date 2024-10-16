import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary-800 py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://ucarecdn.com/1e648c72-ab0f-40fa-9791-05d5e574ef23/" 
            alt="Xambuster Logo" 
            className="h-8 mr-2"
          />
          <span className="text-xl font-bold text-secondary-300">Xambuster</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/features" className="text-secondary-100 hover:text-secondary-300">Features</Link></li>
            <li><Link to="/how-it-works" className="text-secondary-100 hover:text-secondary-300">How It Works</Link></li>
            <li><Link to="/pricing" className="text-secondary-100 hover:text-secondary-300">Pricing</Link></li>
          </ul>
        </nav>
        <Link to="/signup" className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 px-4 py-2 rounded-full font-semibold">
          Start Free Trial
        </Link>
      </div>
    </header>
  );
};

export default Header;