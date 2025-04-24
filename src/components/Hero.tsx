import React from 'react';

const Hero: React.FC = () => {
  const handleStartClick = () => {
    window.open('https://flowweave.xyz', '_blank');
  };

  const handleXClick = () => {
    window.open('https://x.com/flowweave', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 relative py-8">
      <div className="text-center w-full max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
          Introducing <span className="text-purple-500">Flowweave</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          The <span className="gradient-text">visual</span> way to automate <span className="text-blue-500">Web2</span> and <span className="text-green-500">Web3</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <button 
            onClick={handleStartClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-medium transition-all transform hover:scale-105 shadow-lg"
          >
            Start Automating
          </button>
          
          <button 
            onClick={handleXClick}
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-medium transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @Flowweave
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;