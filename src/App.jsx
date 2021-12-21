import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StaffDashboard from './pages/StaffDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<StaffDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
