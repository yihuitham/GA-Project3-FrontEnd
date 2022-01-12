import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Login from './pages/Login';
import StaffDashboard from './pages/StaffDashboard';
import ChiefDashboard from './pages/ChiefDashboard';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  return authContext.isAuthenticated() ? <Outlet /> : <Navigate to='/' />;
};

const AdminRoute = () => {
  const authContext = useContext(AuthContext);
  return authContext.isAuthenticated() && authContext.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to='/' />
  );
};

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/chief' element={<PrivateRoute />}>
          <Route exact path='/chief' element={<ChiefDashboard />} />
        </Route>
        <Route exact path='/dashboard' element={<AdminRoute />}>
          <Route exact path='/dashboard' element={<StaffDashboard />} />
        </Route>
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
