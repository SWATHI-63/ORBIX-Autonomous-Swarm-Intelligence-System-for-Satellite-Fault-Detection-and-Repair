import React from 'react';
import { Info, Network, Settings } from 'lucide-react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto min-h-[85vh] text-gray-300">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orbix-accent to-purple-500 mb-4">
          About ORBIX
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orbix-accent to-purple-500 rounded-full"></div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-space-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-orbix-accent/30 transition-all duration-300 shadow-xl group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orbix-accent/10 rounded-xl group-hover:bg-orbix-accent/20 transition-colors text-orbix-accent">
              <Info size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">
              What is ORBIX?
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-400 pl-14">
            <strong className="text-orbix-accent">ORBIX</strong> stands for <em className="text-gray-300">Orbital Repair Bot Intelligence eXchange</em>. It is a conceptual system designed 
            for the future of low-earth orbit infrastructure, focusing on automated self-healing for satellite constellations.
          </p>
        </div>

        <div className="bg-space-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-green-400/30 transition-all duration-300 shadow-xl group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-400/10 rounded-xl group-hover:bg-green-400/20 transition-colors text-green-400">
              <Network size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Swarm Intelligence
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-400 pl-14">
            Swarm Intelligence involves dividing large, complex problems into smaller tasks handled by a network of simple, 
            coordinate-driven bots. Like bees or ants, these bots communicate their status, share energy, and collaborate 
            to resolve critical faults without human intervention.
          </p>
        </div>

        <div className="bg-space-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-orange-400/30 transition-all duration-300 shadow-xl group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-400/10 rounded-xl group-hover:bg-orange-400/20 transition-colors text-orange-400">
              <Settings size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Project Scope & Contribution
            </h3>
          </div>
          <div className="pl-14">
            <p className="text-lg leading-relaxed text-gray-400 mb-4">
              This interface serves as the primary control center for managing the ORBIX swarm. It features:
            </p>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span> Real-time telemetry and fault monitoring.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span> System analytics and repair efficiency plotting.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span> Direct manual override protocols for individual autonomous bots.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
