import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const ProtectedRoute = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  return (
    (isAuthenticated === false ? <Navigate to='/' replace /> : <Outlet />)
  );
};

export default ProtectedRoute;