import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Debe ingresar un nombre.')
    .min(3, 'Debe ingresar un nombre mas largo')
    .max(29, 'Debe ingresar un nombre mas corto.')
    .matches(/^[a-zA-Z ]*$/, 'Debe ingresar un nombre valido.'),
  email: Yup.string()
    .required('Debe ingresar un mail.')
    .email('Debe ingresar un mail valido.'),
  password: Yup.string()
    .required('Debe ingresar una contraseña.')
    .min(7, 'Debe ingresar una contraseña mas larga.'),
  password2: Yup.string()
    .required('Debe confirmar su contraseña.')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden.'),
  termsCheck: Yup.bool().oneOf([true], 'Debe aceptar los terminos y condiciones.'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Debe ingresar un mail.')
    .email('Debe ingresar un mail valido.'),
  password: Yup.string()
    .required('Debe ingresar una contraseña.')
    .min(7, 'Debe ingresar una contraseña mas larga.'),
});
