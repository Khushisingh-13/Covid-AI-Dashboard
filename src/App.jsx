// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RoleSelector from './components/user/RoleSelector';
import AdminDashboard from './components/admin/AdminDashboard';
import User from './components/user/User';
import ProtectedRoute from './components/ProtectedRoute';
import EmergencyContact from './components/user/EmergencyContact';
import Doctorpage from './components/doctor/Doctorpage';

const App = () => {
  // Check if user is already logged in
  const role = localStorage.getItem('role');

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        
        
        <Route 
          path="/" 
          element={
            role ? <Navigate to="/select-role" /> : <Login />
          } 
        />
        <Route path="/select-role" element={<RoleSelector />} />

        {/* Protected Routes by Role */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRole="user">
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRole="doctor">
              <Doctorpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emergency"
          element={
            <ProtectedRoute allowedRole="user">
              <EmergencyContact />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
