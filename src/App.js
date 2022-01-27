import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
import  Login  from "./pages/Login";
import  Business  from "./pages/Business";
import { logOutThunk } from "./redux/auth/actions";
import { Navbar, NavItem, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";



// const ENDPOINT = process.env.REACT_APP_API_SERVER;
function App() {
  // const [response, setResponse] = useState("");

  // const socket = io(ENDPOINT, { transports: ["websocket"] });
  // useEffect(() => {
  //   socket.on("FromAPI", (data) => {
  //     setResponse(data);
  //     console.log(data)
  //   });
  // }, []);
let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
const dispatch = useDispatch();

return (
  <BrowserRouter>
    <div className="App">
      <Navbar bg="dark">
        <Container>
          <NavItem>
            <Link to="/active">Business Page</Link>
          </NavItem>
          {isAuthenticated ? (
            <NavItem>
              <Link to="/login" onClick={() => dispatch(logOutThunk())}>
                Logout
              </Link>
            </NavItem>
          ) : (
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
          )}
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/active" element={<Business />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
