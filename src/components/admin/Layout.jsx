// components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '290px', padding: '8rem', flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
