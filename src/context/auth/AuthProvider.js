import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  
  const handleLogin = async ({ email, password }) => {
    const res = await axios.post('http://localhost:3400/api/auth/login', 
    { 
      email, 
      password
    });
    let user = res.data.user;
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(user));
    setToken(res.data.token);
    setUser(user);
    navigate('/home');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/');
  }

  const handleRegister = async ({ fullName, email, password }) => {
    try {
      await axios.post('http://localhost:3400/api/auth/register', 
      {
        fullName,
        email,
        password
      });
    } catch (error) {
      console.log(error);
    }
  }

  const loadDataFromStorage = () => {
    setToken(localStorage.getItem('token'));
    setUser(JSON.parse(localStorage.getItem('user')));
  };

  const checkExpiredToken = () => {
    if(token !== null){
      let decodedToken = jwt_decode(token);
      let currentDate = new Date();
      console.log('estoy intentando desloguear');
      if ((decodedToken.exp * 1000) < currentDate.getTime()) {
        console.log('deberia deslogearme aca');
        handleLogout();  
      } 
    }
  }

  useEffect(() => {
    checkExpiredToken();
    loadDataFromStorage();
  }, []);

  const value = {
    user,
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
  };
  
  return (
    <AuthContext.Provider value = {value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;