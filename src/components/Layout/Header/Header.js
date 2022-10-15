import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import rollingFoodLogo from '../../../assets/rollingfood-logo.svg';

const Header = () => {
  const { user, token, onLogout } = useAuth();
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container-fluid'>
          <div className='d-flex align-items-center'>
            <img src={rollingFoodLogo} alt='page logo' width='45' className='d-inline-block align-text-top me-2 filter' />
            <a className='navbar-brand fs-5 pe-2 text-white' href='/'>Rolling Food</a>
          </div>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li><NavLink className='nav-link text-white' to='/'>Inicio</NavLink></li>
              {token && <li><NavLink className='nav-link text-white' to='/menu'>Menu</NavLink></li>}
              {user?.role === 'ADMIN_ROLE' && <li><NavLink className='nav-link text-white' to='/admin'>Admin</NavLink></li>}
            </ul>
            <ul className='navbar-nav'>
              {token && <li><button className='btn btn-success mx-2' type='button' onClick={goToCart}><i className='bi bi-cart'></i></button></li>}
              {!token && <li><NavLink className='nav-link text-white' to='/login'>Ingresar</NavLink></li>}
              {!token && <li><NavLink className='nav-link text-white' to='/register'>Registrarme</NavLink></li>}
              {token && <li><button className='btn btn-danger' type='button' onClick={onLogout}>Logout</button></li>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
