import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { token } = useAuth();
  return (
    (token === null ? <Navigate to='/' replace /> : <Outlet />)
  );
};

export default ProtectedRoute;
