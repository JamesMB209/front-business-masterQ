import React, { useState, useEffect } from "react";
import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Business from "./pages/Business";
import Billboard from "./pages/Billboard";
import Doctor from "./pages/Doctor";
import PatientSearch from "./pages/PatientSearch";
import Queue from "./pages/Queue";
import Settings from "./pages/Settings";
import { logOutThunk } from "./redux/auth/actions";
import { Navbar, NavItem, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark">
          <Container>
            <NavItem>
              <Link to="/extra">Business Page</Link>
            </NavItem>
            <NavItem>
              <Link to="/billboard">Billboard</Link>
            </NavItem>
            <NavItem>
              <Link to="/doctor">Doctor</Link>
            </NavItem>
            <NavItem>
              <Link to="/patient_search">Search Patients</Link>
            </NavItem>
            <NavItem>
              <Link to="/queue">Main Queue</Link>
            </NavItem>
            <NavItem>
              <Link to="/040d1331c3fc68ab5ff3ffead0b858d0380d0610c1209a237f84b43c29f9ecdff5e1b6726a9aff6120997677f27c49eb8e4bffa38855d84fb9498a3b1c8c451bdba217573dc1f0c0d89dad3819672fde69279bea2e4f3746e9da0ad254366aeb28ffe2d204009f3eab3bb5492789d65a996fdd96d4495d8c990ee722c449b67a4afd081b9aea328928e0bfeee812565464ee727f9aee2c472c216b2f8615c917">
                Settings
              </Link>
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
          <Route path="/extra" element={<Business />} />
          <Route path="/billboard" element={<Billboard />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient_search" element={<PatientSearch />} />
          <Route path="/queue" element={<Queue />} />
          <Route
            path="/040d1331c3fc68ab5ff3ffead0b858d0380d0610c1209a237f84b43c29f9ecdff5e1b6726a9aff6120997677f27c49eb8e4bffa38855d84fb9498a3b1c8c451bdba217573dc1f0c0d89dad3819672fde69279bea2e4f3746e9da0ad254366aeb28ffe2d204009f3eab3bb5492789d65a996fdd96d4495d8c990ee722c449b67a4afd081b9aea328928e0bfeee812565464ee727f9aee2c472c216b2f8615c917"
            element={<Settings />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
