import Cookies from 'js-cookie';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken_] = useState(Cookies.get('token'));

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const Logout = useCallback(() => {
    setToken_('');
    navigate('/signin');
  }, [navigate]);

  useEffect(() => {
    if (token) {
      Cookies.set('token', token, { secure: true, expires: 7 });
    } else {
      Cookies.remove('token');
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      Logout
    }),
    [Logout, token]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
