import { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../utils/validationSchemas/validationSchemas';
import useAuth from '../../hooks/useAuth';
import './index.css';

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const { onRegister } = useAuth();

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(registerSchema) });
  const watchForm = watch();

  const handleReveal = () => {
    if (!revealed) setRevealed(true);
    else setRevealed(false);
  };

  const handleRegister = async ({ fullName, email, password }) => {
    setIsRegistering(true);
    const userData = {
      fullName,
      email,
      password,
    };
    await onRegister(userData);
    setIsRegistering(false);
  };

  return (
    <main className='container-fluid px-0 d-flex flex-column align-items-center'>
      <section className='container py-4'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-6 col-lg-4 pb-0 py-md-4'>
            <form className='register-form rounded-4 shadow p-4' onSubmit={handleSubmit(handleRegister)} noValidate>
              <h2 className='fs-4 mb-4'><i className='bi bi-code pe-2' />Registrate en Rolling Food:</h2>
              <div className='mb-3'>
                <label className='form-label' htmlFor='register-fullname'>Nombre completo:</label>
                <input id='register-fullname' name='fullName' type='text' placeholder='Ingresa tu nombre completo'
                  {...register('fullName')}
                  className={classNames('form-control', {
                    'is-invalid': errors.fullName,
                    'is-valid': (!errors.fullName && watchForm.fullName),
                  })}
                />
                <div className='invalid-feedback'>{errors.fullName?.message}</div>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='register-email'>Email:</label>
                <input id='register-email' name='email' type='email' placeholder='Ingresa tu mail'
                  {...register('email')}
                  className={classNames('form-control', {
                    'is-invalid': errors.email,
                    'is-valid': (!errors.email && watchForm.email),
                  })}
                />
                <div className='invalid-feedback'>{errors.email?.message}</div>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='register-password'>Contraseña:</label>
                <div className='input-group'>
                  <input id='register-password' name='password' type={(revealed) ? 'text' : 'password'} placeholder='Contraseña'
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
                <div className='invalid-feedback'>{errors.password?.message}</div>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='register-password2'>Repeti tu contraseña:</label>
                <div className='input-group'>
                  <input id='register-password2' name='password2' type={(revealed) ? 'text' : 'password'} placeholder='Contraseña'
                    {...register('password2')}
                    className={classNames('form-control', {
                      'is-invalid': errors.password2,
                      'is-valid': (!errors.password2 && watchForm.password2),
                    })}
                  />
                  <span onClick={handleReveal} className='input-group-text'><i className={classNames('bi', {
                    'bi-eye-fill': !revealed,
                    'bi-eye-slash-fill': revealed,
                  })} /></span>
                </div>
                <div className='invalid-feedback'>{errors.password2?.message}</div>
              </div>
              <div className='mb-3'>
                <input id='register-terms-check' type='checkbox'
                  {...register('termsCheck')}
                  className={classNames('form-control-checkbox me-2', {
                    'is-invalid': errors.termsCheck,
                  })}
                />
                <label className='form-check-label' htmlFor='register-terms-check'>Acepto los terminos y condiciones</label>
                <div className='invalid-feedback'>{errors.termsCheck?.message}</div>
              </div>
              <div className='d-flex justify-content-end'>
              {!isRegistering ? <button className='btn btn-dark rounded-0 shadow' type='submit'>Registrarme</button>
                : <button className='btn btn-dark rounded-0 shadow' type='button' disabled>
                      <span className='spinner-border spinner-border-sm me-2' role='status' aria-hidden='true'></span>
                        Registrando
                    </button>
                }
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
