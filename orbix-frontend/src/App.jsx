import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import FaultMonitor from './pages/FaultMonitor';
import BotControl from './pages/BotControl';
import Analytics from './pages/Analytics';
import About from './pages/About';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage onComplete={() => setShowLanding(false)} />;
  }

  return (
    <Router>
      <div className="App fade-in-dashboard relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <div style={{ paddingTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/fault-monitor" element={<FaultMonitor />} />
            <Route path="/bot-control" element={<BotControl />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
