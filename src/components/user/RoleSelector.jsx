import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../../context/RoleContext';

const RoleSelector = () => {
  const { setRole } = useRole();
  const navigate = useNavigate();

  const chooseRole = (role) => {
    setRole(role);
    navigate(`/${role}`);
  };

  const styles = {
    container: {
      height: '100vh',
      background: 'linear-gradient(to right, #00b4db, #0083b0)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Segoe UI', sans-serif",
      padding: '20px',
    },
    box: {
      backgroundColor: '#fff',
      padding: '40px 30px',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      maxWidth: '400px',
      width: '100%',
      animation: 'fadeIn 0.6s ease-in-out',
    },
    heading: {
      fontSize: '26px',
      marginBottom: '25px',
      color: '#222',
      fontWeight: '600',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    button: {
      backgroundColor: '#0083b0',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Select Your Role</h2>
        <div style={styles.buttons}>
          {['admin', 'user', 'doctor'].map((role) => (
            <button
              key={role}
              style={styles.button}
              onClick={() => chooseRole(role)}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = '#005f73')
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = '#0083b0')
              }
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
