import React from 'react';

const RiskCategory = ({ userData }) => {
  const data = userData || {
    symptoms: ['fever', 'cough', 'fatigue'],
    contact: true,
    travel: false,
    locationRisk: 'High',
    comorbid: true,
  };

  const calculateRiskScore = (data) => {
    let score = 0;
    if (data.symptoms.length >= 3) score += 3;
    if (data.contact) score += 2;
    if (data.travel) score += 1;
    if (data.locationRisk === 'High') score += 2;
    if (data.comorbid) score += 2;

    if (score >= 7) return 'Critical';
    else if (score >= 5) return 'High';
    else if (score >= 3) return 'Moderate';
    else return 'Low';
  };

  const risk = calculateRiskScore(data);

  const getRiskDetails = (risk) => {
    switch (risk) {
      case 'Low':
        return {
          bgColor: '#e6fffa',
          borderColor: '#38b2ac',
          emoji: '🟢',
          message: 'You are currently at low risk. Maintain hygiene and stay safe.',
        };
      case 'Moderate':
        return {
          bgColor: '#fffbea',
          borderColor: '#ecc94b',
          emoji: '🟡',
          message: 'You are at moderate risk. Monitor symptoms and avoid public places.',
        };
      case 'High':
        return {
          bgColor: '#fff5f5',
          borderColor: '#f56565',
          emoji: '🟠',
          message: 'You are at high risk. Please isolate and consult a doctor if needed.',
        };
      case 'Critical':
        return {
          bgColor: '#fde2e2',
          borderColor: '#c53030',
          emoji: '🔴',
          message: 'Critical risk detected. Seek immediate medical attention.',
        };
      default:
        return {};
    }
  };

  const { bgColor, borderColor, emoji, message } = getRiskDetails(risk);

  const cardStyle = {
    backgroundColor: bgColor,
    borderLeft: `6px solid ${borderColor}`,
    maxWidth: '600px',
    margin: '20px auto',
    padding: '24px 30px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#2d3748',
  };

  const buttonStyle = {
    padding: '10px 16px',
    backgroundColor: '#2b6cb0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    marginTop: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2c5282',
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
        {emoji} {risk} Risk
      </h2>
      <p style={{ fontSize: '1rem', marginBottom: '20px' }}>{message}</p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        View Safety Guidelines
      </button>
    </div>
  );
};

export default RiskCategory;
