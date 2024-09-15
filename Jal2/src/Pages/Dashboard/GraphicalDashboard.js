import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import './Dashboard.css'; // For styling
import Map from './Map';
import { Topbar } from '../Topbar/Topbar';
// import { Navbar } from '../../components/Navbar/Navbar';

const GraphicalDashboard = () => {
  // Sample Data for charts
  const data = [
    { name: 'State A', waterUsage: 400, waterSupply: 300 },
    { name: 'State B', waterUsage: 300, waterSupply: 200 },
    { name: 'State C', waterUsage: 500, waterSupply: 400 },
    { name: 'State D', waterUsage: 200, waterSupply: 150 },
  ];

  return (
    <><Topbar /><div className="dashboard-container">
      <Map />
      <h1>State Water Management Dashboard</h1>

      <div className="cards-container">
        <div className="card">Total Water Usage: 1400</div>
        <div className="card">Total Water Supply: 1050</div>
        <div className="card">Average Water Usage per State: 350</div>
      </div>

      <div className="chart-container">
        <BarChart width={1000} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="waterUsage" fill="#8884d8" />
          <Bar dataKey="waterSupply" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className="chart-container">
        <LineChart width={1000} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="waterUsage" stroke="#8884d8" />
          <Line type="monotone" dataKey="waterSupply" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div></>
  );
};

export default GraphicalDashboard;
