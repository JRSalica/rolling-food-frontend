import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import Categories from '../../components/Categories/Categories';
import Orders from '../../components/Orders/Orders';
import Products from '../../components/Products/Products';
import Users from '../../components/Users/Users';

const AdminPanel = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col-2 bg-primary'>
          <Sidebar />
        </div>
        <div className='col-10 bg-dark p-3'>
          <Routes>
            <Route path='users' element={<Users />} />
            <Route path='orders' element={<Orders />} />
            <Route path='products' element={<Products />} />
            <Route path='categories' element={<Categories />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </section>
  )
};

export default AdminPanel;
