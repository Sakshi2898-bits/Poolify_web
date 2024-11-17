import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth} from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.scss";

const Login = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  
  const navigate = useNavigate();  

  const onHandleLogin = async (e) => {
    e.preventDefault();

    try {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: userCredential.user.email,
      };

      setUser(user);
      toast.success("Log in successful!");
      setTimeout(() => {
        toast.dismiss();
        navigate('/home');
      }, 2000);
    })
    .catch((error) => {
      toast.error(`Login failed: ${error.message}`);
    });
  }
  catch (error) {
    toast.error(`Error logging in: ${error.message}`);
  }

  setFormData({firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''});
    
  };

  const handleRegisterRedirect = () => {
    navigate("/signup"); 
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Card className="login-card">
        <Card.Body>
          <h2 className="login-title">Welcome to Poolify!</h2>
          <Form onSubmit={onHandleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </Form.Group>

            <Button type="submit" className="login-button">
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /> Login
            </Button>
          </Form>
          <div className="login-footer">
            <p>Don't have an account? <a href="#register" onClick={handleRegisterRedirect}>Register here</a></p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
