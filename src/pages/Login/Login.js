import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { onLogin } = useAuth();

  const handleLogin = (ev) =>{
    ev.preventDefault();
    let dataElements = ev.target.elements;
    const userData = {
      email: dataElements.email.value,
      password: dataElements.password.value,
    }
    onLogin(userData);
  }

  return (
    <main className='d-flex align-items-center'>
      <Container className='register-container'>
          <Row className='d-flex justify-content-center'>
            <Col xs={4} className='pb-0 py-md-4'>
              <Form className='login-form border p-4' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control name='email' type="email" placeholder="Ingresa tu mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control name='password' type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <Button variant="primary" type="submit">Ingresar</Button>
              </Form>
            </Col>
          </Row>
      </Container>
    </main>
  );
};

export default Login;