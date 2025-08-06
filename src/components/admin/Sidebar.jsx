// components/Sidebar.jsx
import React from 'react';
import OutbreakMap from './OutbreakMap';
import RiskCategory from './RiskCategory';

const Sidebar = ({ onSelect }) => (
  <>
    <style>{`
      .sidebar {
        width: 240px;
        height: 100vh;
        background: linear-gradient(180deg, #004466, #0077aa);
        color: #fff;
        padding: 2rem 1.5rem;
        box-shadow: 2px 0 12px rgba(0, 0, 0, 0.15);
        font-family: 'Segoe UI', sans-serif;
        position: fixed;
        top: 0;
        left: 0;
      }

      .sidebar h3 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        color: #ffffff;
        text-shadow: 1px 1px 2px #000;
      }

      .sidebar ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .sidebar li {
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s, transform 0.2s;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
      }

      .sidebar li:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
      }
    `}</style>

    <aside className="sidebar">
      <h3>📊 Admin Panel</h3>
    <ul>
      <li onClick={() => onSelect('dashboard')}>📈 Dashboard</li>
      <li onClick={() => onSelect('input')}>📝 Prediction Input</li>
      <li onClick={() => onSelect('map')}>🗺️ Outbreak Map</li>
      <li onClick={() => onSelect('categories')}>⚠️ Risk Categories</li>
      <li onClick={() => onSelect('logs')}>📄 Reports / Logs</li>
    </ul>
    </aside>
  </>
);

export default Sidebar;
