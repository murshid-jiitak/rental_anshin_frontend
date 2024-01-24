import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Invitation from './pages/Invitation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path='/invitation' element={Invitation}/>
    </Routes>
  );
}

export default App;