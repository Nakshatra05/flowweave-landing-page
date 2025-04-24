import React from 'react';
import ApplicationCard from './ApplicationCard';

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

const ApplicationGrid: React.FC = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="transform hover:scale-105 hover:z-10 transition-all duration-300"
            style={{
              transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
              zIndex: 5 - index
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
      </div>
    </div>
  );
};

export default ApplicationGrid;