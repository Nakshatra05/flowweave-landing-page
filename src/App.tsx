import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationCard from './components/ApplicationCard';
import BackgroundShapes from './components/BackgroundShapes';

// Define card content - updated with new content
const cards = [
  {
    title: "🪙 Airdrop NFTs When Someone Fills a Google Form",
    description: "Yo frens, filled that DAO feedback form? Boom — instant NFT drops from the chain gods. No backend, no devs. Just vibes + Flowweave."
  },
  {
    title: "🗳️ Summon a DAO Proposal From Discord Like a Wizard",
    description: "Type /gm make_proposal in Discord, and Flowweave beams your vote-ready proposal straight onto the chain. It's like magic, but with gas fees."
  },
  {
    title: "📈 Stake, Chill, & Let Telegram Notify You When You Print",
    description: "Ran a staking vault? Flowweave auto-calc'd your APY gains, and sent you a 'you just got paid' DM. Telegram bot = your new favorite accountant."
  },
  {
    title: "📥 Auto-Log Arweave Drops into Notion Like a Beast",
    description: "Every time Flowweave stores a file on Arweave, it logs it to Notion. Permanent + pretty dashboards without lifting a single finger."
  },
  {
    title: "📉 Wen Dump? SMS Alerts for Token Nuke Events",
    description: "Flowweave checks your $bags 24/7 and screams 'IT'S DUMPING' via SMS when your floor hits rock bottom. Never miss a red candle again."
  }
];

// Repositioned cards further from hero content to prevent overlap
const cardPositions = [
  { top: '15%', left: '1%', rotate: '3deg', zIndex: 1 },
  { top: '15%', right: '1%', rotate: '-2deg', zIndex: 2 },
  { bottom: '2%', left: '5%', rotate: '4deg', zIndex: 3 },
  { bottom: '2%', right: '5%', rotate: '-3deg', zIndex: 4 },
  { bottom: '15%', left: '30%', right: '30%', rotate: '2deg', zIndex: 5 }
];

function App() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-purple-50 flex flex-col">
      <div className="relative flex-grow">
        <BackgroundShapes />
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          
          <div className="flex-grow relative pt-6">
            {/* Cards rendered first so they appear behind the Hero content */}
            {cards.map((card, index) => (
              <div 
                key={index}
                className="absolute w-[220px] sm:w-[240px] filter drop-shadow-lg hover:z-50"
                style={{
                  top: cardPositions[index].top,
                  left: cardPositions[index].left,
                  right: cardPositions[index].right,
                  bottom: cardPositions[index].bottom,
                  transform: `rotate(${cardPositions[index].rotate})`,
                  zIndex: cardPositions[index].zIndex,
                  transition: 'all 0.3s ease'
                }}
              >
                <ApplicationCard 
                  title={card.title}
                  description={card.description}
                  index={index}
                  type="filled"
                />
              </div>
            ))}
            
            {/* Hero content with higher z-index to ensure it's on top */}
            <div className="relative z-10">
              <Hero />
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-xs py-2 z-10">
            Flowweave — Weaving the future of automation, one flow at a time.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;