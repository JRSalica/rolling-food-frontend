import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Sidebar, Users, Orders, Products, Categories } from '../../components/Admin/index';


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
