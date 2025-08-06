import React, { useState } from 'react';
import RiskPredictor from '../RiskPredictor';
import EmergencyContact from './EmergencyContact';
import ChatBotLayout from './ChatBotLayout'; // ✅ Make sure this file exists
import Appointment from '../doctor/Appointment';


const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', sans-serif",
  },
  sidebar: {
    backgroundColor: '#1e293b',
    width: '240px',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  sidebarHeader: {
    color: '#ffffffff',
    fontSize: '1.5rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
    borderBottom: '1px solid #334155',
    paddingBottom: '1rem',
  },
  button: {
    backgroundColor: '#cbd5e1',
    border: 'none',
    padding: '0.7rem 1rem',
    textAlign: 'left',
    fontSize: '1rem',
    color: '#000000',
    cursor: 'pointer',
    transition: 'background 0.2s',
    borderRadius: '5px',
  },
  buttonHover: {
    backgroundColor: '#94a3b8',
  },
  activeButton: {
    backgroundColor: '#64748b',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    padding: '2rem',
    backgroundColor: '#c6cdd6ff',
  },
};


const User = () => {
  const [activeTab, setActiveTab] = useState('checkup');
  const [hovered, setHovered] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'checkup':
        return (
          <div>
            <h2>COVID Risk Checkup</h2>
            <RiskPredictor />
          </div>
        );
      case 'history':
        return (
          <div>
            <h2>My Predictions History</h2>
            <p>Display user's prediction history here.</p>
          </div>
        );
      case 'contacts':
        return (
          <div>
            <h2>Emergency Contacts</h2>
            <EmergencyContact />
          </div>
        );
      case 'chatbot':
        return (
          <div>
            <h2>AI Chatbot + COVID Risk Prediction</h2>
            <ChatBotLayout />
          </div>
        );

        case 'appointment':
  return (
    <div>
      <h2>Book Appointment</h2>
      <Appointment />
    </div>
  );

        
      default:
        return null;
    }
  };

  const renderButton = (tab, label) => (
    <button
      onClick={() => setActiveTab(tab)}
      onMouseEnter={() => setHovered(tab)}
      onMouseLeave={() => setHovered(null)}
      style={{
        ...styles.button,
        ...(hovered === tab ? styles.buttonHover : {}),
        ...(activeTab === tab ? styles.activeButton : {}),
      }}
    >
      {label}
    </button>
  );

  

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>User Dashboard</div>
        {renderButton('appointment', '📅 Book Appointment')}

        {renderButton('checkup', '🧪 COVID Risk Checkup')}
        {renderButton('history', '📜 My Predictions History')}
        {renderButton('contacts', '🚨 Emergency Contacts')}
        {renderButton('chatbot', '🤖 AI COVID Chatbot')} {/* ✅ Added here */}

      </aside>
      <main style={styles.content}>{renderContent()}</main>
    </div>
  );
};

export default User;
