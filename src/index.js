import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthState from './context/auth/AuthState';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthState>
  </React.StrictMode>
);
