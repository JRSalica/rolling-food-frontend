import { NavLink, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import rollingFoodLogo from '../../../assets/rollingfood-logo.svg';

const Header = () => {
  const { user, token, onLogout } = useAuth();
  const { order } = useCart();
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center'>
            <img src={rollingFoodLogo} alt='page logo' width='45' className='d-inline-block align-text-top me-2 filter' />
            <a className='navbar-brand fs-5 pe-2' href='/'>Rolling Food</a>
          </div>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
              {token && <li><NavLink className='nav-link' to='/menu'>Menu</NavLink></li>}
              {user?.role === 'ADMIN_ROLE' && <li><NavLink className='nav-link' to='/admin'>Admin</NavLink></li>}
            </ul>
            <ul className='navbar-nav'>
              {token && <li><Tippy content={`${order?.products?.length} productos.`}><button className='btn btn-dark border-light rounded-0 mx-0 mx-md-2 my-2 my-md-0' type='button' onClick={goToCart}><i className='bi bi-cart'/><span className='badge badge-dark text-bg-dark pe-0'>{order?.products?.length}</span></button></Tippy></li>}
              {!token && <li><NavLink className='nav-link' to='/login'>Ingresar</NavLink></li>}
              {!token && <li><NavLink className='nav-link' to='/register'>Registrarme</NavLink></li>}
              {token && <li><Tippy content='Cerrar sesion'><button className='btn btn-danger rounded-0' type='button' onClick={onLogout}>Salir</button></Tippy></li>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
