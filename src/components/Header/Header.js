import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
              <li><NavLink className='nav-link' to='/login'>Login</NavLink></li>
              <li><NavLink className='nav-link' to='/home'>Menu</NavLink></li>
              <li><NavLink className='nav-link' to='/admin'>Admin</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;