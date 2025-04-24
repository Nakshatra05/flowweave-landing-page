import React from 'react';
import { TwitterIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 mt-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">Flowweave</span>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a 
              href="https://twitter.com/flowweave" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 transition-colors"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="ml-2">@flowweave</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center md:text-left">
          <p className="text-gray-600">Flowweave — Weaving the future of automation, one flow at a time.</p>
          <div className="mt-4 flex flex-col md:flex-row md:justify-between text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Flowweave. All rights reserved.</p>
            <div className="mt-2 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-purple-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 