import React, { useState } from 'react';

const ChatFirstLayout = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi! Let’s assess your COVID-19 risk. What symptoms are you experiencing?' },
  ]);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [userData, setUserData] = useState({ symptoms: '', travel: '', vaccine: '' });

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    let nextMessages = [];
    let newStep = step + 1;
    const updatedUserData = { ...userData };

    if (step === 0) {
      updatedUserData.symptoms = input;
      nextMessages.push({ sender: 'bot', text: 'Have you traveled recently or been in contact with a COVID-positive person?' });
    } else if (step === 1) {
      updatedUserData.travel = input;
      nextMessages.push({ sender: 'bot', text: 'Have you been vaccinated (fully/partially)?' });
    } else if (step === 2) {
      updatedUserData.vaccine = input;
      const risk = calculateRisk(updatedUserData);
      nextMessages.push({ sender: 'bot', text: `📊 Your assessed COVID-19 risk is: **${risk}**` });
      nextMessages.push({ sender: 'bot', text: '🏥 Here are nearby test centers: https://findmytestingcenter.in' });
      nextMessages.push({ sender: 'bot', text: '❓ Need help? Ask me any COVID-related question!' });
    } else {
      nextMessages.push({ sender: 'bot', text: '💡 I can help with COVID-related queries. For example, ask about symptoms, recovery, or vaccine info.' });
    }

    setUserData(updatedUserData);
    setMessages([...newMessages, ...nextMessages]);
    setStep(newStep);
    setInput('');
  };

  const calculateRisk = ({ symptoms, travel, vaccine }) => {
    const s = symptoms.toLowerCase();
    const t = travel.toLowerCase();
    const v = vaccine.toLowerCase();

    if (s.includes('fever') && s.includes('cough')) return 'High';
    if (t.includes('yes') && !v.includes('fully')) return 'Medium';
    if (!s || s === 'none') return 'Low';
    return 'Medium';
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#e2e8f0'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '250px',
        background: '#0f172a',
        color: 'white',
        padding: '2rem 1rem',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📌 Quick Links</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
          <li><a href="https://www.mohfw.gov.in/" target="_blank" rel="noreferrer" style={linkStyle}>🧾 Government Policies</a></li>
          <li><a href="https://www.covid19india.org/" target="_blank" rel="noreferrer" style={linkStyle}>📍 Local COVID Stats</a></li>
          <li><a href="https://dmnorthwest.delhi.gov.in/list-of-covid-19-testing-centers/" target="_blank" rel="noreferrer" style={linkStyle}>🏥 Nearby Test Centers</a></li>
        </ul>
      </aside>

      {/* Chat Area */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>🧠 AI COVID Chatbot</h1>
        <div style={{
          background: 'white',
          padding: '1rem',
          borderRadius: '12px',
          height: '65vh',
          overflowY: 'auto',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          marginBottom: '1rem'
        }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{
              textAlign: msg.sender === 'bot' ? 'left' : 'right',
              margin: '0.6rem 0',
              padding: '0.5rem 1rem',
              background: msg.sender === 'bot' ? '#f8fafc' : '#cbd5e1',
              borderRadius: '10px',
              maxWidth: '70%',
              alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end'
            }}>
              <strong>{msg.sender === 'bot' ? '🤖 Bot' : '🙋 You'}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem'
            }}
          />
          <button onClick={handleSend} style={{
            marginLeft: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  display: 'block'
};

export default ChatFirstLayout;
