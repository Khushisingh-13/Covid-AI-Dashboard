// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');     // 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in

useEffect(() => {
  const storedRole = localStorage.getItem('role');
  if (storedRole === 'admin') {
    navigate('/admin');
  } else if (storedRole === 'user') {
    navigate('/user');
  } else if (storedRole === 'doctor') {
    navigate('/doctor');
  } else {
    localStorage.removeItem('role'); // ensure no invalid role stays
  }
}, [navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Normally, you'd verify credentials with a backend here
      localStorage.setItem('user', email); // optional
      navigate('/select-role');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>COVID AI Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
