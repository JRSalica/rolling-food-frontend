import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthContext from './AuthContext';
import useNotification from '../../hooks/useNotification';
import setAuthTokenAxios from '../../utils/setAuthToken';
import axiosConfig from '../../config/axios';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { showSuccess, showError } = useNotification();

  const handleLogin = async (userData) => {
    try {
      const { data: loginResponse } = await axiosConfig.post('auth/login', userData);
      const { user: resUser, token: resToken } = loginResponse;
      localStorage.setItem('token', resToken);
      localStorage.setItem('user', JSON.stringify(resUser));
      setUserToken(resToken);
      setUser(resUser);
      showSuccess(loginResponse.message);
      navigate('/menu');
    } catch (error) {
      showError(error.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserToken(null);
    setUser(null);
    navigate('/');
  };

  const handleRegister = async (userData) => {
    try {
      const { data: registerResponse } = await axiosConfig.post('auth/register', userData);
      showSuccess(registerResponse.message);
    } catch (error) {
      showError(error.response.data.message);
    }
  };

  const loadDataFromStorage = () => {
    if (localStorage.getItem('token')) setUserToken(localStorage.getItem('token'));
    if (localStorage.getItem('user')) setUser(JSON.parse(localStorage.getItem('user')));
  };

  const checkExpiredToken = () => {
    if (userToken !== null) {
      const decodedToken = jwtDecode(userToken);
      const currentDate = new Date();
      if ((decodedToken.exp * 1000) < currentDate.getTime()) handleLogout();
    }
  };

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  useEffect(() => {
    setAuthTokenAxios(userToken);
  }, [user]);

  useEffect(() => {
    checkExpiredToken();
    // setAuthTokenAxios(userToken);
  }, [location]);

  const value = {
    user,
    token: userToken,
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
