import React, { useState, useEffect } from 'react';
import { Zap, Target, AlertTriangle } from 'lucide-react';

const BotControl = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.error("Failed to fetch bots", err));
  }, []);

  const handleOverride = (id) => {
    // Optionally update UI optimistically
    // Make POST to backend
    fetch(`http://localhost:8080/api/bots/${id}/override`, { method: 'POST' })
      .then(res => res.json())
      .then(updatedBot => {
        setBots(bots.map(bot => bot.id === id ? updatedBot : bot));
      })
      .catch(err => console.error("Failed to override bot", err));
  };

  const getEnergyColor = (energy) => {
    if (energy > 50) return 'text-green-400 bg-green-400';
    if (energy > 20) return 'text-yellow-400 bg-yellow-400';
    return 'text-red-400 bg-red-400';
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-[85vh]">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 flex items-center">
          🤖 Swarm Control Unit
        </h2>
      </div>
      <p className="text-gray-400 mb-10 text-lg border-l-2 border-green-500 pl-4 bg-green-900/10 py-2">
        Direct monitoring of individual bot status, tasks, and system performance with manual intervention capabilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bots.map((bot) => (
          <div key={bot.id} className="relative bg-space-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(72,187,120,0.1)] group">
            
            {/* Holographic flair */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-green-500/10 transition-colors"></div>

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold tracking-widest text-orbix-accent">{bot.id}</h3>
              <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider text-green-300 bg-green-400/10 border border-green-400/20 rounded-full">
                {bot.type}
              </span>
            </div>

            {/* Energy Bar */}
            <div className="mb-6 bg-space-900/50 p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm flex items-center gap-2"><Zap size={14} className="text-yellow-400" /> Core Energy</span>
                <span className={`font-mono font-bold ${getEnergyColor(bot.energy).split(' ')[0]}`}>{bot.energy}%</span>
              </div>
              <div className="w-full h-2 bg-space-900 rounded-full overflow-hidden border border-white/5">
                <div 
                  className={`h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)] ${getEnergyColor(bot.energy).split(' ')[1]}`} 
                  style={{ width: `${bot.energy}%` }}
                />
              </div>
            </div>

            {/* Current Task */}
            <div className="mb-8">
              <span className="text-gray-500 text-xs uppercase tracking-widest mb-2 flex items-center gap-2"><Target size={12} className="text-orbix-accent"/> Current Directive</span>
              <div className="font-mono text-sm text-gray-200 bg-space-900/80 p-3 rounded-lg border border-white/5 truncate">
                {bot.task}
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={() => handleOverride(bot.id)}
              className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-widest transition-all duration-300 flex justify-center items-center gap-2
                ${bot.task.includes('Manual') 
                  ? 'bg-red-500 border border-red-400 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:bg-red-600' 
                  : 'bg-orbix-accent/10 border border-orbix-accent/30 text-orbix-accent hover:bg-orbix-accent hover:text-space-900 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                }`}
            >
              {bot.task.includes('Manual') ? <><AlertTriangle size={16} className="animate-pulse" /> OVERRIDE ACTIVE</> : 'MANUAL OVERRIDE'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotControl;
