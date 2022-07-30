import React from 'react';
import heroCover from '../../assets/hero-cover.jpg';
import './index.css';
const Landing = () => {
  return (
    <section className='hero-section container-fluid px-0'>
      <div className="col-md-12 card border-0">
          <img src={heroCover} alt="food cover" className="card-img" />
          <div className="container-fluid card-img-overlay caption-back row gx-0 text-white">
            <div className="col-8 ps-lg-4 mb-md-4 mt-5 d-flex flex-column justify-content-start">
              <h2 className="display-5 mb-0 text-white fw-bold">Rolling Food</h2>
              <p className="lead my-2 d-none d-lg-block ">Registrate y empeza a pedir la comida mas rica de la ciudad.</p>
              <div className='d-flex justify-content-start mt-4'>
                <button className='btn btn-primary me-2'>Ingresar</button>
                <button className='btn btn-success'>Registrarme</button>
              </div>
            </div>
          </div>
        </div>  
    </section>
  );
};

export default Landing;