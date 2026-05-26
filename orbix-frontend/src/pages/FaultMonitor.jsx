import React, { useState, useEffect } from 'react';

const FaultMonitor = () => {
  const [faultData, setFaultData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/faults')
      .then(res => res.json())
      .then(data => setFaultData(data))
      .catch(err => console.error("Failed to fetch faults", err));
  }, []);

  const getSeverityStyles = (severity) => {
  switch(severity) {
    case 'Critical': return 'text-red-400 bg-red-400/10 border-red-400/20';
    case 'High': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    case 'Moderate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    default: return 'text-green-400 bg-green-400/10 border-green-400/20';
  }
};

const getStatusStyles = (status) => {
  switch(status) {
    case 'Resolved': return 'text-green-400 bg-green-400/10 border border-green-400/30';
    case 'Unresolved': return 'text-red-400 bg-red-400/10 border border-red-400/30 animate-pulse';
    case 'In Progress': return 'text-orbix-accent bg-orbix-accent/10 border border-orbix-accent/30';
    default: return 'text-blue-400 bg-blue-400/10 border border-blue-400/30';
  }
};

const FaultMonitor = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto min-h-[85vh]">
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
        <span className="text-3xl md:text-4xl">⚠️</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
          Fault Monitor
        </h2>
      </div>
      <p className="text-gray-400 mb-6 md:mb-10 text-sm md:text-lg border-l-2 border-red-500 pl-4 bg-red-900/10 py-2">
        Live tracking of detected satellite anomalies, severity levels, and automated swarm dispatch status.
      </p>

      {/* Desktop/Tablet Table layout */}
      <div className="hidden md:block bg-space-800 rounded-2xl border border-white/5 overflow-hidden shadow-2xl backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-space-900/50 uppercase text-xs tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-5 font-medium">Fault ID</th>
              <th className="px-6 py-5 font-medium">Target Satellite</th>
              <th className="px-6 py-5 font-medium">Severity</th>
              <th className="px-6 py-5 font-medium">Time Detected</th>
              <th className="px-6 py-5 font-medium">Resolution Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {faultData.map((fault, index) => (
              <tr key={index} className="hover:bg-white/[0.02] transition-colors duration-200">
                <td className="px-6 py-5 font-mono text-orbix-accent text-sm">{fault.id}</td>
                <td className="px-6 py-5 text-gray-200 font-medium">{fault.target}</td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityStyles(fault.severity)}`}>
                    {fault.severity}
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-400 font-mono text-sm">{fault.time}</td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${getStatusStyles(fault.status)}`}>
                    {fault.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {faultData.map((fault, index) => (
          <div key={index} className="bg-space-800 p-5 rounded-xl border border-white/5 shadow-lg relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${fault.severity === 'Critical' ? 'bg-red-400' : fault.severity === 'High' ? 'bg-orange-400' : fault.severity === 'Moderate' ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
            
            <div className="flex justify-between items-center mb-3 pl-2">
              <span className="font-mono text-orbix-accent font-bold">{fault.id}</span>
              <span className="text-gray-400 text-xs font-mono">{fault.time}</span>
            </div>
            
            <div className="mb-4 pl-2">
              <span className="text-gray-500 text-xs uppercase block mb-1">Target</span>
              <span className="text-lg font-bold text-gray-200">{fault.target}</span>
            </div>
            
            <div className="flex justify-between items-end pl-2">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getSeverityStyles(fault.severity)}`}>
                {fault.severity}
              </span>
              <span className={`px-3 py-1 rounded-full text-[10px] font-medium tracking-wide ${getStatusStyles(fault.status)}`}>
                {fault.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FaultMonitor;
