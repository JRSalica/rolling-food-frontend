import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className=''>
      <nav>
        <ul>
          <li><NavLink to='users'>Usuarios</NavLink></li>
          <li><NavLink to='orders'>Ordenes</NavLink></li>
          <li><NavLink to='products'>Productos</NavLink></li>
          <li><NavLink to='categories'>Categorias</NavLink></li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;