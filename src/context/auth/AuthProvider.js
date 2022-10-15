/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import AuthContext from './AuthContext';
import setAuthTokenAxios from '../../utils/setAuthToken';
import axiosConfig from '../../config/axios';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (userData) => {
    try {
      const { data } = await axiosConfig.post('auth/login', userData);
      // eslint-disable-next-line no-shadow
      const { user, token } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setToken(token);
      setUser(user);
      setAuthTokenAxios(token);
      navigate('/menu');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  const handleRegister = async (userData) => {
    try {
      await axiosConfig.post('auth/register', userData);
    } catch (error) {
      console.error(error);
    }
  };

  const loadDataFromStorage = () => {
    localStorage.getItem('token') && setToken(localStorage.getItem('token'));
    localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')));
  };

  const checkExpiredToken = () => {
    if (token !== null) {
      const decodedToken = jwt_decode(token);
      const currentDate = new Date();
      ((decodedToken.exp * 1000) < currentDate.getTime()) && handleLogout();
    }
  };

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  useEffect(() => {
    checkExpiredToken();
    setAuthTokenAxios(token);
  }, [location]);

  const value = {
    user,
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
