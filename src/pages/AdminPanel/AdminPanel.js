import { Route, Routes } from 'react-router-dom';
import {
  Sidebar, Users, Orders, Products, Categories,
} from '../../components/Admin/index';
import './index.css';

const AdminPanel = () => {
  return (
    <main className='container'>
      <div className='row screen-mh py-4'>
        <div className='col col-12 col-md-12 col-lg-2 p-0 pb-4 pb-lg-0 bg-dark'>
          <Sidebar />
        </div>
        <div className='col col-12 col-md-12 col-lg-10 p-3 bg-light'>
          <Routes>
            <Route path='users' element={<Users />} />
            <Route path='orders' element={<Orders />} />
            <Route path='products' element={<Products />} />
            <Route path='categories' element={<Categories />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;
