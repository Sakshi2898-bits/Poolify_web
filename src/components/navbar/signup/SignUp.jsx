import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.scss';


const SignUp = ({ setUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
        createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      .then((userCredential) => {

        const user = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: userCredential.user.email,
        };

        setUser(user);

        toast.success("Sign up successful!");
        setTimeout(() => {
          toast.dismiss();
          navigate('/home');
        }, 2000);
      })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error("The email address is already in use. Please log in or use a different email.");
      } else {
        toast.error("Error signing up: ", error);
        toast.error(`Sign up failed: ${error.message}`);
      }
    }

    setFormData({firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''});
  };

  const handleLoginRedirect = () => {
    navigate("/login"); 
  };


  return (
    <Container className="signup-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2>Create Your Account</h2>
      <p className="signup-subtitle">Join Poolify and start your carpooling journey</p>
      <Form onSubmit={onHandleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email">
          <Form.Label style={{ marginTop: "20px" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Row style={{ marginTop: "20px" }}>
          <Col md={6}>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="role" style={{ marginTop: "20px" }}>
          <Form.Label>Sign up as</Form.Label>
          <Form.Control
            as="select"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="pooler">Pooler (Offering Rides)</option>
            <option value="poolie">Poolie (Looking for Rides)</option>
          </Form.Control>
        </Form.Group>

        <Button variant="none" type="submit" className="signup-button">
          Get Started
        </Button>
      </Form>
      <div className="login-footer">
            <p>Already have an account? <a href="#account-login" onClick={handleLoginRedirect}>Login</a></p>
          </div>
    </Container>
  );
};

export default SignUp;
