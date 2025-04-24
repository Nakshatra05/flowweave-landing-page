import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-3 px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">Flowweave</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="px-4 py-1.5 bg-black text-white text-sm rounded-full flex items-center space-x-1 transition-all transform hover:scale-105 shadow-sm">
          <span>Let's Get Started</span>
          <ArrowRight className="w-3 h-3 ml-1" />
        </button>
      </div>
    </header>
  );
};

export default Header;