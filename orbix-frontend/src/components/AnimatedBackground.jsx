import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-bg-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      {/* Animated gradient orbs */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>
    </div>
  );
};

export default AnimatedBackground;
