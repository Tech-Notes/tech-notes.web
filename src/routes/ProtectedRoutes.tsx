import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../provider/AuthProvider';

const ProtectedRoutes = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
