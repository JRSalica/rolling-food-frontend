import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useAuth from '../../hooks/useAuth';
import './index.css';

const Register = () => {
  const { onRegister } = useAuth();

  const handleRegister = (ev) => {
    ev.preventDefault();
    const dataElements = ev.target.elements;
    const userData = {
      fullName: dataElements.fullName.value,
      email: dataElements.email.value,
      password: dataElements.password.value,
    };
    onRegister(userData);
  };

  return (
    <main className='d-flex align-items-center'>
      <Container className='register-container'>
        <Row className='d-flex justify-content-center'>
          <Col xs={4} className='pb-0 py-md-4'>
            <Form className='register-form border p-4' onSubmit={handleRegister}>
              <Form.Group className='mb-3' controlId='full-name'>
                <Form.Label>Nombre completo:</Form.Label>
                <Form.Control name='fullName' type='text' placeholder='Ingresa tu nombre completo' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email:</Form.Label>
                <Form.Control name='email' type='email' placeholder='Ingresa tu mail' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control name='password' type='password' placeholder='Contraseña' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password-check'>
                <Form.Label>Repeti tu contraseña:</Form.Label>
                <Form.Control name='password2' type='password' placeholder='Contraseña' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Acepto los terminos y condiciones.' />
              </Form.Group>
              <Button variant='primary' type='submit'>Registrarme</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Register;
