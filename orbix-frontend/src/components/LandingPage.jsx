import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Wait for the animation to finish (4 seconds total) before proceeding
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 3800); 
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="landing-container">
      <div className="landing-text-container">
        <h1 className="landing-title">ORBIX</h1>
        <p className="landing-subtitle">Autonomous Swarm Intelligence System</p>
      </div>
    </div>
  );
};

export default LandingPage;
