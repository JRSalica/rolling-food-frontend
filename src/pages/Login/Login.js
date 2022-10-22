import { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validationSchemas/validationSchemas';
import useAuth from '../../hooks/useAuth';
import './index.css';

const Login = () => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(loginSchema) });
  const watchForm = watch();

  const [revealed, setRevealed] = useState(false);
  const handleReveal = () => {
    if (!revealed) setRevealed(true);
    else setRevealed(false);
  };

  const { onLogin } = useAuth();

  const handleLogin = ({ email, password }) => {
    const userData = {
      email,
      password,
    };
    onLogin(userData);
  };

  return (
    <section className='container py-4'>
      <div className='row d-flex flex-row justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4 pb-0 py-md-4'>
          <form className='login-form rounded-4 shadow p-4' onSubmit={handleSubmit(handleLogin)} noValidate>
            <h2 className='fs-4 mb-3'><i className='bi bi-code pe-2' />Ingresa a Rolling Food:</h2>
            <div className='mb-3'>
              <label className='form-label' htmlFor='login-email'>Email:</label>
              <input id='login-email' name='email' type='email' placeholder='Ingresa tu mail'
                {...register('email')}
                className={classNames('form-control', {
                  'is-invalid': errors.email,
                  'is-valid': (!errors.email && watchForm.email),
                })}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor='login-password'>Contraseña:</label>
              <div className='input-group'>
                <input id='login-password' name='password' type={(revealed) ? 'text' : 'password'} placeholder='Contraseña'
                  {...register('password')}
                  className={classNames('form-control', {
                    'is-invalid': errors.password,
                    'is-valid': (!errors.password && watchForm.password),
                  })}
                />
                <span onClick={handleReveal} className='input-group-text'><i className={classNames('bi', {
                  'bi-eye-fill': !revealed,
                  'bi-eye-slash-fill': revealed,
                })} /></span>
              </div>
            </div>
            <div className='mb-3'>
              <input className='form-check-input me-2' id='login-remember-check' type='checkbox' />
              <label className='form-check-label' htmlFor='login-remember-check'>Recordarme</label>
            </div>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary' type='submit'>Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
