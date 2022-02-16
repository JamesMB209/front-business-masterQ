import React, { useState, useEffect } from "react";
import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage";
import Billboard from "./pages/BillboardPage";
import Doctor from "./pages/DoctorPage";
import PatientSearch from "./pages/PatientSearchPage";
import Queue from "./pages/QueuePage";
import PharmacyQueuePage from "./pages/PharmacyQueuePage";
import Settings from "./pages/SettingsPage";
import { logOutThunk } from "./redux/auth/actions";
import { Navbar, NavItem, Container, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { socket, emit, token } from "./redux/webSocets/actions";
import { loadBusinessObjThunk } from "./redux/businessObj/actions";
import { loadApiThunk } from "./redux/api/actions";
import { loadPharmacyStockThunk } from "./redux/pharmacyStock/actions";
import { getAllDoctors } from "./redux/settings/actions";

//pris added:
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import logo from "./assets/logo-blue.png";

function App() {
  let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
  const dispatch = useDispatch();

  dispatch(loadApiThunk());
  dispatch(loadPharmacyStockThunk());
  dispatch(loadBusinessObjThunk());
  dispatch(getAllDoctors());

  useEffect(() => {
    socket.on("UPDATE_BUSINESS", () => {
      dispatch(loadBusinessObjThunk());
    });

    return () => {
      socket.off("UPDATE_BUSINESS");
    };
  });

  /** Catch if the app was loaded without a valid token causing socket to not connect after login */
  useEffect(() => {
    if (isAuthenticated === true && token === null) {
      window.location.reload();
    }
  }, [dispatch, isAuthenticated]);

  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#3E87A7 " backgroundColor="#EBF9FA;">
          {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            MasterQ
            </a>
          </CDBSidebarHeader> */}

          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <img src={logo} className="side-logo" alt="logo" />
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            {/*   <button
              onClick={() => {
                emit("NEXT", { business: 1, doctor: 1 });
                console.log("clicked");
              }}
            >
              Dr. Peram next button
            </button>
            <button
              onClick={() => {
                emit("NEXT", { business: 1, doctor: 2 });
                console.log("clicked");
              }}
            >
              Dr. Pris next button
            </button>
            <button
              onClick={() => {
                emit("NEXT", { business: 1, doctor: 3 });
                console.log("clicked");
              }}
            >
              Dr. James next button
            </button> */}

            <CDBSidebarMenu>
              <Link to="/billboard" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-icon" icon="tv">
                  <h6>Billboard</h6>
                </CDBSidebarMenuItem>
              </Link>

              <Link to="/doctor" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-icon" icon="stethoscope">
                  <h6>Doctors</h6>
                </CDBSidebarMenuItem>
              </Link>

              <Link to="/patient_search" activeclassname="activeClicked">
                <CDBSidebarMenuItem
                  className="sidebar-icon"
                  icon="user-friends"
                >
                  <h6>Patients</h6>
                </CDBSidebarMenuItem>
              </Link>

              <Link to="/queue" activeclassname="activeClicked">
                <CDBSidebarMenuItem
                  className="sidebar-icon"
                  icon="people-arrows"
                >
                  <h6>Queue</h6>
                </CDBSidebarMenuItem>
              </Link>

              <Link to="/pharmacyqueue" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-icon" icon="building">
                  <h6>Pharmacy</h6>
                </CDBSidebarMenuItem>
              </Link>

              <Link
                to="/040d1331c3fc68ab5ff3ffead0b858d0380d0610c1209a237f84b43c29f9ecdff5e1b6726a9aff6120997677f27c49eb8e4bffa38855d84fb9498a3b1c8c451bdba217573dc1f0c0d89dad3819672fde69279bea2e4f3746e9da0ad254366aeb28ffe2d204009f3eab3bb5492789d65a996fdd96d4495d8c990ee722c449b67a4afd081b9aea328928e0bfeee812565464ee727f9aee2c472c216b2f8615c917"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
              </Link>

              {isAuthenticated ? (
                <NavItem>
                  <Link to="/login" onClick={() => dispatch(logOutThunk())}>
                    <CDBSidebarMenuItem icon="sign-in-alt">
                      Logout
                    </CDBSidebarMenuItem>
                  </Link>
                </NavItem>
              ) : (
                <NavItem>
                  <Link to="/login">
                    <CDBSidebarMenuItem icon="sign-in-alt">
                      Login
                    </CDBSidebarMenuItem>
                  </Link>
                </NavItem>
              )}
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/billboard" element={<Billboard />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient_search" element={<PatientSearch />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/pharmacyqueue" element={<PharmacyQueuePage />} />
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
