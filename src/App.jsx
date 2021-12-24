import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StaffDashboard from './pages/StaffDashboard';
import ChiefDashboard from './pages/ChiefDashboard';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chief' element={<ChiefDashboard />} />
        <Route path='/dashboard' element={<StaffDashboard />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <div>
            <AppRoutes />
          </div>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
