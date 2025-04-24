import React from 'react';

interface ApplicationCardProps {
  title: string;
  description: string;
  index: number;
  type: 'filled' | 'placeholder';
}

// Sticky note colors
const stickyColors = [
  '#fff8c7', // yellow
  '#ffd8a8', // orange
  '#c1f8cd', // light green
  '#c6e5ff', // light blue
  '#ffd0eb', // pink
];

const ApplicationCard: React.FC<ApplicationCardProps> = ({ 
  title, 
  description,
  index,
  type
}) => {
  const stickyColor = stickyColors[index % stickyColors.length];
  const pinColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
  const pinColor = pinColors[index % pinColors.length];
  
  if (type === 'placeholder') {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-gray-300 flex flex-col justify-center items-center h-48 transition-all hover:shadow-md card-tilt">
        <div className="text-gray-400 mb-2 text-5xl">+</div>
        <p className="text-gray-500 text-center">Add Your Flow</p>
      </div>
    );
  }

  // Darker shade of the sticky color for the folded corner
  const getDarkerColor = (color: string) => {
    // Convert hex to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
    // Make it 20% darker
    const darkerR = Math.floor(r * 0.8);
    const darkerG = Math.floor(g * 0.8);
    const darkerB = Math.floor(b * 0.8);
    
    // Convert back to hex
    return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
  };

  const darkerColor = getDarkerColor(stickyColor);

  return (
    <div className="p-5 pt-8 transition-all duration-300 relative group" 
      style={{ 
        backgroundColor: stickyColor,
        boxShadow: '0 8px 16px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.15), 1px 1px 0 rgba(0,0,0,0.05)',
        borderRadius: '2px',
        transform: 'perspective(800px) rotateX(2deg)',
        transformOrigin: 'center top',
        transition: 'all 0.3s ease',
      }}
    >
      {/* 3D hover effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: '0 12px 24px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.15)',
          transform: 'perspective(800px) rotateX(5deg) translateZ(10px)',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
          zIndex: -1
        }}
      />
      
      {/* Enhanced 3D Thumbtack/pin with shadow effect */}
      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 ${pinColor} rounded-full shadow-lg z-10`} 
        style={{
          boxShadow: '0 6px 12px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
          background: `radial-gradient(circle at 40% 40%, ${pinColor.includes('red') ? '#ef4444' : 
                                                           pinColor.includes('blue') ? '#3b82f6' : 
                                                           pinColor.includes('green') ? '#22c55e' : 
                                                           pinColor.includes('yellow') ? '#eab308' : 
                                                           '#8b5cf6'}, 
                                                           ${pinColor.includes('red') ? '#b91c1c' : 
                                                           pinColor.includes('blue') ? '#1d4ed8' : 
                                                           pinColor.includes('green') ? '#15803d' : 
                                                           pinColor.includes('yellow') ? '#a16207' : 
                                                           '#7e22ce'})`
        }}
      >
        {/* Pin highlight */}
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-70"></div>
        
        {/* Pin base */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-1 bg-black opacity-20 rounded-full"></div>
      </div>
      
      {/* Pin shadow on the note */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black opacity-10 rounded-full"></div>
      
      {/* Content */}
      <h3 className="text-gray-900 font-semibold text-base mb-2 leading-tight relative z-10">{title}</h3>
      <p className="text-gray-700 text-xs leading-normal relative z-10">{description}</p>
      
      {/* Subtle lined paper effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full h-px bg-black opacity-5" 
            style={{ marginTop: `${(i + 1) * 18}px` }}
          />
        ))}
      </div>
      
      {/* Folded corner effect */}
      <div 
        className="absolute w-0 h-0 bottom-0 right-0 z-10"
        style={{
          borderStyle: 'solid',
          borderWidth: '0 0 15px 15px',
          borderColor: `transparent transparent ${darkerColor} transparent`,
          boxShadow: '-2px -2px 3px rgba(0,0,0,0.1) inset',
          transition: 'all 0.3s ease',
        }}
      />
      
      {/* Edge shadow effects for 3D appearance */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-30"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)',
        }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-[2px] opacity-30"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.15), transparent)',
        }}
      />
    </div>
  );
};

export default ApplicationCard;