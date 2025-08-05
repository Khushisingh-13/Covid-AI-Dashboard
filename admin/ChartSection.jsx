// components/ChartSection.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const data = [
  { date: 'Jul 1', predicted: 120, actual: 110 },
  { date: 'Jul 2', predicted: 130, actual: 125 },
  { date: 'Jul 3', predicted: 140, actual: 138 },
];

const ChartSection = () => (
  <>
    <style>{`
      .card {
        background: #ffffff;
        padding: 2rem;
        margin-bottom: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        max-width: 700px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      }

      .card h3 {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: #333;
        font-family: 'Segoe UI', sans-serif;
      }

      @media screen and (max-width: 768px) {
        .card {
          padding: 1rem;
          max-width: 100%;
        }
      }
    `}</style>

    <div className="card">
      <h3>📈 Predicted vs Actual Cases</h3>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#f0f0f0" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="predicted" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="actual" stroke="#82ca9d" strokeWidth={3} />
      </LineChart>
    </div>
  </>
);

export default ChartSection;
