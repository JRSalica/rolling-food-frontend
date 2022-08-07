import useAuth from '../../hooks/useAuth';
import heroCover from '../../assets/hero-cover.jpg';
import './index.css'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let { token } = useAuth();
  const navigate = useNavigate();

  const goToLogin = () =>{
    navigate('/login');
  };
  
  return (
    <section className='hero-section container-fluid px-0'>
      <div className="col-md-12 card border-0">
          <img src={heroCover} alt="food cover" className="card-img" />
          <div className="container-fluid card-img-overlay caption-back row gx-0 text-white">
            <div className="col-8 ps-lg-4 mb-md-4 mt-5 d-flex flex-column justify-content-start">
              <h2 className="display-5 mb-0 text-white fw-bold">Rolling Food</h2>
              {!token ? <p className="lead my-2 d-none d-lg-block">Ingresa y empeza a pedir la comida mas rica de la ciudad.</p> :
                        <p className="lead my-2 d-none d-lg-block">Carga tu orden, confirmas el envio y te enviamos tu comida lo mas rapido que puedas imaginarte.</p>}
              {!token && <div className='d-flex'><button className='btn btn-primary me-2' onClick={goToLogin}>Ingresar</button></div>}
            </div>
          </div>
        </div>  
    </section>
  );
};

export default Home;