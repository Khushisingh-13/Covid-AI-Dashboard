// CommunityMapSection.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const dummyData = [
  { date: 'Jul 01', cases: 120 },
  { date: 'Jul 08', cases: 150 },
  { date: 'Jul 15', cases: 180 },
  { date: 'Jul 22', cases: 240 },
  { date: 'Jul 29', cases: 310 },
];

const styles = {
  section: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  mapPlaceholder: {
    width: '100%',
    height: '300px',
    backgroundColor: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px'
  }
};

const CommunityMapSection = () => {
  return (
    <div>
      {/* Community Transmission Trend */}
      <div style={styles.section}>
        <h3>Community Transmission Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dummyData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cases" stroke="#0ea5e9" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>


    </div>
  );
};

export default CommunityMapSection;
