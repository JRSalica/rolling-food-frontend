import { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

const BASE_URL = 'http://localhost:3400/api/'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token') || null,
    user: null,
    isAuthenticated: false,
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async user => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
      const res = await axios.post(BASE_URL + 'auth/login', user, config);
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data.data,
      });
      
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
