// src/components/EmergencyContact.jsx
import React from 'react';

const EmergencyContact = () => {
  const emergencyData = [
    {
      title: 'COVID Helpline (India)',
      number: '1075',
      description: 'National COVID Helpline Number',
    },
    {
      title: 'Health Ministry Helpline',
      number: '01123978046',
      description: 'Ministry of Health and Family Welfare, India',
    },
    {
      title: 'Emergency Ambulance',
      number: '102',
      description: 'Ambulance Service (India)',
    },
    {
      title: 'Police Emergency',
      number: '100',
      description: 'Call Police',
    },
  ];

  const openMaps = () => {
    window.open('https://www.google.com/maps/search/hospitals+near+me', '_blank');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Emergency Contacts</h2>

      {emergencyData.map((item, index) => (
        <div key={index} style={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={`tel:${item.number}`} style={styles.button}>
            📞 Call {item.number}
          </a>
        </div>
      ))}

      <button onClick={openMaps} style={styles.secondaryBtn}>
        🏥 Find Nearby Hospitals
      </button>

      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        In case of emergency, don’t hesitate to call the above numbers or visit the nearest hospital.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '30px',
    color: '#333',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#e63946',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '8px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
  },
  secondaryBtn: {
    backgroundColor: '#2a9d8f',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
    border: 'none',
  },
};

export default EmergencyContact;
