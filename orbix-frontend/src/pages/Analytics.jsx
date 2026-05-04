import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', repairTime: 4.5, efficiency: 88, faultsResolved: 12 },
  { name: 'Tue', repairTime: 3.2, efficiency: 92, faultsResolved: 18 },
  { name: 'Wed', repairTime: 2.8, efficiency: 95, faultsResolved: 25 },
  { name: 'Thu', repairTime: 3.9, efficiency: 89, faultsResolved: 14 },
  { name: 'Fri', repairTime: 2.1, efficiency: 98, faultsResolved: 30 },
  { name: 'Sat', repairTime: 2.5, efficiency: 96, faultsResolved: 22 },
  { name: 'Sun', repairTime: 1.8, efficiency: 99, faultsResolved: 35 },
];

const ChartContainer = ({ title, titleColor, renderChart }) => (
  <div className="bg-space-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-lg group">
    <h3 className={`text-xl font-bold tracking-wide mb-6 ${titleColor}`}>{title}</h3>
    <div className="w-full h-72 opacity-90 group-hover:opacity-100 transition-opacity">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto min-h-[85vh]">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
          📈 System Analytics
        </h2>
      </div>
      <p className="text-gray-400 mb-10 text-lg border-l-2 border-orange-500 pl-4 bg-orange-900/10 py-2">
        Real-time performance metrics, historical repair times, and overall swarm efficiency.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartContainer 
          title="Average Repair Time (hrs)" 
          titleColor="text-orange-400"
          renderChart={() => (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <YAxis stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(17,24,39,0.9)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,165,0,0.2)', borderRadius: '12px', color: '#fff' }} 
                itemStyle={{ color: '#fb923c', fontWeight: 'bold' }}
              />
              <Line type="monotone" dataKey="repairTime" stroke="#fb923c" strokeWidth={4} dot={{ r: 6, fill: '#1f2937', strokeWidth: 2, stroke: '#fb923c' }} activeDot={{ r: 8, strokeWidth: 0, fill: '#fb923c' }} />
            </LineChart>
          )}
        />

        <ChartContainer 
          title="Faults Resolved Successfully" 
          titleColor="text-green-400"
          renderChart={() => (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorFaults" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <YAxis stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(17,24,39,0.9)', backdropFilter: 'blur(8px)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px' }}
                itemStyle={{ color: '#34d399', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="faultsResolved" stroke="#34d399" strokeWidth={3} fillOpacity={1} fill="url(#colorFaults)" />
            </AreaChart>
          )}
        />

        <div className="lg:col-span-2">
          <ChartContainer 
            title="Swarm Network Efficiency (%)" 
            titleColor="text-orbix-accent"
            renderChart={() => (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
                <YAxis domain={['dataMin - 5', 100]} stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(17,24,39,0.9)', backdropFilter: 'blur(8px)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '12px' }}
                  itemStyle={{ color: '#00e5ff', fontWeight: 'bold' }}
                />
                <Line type="monotone" dataKey="efficiency" stroke="#00e5ff" strokeWidth={4} dot={{ r: 6, fill: '#1f2937', strokeWidth: 2, stroke: '#00e5ff' }} activeDot={{ r: 8, strokeWidth: 0, fill: '#00e5ff', filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.8))' }} />
              </LineChart>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
