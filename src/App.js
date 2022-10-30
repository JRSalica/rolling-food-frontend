import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import {
  Home, Menu, AdminPanel, Login, Register, NotFound,
} from './pages';
import ProtectedRoute from './routes/ProtectedRoute';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <>
      <Header />
      <main className='container-fluid px-0 d-flex align-items-center'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/menu' element={<Menu />} />
            <Route path='/admin/*' element={<AdminPanel />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
