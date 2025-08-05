import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { area: 'Sector 1', cases: 12 },
  { area: 'Sector 2', cases: 8 },
  { area: 'Sector 3', cases: 18 },
  { area: 'Sector 4', cases: 5 },
  { area: 'Sector 5', cases: 20 },
];

const LocalTransmissionChart = () => {
  return (
    <div style={{ width: '100%', height: 400, background: '#fff', padding: '1rem', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>📍 Local COVID Transmission</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="area" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cases" fill="#8884d8" name="Active Cases" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LocalTransmissionChart;
