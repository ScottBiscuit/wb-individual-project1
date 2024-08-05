import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function LoginForm({ onLogin }) {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          required 
          type="email" 
          placeholder="name@example.com" 
          onChange={(e) => setEmailValue(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
        </Form.Group>
    </Row>
    <Row>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
        </Form.Group>
    </Row>
    
      <Row className="mb-3">
        
      </Row>
    
      <Button type="submit" variant="success">Log In</Button>
    </Form>
  );
}

