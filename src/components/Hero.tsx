import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 relative py-8">
      <div className="text-center w-full max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
          Introducing <span className="text-purple-500">Flowweave</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          The <span className="gradient-text">visual</span> way to automate <span className="text-blue-500">Web2</span> and <span className="text-green-500">Web3</span>
        </h2>
        
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-medium transition-all transform hover:scale-105 shadow-lg mt-6 md:mt-8">
          Start Automating
        </button>
      </div>
    </div>
  );
};

export default Hero;