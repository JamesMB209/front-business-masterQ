import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunkSuccess, loginFacebookThunk } from "../redux/auth/actions";
/* import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'; */
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import login_img from '../assets/6.png';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault()
    dispatch(loginThunkSuccess(email, password));
  };

  return (
    <>
    
    <Row>
      
    <Col lg={5} sm={12}>
    <div className='login_box d-flex m-5'>
      <Form className='justify-content-center'>
        
      <h5>Log in</h5>
      <hr className="under-line"/>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
          <Button className="mx-1 buttonOne mt-4" variant="primary" type="submit" onClick={(e) => { login(e) }}>
            Login
          </Button>
      </Form>
      </div>
      </Col>
   
    <Col lg={6} sm={12} className="login-right">
        <img src={login_img} alt="login-img" className="login-img"/>
      </Col>
    </Row>
   
    </>
  );
};

export default Login;
