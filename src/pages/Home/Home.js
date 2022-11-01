import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import heroCover from '../../assets/hero-cover.jpg';
import './index.css';

const Home = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <main className='container-fluid px-0 d-flex flex-column align-items-center'>
      <section className='hero-section container-fluid px-0'>
        <div className='col-md-12 card border-0'>
          <img src={heroCover} alt='food cover' className='card-img' />
          <div className='container-fluid card-img-overlay caption-back row gx-0 text-white'>
            <div className='col-8 ps-lg-4 mb-0 mb-md-4 mt-0 mt-md-5 d-flex flex-column justify-content-start'>
              <h2 className='display-5 mb-0 text-white fw-bold'>Rolling Food</h2>
              {!token ? <p className='lead my-2 d-none d-md-block'>Ingresa y empeza cargar tu orden.</p>
                : <p className='lead my-2 d-none d-md-block'>Carga tu orden, pagas y te enviamos tu pedido.</p>}
              {!token && <div className='d-flex'><button className='btn btn-dark rounded-0 me-2 mt-3' onClick={goToLogin}>Ingresar</button></div>}
            </div>
          </div>
        </div>
      </section>
      <section className='col-12 col-sm-10 col-md-8 d-block d-lg-none p-2 mx-5'>
        <div className='card my-3 mx-2'>
          <h5 className='card-header'>En Rolling Food te ofrecemos:</h5>
          <div className='card-body'>
            <p className='card-text'>Gran variedad de comidas.</p>
            <p className='card-text'>Multiples formas de pago.</p>
            <p className='card-text'>Servicio de cadeteria.</p>
            <p className='card-text'>Atencion al cliente.</p>
            <a className='btn btn-outline-dark shadow d-flex justify-content-center'>Saber mas</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
