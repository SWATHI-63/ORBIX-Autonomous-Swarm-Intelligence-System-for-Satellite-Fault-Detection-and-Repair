import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Satellite, Activity } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-space-800 to-space-900 text-white">
      <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orbix-accent to-blue-500 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
        Welcome to ORBIX
      </h1>
      <p className="text-xl max-w-3xl mb-12 text-gray-400 leading-relaxed">
        An Autonomous Swarm Intelligence System for Satellite Fault Detection and Repair.
        ORBIX leverages the power of swarm robotics to monitor, diagnose, and repair satellite networks in real-time, 
        ensuring continuous operation in the harsh environment of space.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl">
        <div className="bg-space-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orbix-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] flex flex-col items-center text-center">
          <Satellite size={48} className="text-orbix-accent mb-4 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
          <h3 className="text-xl font-bold mb-3 text-white">Real-time Monitoring</h3>
          <p className="text-gray-400 text-sm">Constant telemetry tracking of all active satellites.</p>
        </div>
        <div className="bg-space-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center">
          <Activity size={48} className="text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <h3 className="text-xl font-bold mb-3 text-white">Fault Detection</h3>
          <p className="text-gray-400 text-sm">Instant identification and categorization of anomalies.</p>
        </div>
        <div className="bg-space-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orbix-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] flex flex-col items-center text-center">
          <Rocket size={48} className="text-orbix-accent mb-4 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
          <h3 className="text-xl font-bold mb-3 text-white">Swarm Resolution</h3>
          <p className="text-gray-400 text-sm">Autonomous bots coordinate to execute precise repairs.</p>
        </div>
      </div>

      <button 
        onClick={() => navigate('/dashboard')}
        className="px-10 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-orbix-accent to-blue-500 text-space-900 border-none cursor-pointer transition-transform duration-200 hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
      >
        Start Simulation
      </button>
    </div>
  );
};

export default Home;
