import React, { useState } from 'react';
import CommunityMapSection from './user/CommunityTrendChart';
import LocalTransmissionChart from './user/LocalTransmissionChart';
const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '15px 20px',
  marginBottom: '1rem',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  borderLeft: '4px solid #1a73e8',
};

// Add in any Dashboard/Header component


const linkStyle = {
  color: '#1a73e8',
  textDecoration: 'none',
  fontWeight: '500',
};
const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: '2rem',
    backgroundColor: '#f9fafb',
  },
  hero: {
    backgroundColor: '#e0f2fe',
    padding: '2rem',
    borderRadius: '10px',
    marginBottom: '2rem',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.3rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.6rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#0ea5e9',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  cardStyle: {
  backgroundColor: '#f9f9f9',
  padding: '15px 20px',
  marginBottom: '1rem',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  borderLeft: '4px solid #1a73e8',
  },
  linkStyle : {
  color: '#1a73e8',
  textDecoration: 'none',
  fontWeight: '500',
},

  
  section: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '1.5rem',
    marginBottom: '2rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  riskText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  suggestion: {
    marginTop: '1rem',
    color: '#334155',
  },
  mapPlaceholder: {
    height: '300px',
    backgroundColor: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    color: '#475569',
    borderRadius: '8px',
  },
};

const RiskPredictor = () => {
  const [formData, setFormData] = useState({
    city: '',
    symptoms: '',
    travel: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleRiskCheck = () => {
  const { city, symptoms, travel } = formData;

  // Basic validation
  if (!city.trim() || !symptoms.trim() || !travel.trim()) {
    alert('Please fill in all fields before checking your risk.');
    return;
  }

  // Simulated logic
  const riskScore = Math.random();
  const level =
    riskScore < 0.4 ? 'Low' : riskScore < 0.75 ? 'Medium' : 'High';

  setResult({
    level,
    message:
      level === 'High'
        ? 'Get tested and isolate immediately.'
        : level === 'Medium'
        ? 'Monitor symptoms and avoid crowded areas.'
        : 'Stay safe, keep following guidelines.',
  });
};



  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h2>COVID Risk Checkup</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>City</label>
          <input
            name="city"
            type="text"
            placeholder="Enter your city"
            style={styles.input}
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Symptoms</label>
          <input
            name="symptoms"
            type="text"
            placeholder="Fever, cough, etc."
            style={styles.input}
            onChange={handleChange}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Recent Travel History</label>
          <input
            name="travel"
            type="text"
            placeholder="E.g. Delhi, Mumbai"
            style={styles.input}
            onChange={handleChange}
          />
        </div>
        <button style={styles.button} onClick={handleRiskCheck}>
          Check My Risk
        </button>
      </div>

      {/* Prediction Result */}
      {result && (
        <div style={styles.section}>
          <h3>Prediction Result</h3>
          <p style={styles.riskText}>Risk Level: {result.level}</p>
          <p style={styles.suggestion}>{result.message}</p>
        </div>
      )}

      {/* Graph Section */}
      <div style={styles.section}>
        <CommunityMapSection />

      </div>

      {/* Map Section */}
      <div style={styles.section}>
        <LocalTransmissionChart />

      </div>

      <div style={styles.section}>
  <h3 style={{ fontSize: '1.7rem', color: '#222', marginBottom: '1.5rem' }}>
    🧾 WHO Guidelines & Latest COVID Updates
  </h3>

  <div style={cardStyle}>
    📰 <strong>Stay Informed:</strong><br />
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
       target="_blank"
       rel="noopener noreferrer"
       style={linkStyle}>
      WHO Official COVID-19 News & Updates
    </a>
  </div>

  <div style={cardStyle}>
    💉 <strong>Vaccination:</strong><br />
    <a href="https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-(covid-19)-vaccines"
       target="_blank"
       rel="noopener noreferrer"
       style={linkStyle}>
      Recommended every 6 months (WHO Guidelines)
    </a>
  </div>

  <div style={cardStyle}>
    📍 <strong>Travel Advisory:</strong><br />
    <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html"
       target="_blank"
       rel="noopener noreferrer"
       style={linkStyle}>
      Avoid travel to high-risk outbreak zones
    </a>
  </div>

  <div style={cardStyle}>
    🧼 <strong>Hygiene Practices:</strong><br />
    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
       target="_blank"
       rel="noopener noreferrer"
       style={linkStyle}>
      Wash hands, wear masks, and stay safe
    </a>
  </div>
</div>


    </div>
  );
};

export default RiskPredictor;
