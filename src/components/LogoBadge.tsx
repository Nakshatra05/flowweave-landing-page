import React from 'react';

interface LogoBadgeProps {
  src: string;
  alt: string;
  top: string;
  left?: string;
  right?: string;
  rotate: string;
  scale: string;
}

const LogoBadge: React.FC<LogoBadgeProps> = ({ 
  src, 
  alt,
  top,
  left,
  right,
  rotate,
  scale
}) => {
  return (
    <div 
      className="absolute"
      style={{ 
        top, 
        left, 
        right,
        transform: `scale(${scale})`,
        zIndex: 5
      }}
    >
      <div className="bg-white p-2 rounded-lg shadow-md">
        <img 
          src={src} 
          alt={alt} 
          className="w-16 h-16 object-contain" 
        />
      </div>
    </div>
  );
};

export default LogoBadge; 