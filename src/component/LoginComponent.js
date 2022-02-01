import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunkSuccess, loginFacebookThunk } from "../redux/auth/actions";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

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
    <div className='col-md-4'>
      <Form className='row'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
          <Button className="mx-1" variant="primary" type="submit" onClick={(e) => { login(e) }}>
            Login
          </Button>
      </Form>
    </div>
  );
};

export default Login;
