// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRole, children }) => {
  const storedRole = localStorage.getItem('role');

  if (!storedRole) {
    return <Navigate to="/" replace />;
  }

  if (storedRole !== allowedRole) {
    return <Navigate to="/select-role" replace />;
  }

  return children;
};

export default ProtectedRoute;
