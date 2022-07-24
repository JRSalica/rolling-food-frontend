import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PageFooter from './components/Footer/Footer';
import { Home } from './pages/Home'
import { AdminPanel } from './pages/AdminPanel/';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AuthContext from './context/auth/AuthContext';
import './App.css';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const { isAuthenticated } = useContext(AuthContext); 
  return (
    <>
      <Header />
      <Routes>
        {isAuthenticated !== null && ( <Route path='/' element={<Landing />} /> ) }
        {isAuthenticated !== null && ( <Route path='/login' element={<Login />} /> ) }
        {isAuthenticated !== null && ( <Route path='/*' element={<NotFound />} /> ) }
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/admin/*' element={<AdminPanel />}/>
        </Route>
      </Routes>
      <PageFooter />
    </>
  );
}

export default App;
