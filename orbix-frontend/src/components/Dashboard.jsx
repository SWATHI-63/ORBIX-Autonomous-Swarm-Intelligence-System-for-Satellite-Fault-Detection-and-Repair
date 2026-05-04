import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const swarmData = [
    { id: 'SAT-Alpha', status: 'Healthy', battery: '95%', ping: '42ms' },
    { id: 'SAT-Beta', status: 'Warning', battery: '45%', ping: '120ms' },
    { id: 'SAT-Gamma', status: 'Healthy', battery: '88%', ping: '45ms' },
    { id: 'SAT-Delta', status: 'Critical', battery: '12%', ping: '---' },
  ];

  return (
    <div className="dashboard-container">
      <h2>Swarm Intelligence Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Satellites</h3>
          <p className="stat-value">24</p>
        </div>
        <div className="stat-card">
          <h3>Active Faults</h3>
          <p className="stat-value error">2</p>
        </div>
        <div className="stat-card">
          <h3>Swarm Cohesion</h3>
          <p className="stat-value success">98%</p>
        </div>
        <div className="stat-card">
          <h3>Network Latency</h3>
          <p className="stat-value warning">86ms</p>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Live Satellite Feed</h3>
        <table className="activity-table">
          <thead>
            <tr>
              <th>Satellite ID</th>
              <th>Status</th>
              <th>Battery Limit</th>
              <th>Latency</th>
            </tr>
          </thead>
          <tbody>
            {swarmData.map((sat) => (
              <tr key={sat.id}>
                <td>{sat.id}</td>
                <td>
                  <span className={`status-badge ${sat.status.toLowerCase()}`}>
                    {sat.status}
                  </span>
                </td>
                <td>{sat.battery}</td>
                <td>{sat.ping}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;