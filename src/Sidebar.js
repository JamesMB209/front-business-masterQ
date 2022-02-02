import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#3E87A7" backgroundColor="#EBF9FA;
">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              MasterQ
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
              
            <CDBSidebarMenu>

              <NavLink exact to="/extra" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Business Page</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/billboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Billboard -</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/doctor" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Doctor</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/patient_search" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Search Patients</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/040d1331c3fc68ab5ff3ffead0b858d0380d0610c1209a237f84b43c29f9ecdff5e1b6726a9aff6120997677f27c49eb8e4bffa38855d84fb9498a3b1c8c451bdba217573dc1f0c0d89dad3819672fde69279bea2e4f3746e9da0ad254366aeb28ffe2d204009f3eab3bb5492789d65a996fdd96d4495d8c990ee722c449b67a4afd081b9aea328928e0bfeee812565464ee727f9aee2c472c216b2f8615c917" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Settings-</CDBSidebarMenuItem>
              </NavLink>

              {/* {isAuthenticated ? ):() */}
              <NavLink exact to="/queue" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-circle">Main Queue -</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/login" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Login-</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
        
      </div>
    );
  };
  
  export default Sidebar;
  
