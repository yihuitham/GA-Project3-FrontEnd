import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // const token = localStorage.getItem('token');
  // const userInfo = localStorage.getItem('userInfo');
  // const expiresAt = localStorage.getItem('expiresAt');

  const [authState, setAuthState] = useState({
    // token,
    // expiresAt,
    // userInfo: userInfo ? JSON.parse(userInfo) : {},
  });

  // const setAuthInfo = () => {
  //   const token = localStorage.setItem('token', token);
  //   const userInfo = localStorage.setItem('userInfo', JSON.stringify(userInfo));
  //   const expiresAt = localStorage.setItem('expiresAt', expiresAt);

  //   setAuthState({
  //     token,
  //     userInfo,
  //     expiresAt,
  //   });
  // };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({
      token: null,
      expiresAt: null,
      userInfo: {},
    });
    navigate('/');
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const isAdmin = () => {
    return authState.userInfo.role === 'Chief';
  };

  // console.log('this is authcontext', authState);

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        // : (authInfo) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
