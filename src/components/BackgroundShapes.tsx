import React from 'react';

const BackgroundShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cork board texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-70" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}
      ></div>
      
      {/* Subtle woodgrain border */}
      <div className="absolute inset-0 border-20 border-amber-800 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.888-.14 1.005-.174 1.837-.207 2.53-.207 1.834 0 4.445.433 6.414 1.212l.19.366c.13.234.235.468.296.702.095.17.192.336.3.484.157.266.383.39.6.434.56.375 1.555.456 2.39.152.17-.125.272-.206.57-.316.827-.296 1.537-.653 1.537-1.11 0-.32-.245-.527-.585-.586l-.227-.057c-3.983-1.026-7.764-1.565-11.433-1.565-2.023 0-4.125.186-6.31.777-1.183.32-2.634.724-3.955 1.202l-.067.016C9.294 19.249 5.424 18.93 1.043 19.75c-.1.463-.516.772-1.043.874L0 20h21.184zM82.5 9c2.08 0 3.5 1.42 3.5 3.5 0 2.27-.54 3.5-3.5 3.5s-3.5-1.337-3.5-3.5c0-2.053 1.42-3.5 3.5-3.5zm13-6c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM56 14c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zM39.5 12c1.38 0 2.5 1.12 2.5 2.5S40.88 17 39.5 17 37 15.88 37 14.5 38.12 12 39.5 12zM17 6c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-6 9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
           }}
      ></div>
      
      {/* Board shadow effect */}
      <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
      
      {/* Background dots/pattern */}
      <div className="absolute inset-0 bg-repeat opacity-30"
           style={{
             backgroundImage: `radial-gradient(#5a4a3a 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
           }}
      ></div>
    </div>
  );
};

export default BackgroundShapes;