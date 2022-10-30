import React from 'react';
import rollingFoodLogo from '../../../assets/rollingfood-logo.svg';
import './index.css';

const Footer = () => {
  return (
    <footer className='container-fluid d-flex justify-content-between align-items-center py-3 bg-dark'>
      <div className='col-md-3 ms-3 d-flex align-items-center'>
        <p className='mb-0 fs-5 text-white d-flex flex-column flex-sm-row'><span className='pe-2'>© 2022</span><span>Rolling Food</span></p>
      </div>
      <div className='col-md-3 d-flex align-items-center justify-content-center mb-md-0 '>
        <a href='/' className='link-dark text-decoration-none'><img src={rollingFoodLogo} alt='page logo' className='filter' width='100' /></a>
      </div>
      <div className='nav col-md-3 me-3 justify-content-end'>
        <ul className='d-flex flex-row mb-0 list-unstyled'>
          <li className='ms-3'><i className='bi bi-github text-white fs-3' /></li>
          <li className='ms-3'><i className='bi bi-instagram text-white fs-3' /></li>
          <li className='ms-3'><i className='bi bi-facebook text-white fs-3' /></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
