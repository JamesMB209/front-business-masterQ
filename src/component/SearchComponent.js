import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPatientThunk } from "../redux/search/actions";
import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import { Card, Accordion } from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';

import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";


const SearchBar = (props) => {
  const [searchPatients, setSearchPatients] = useState("");
  const dispatch = useDispatch();
  const newProps = [];
  useEffect(() => {
    dispatch(loadPatientThunk());
  }, []);
  const columns = [
    { field: 'hkid', headerName: 'HKID', width: 100 },
    { field: 'f_name', headerName: 'First name', width: 130 },
    { field: 'l_name', headerName: 'Last name', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  // const newA = props.searchingStore.map((patient, index) => {
  //   return {
  //     id: index,
  //     ...patient
  //   }}
  // );
  const newA = props.searchingStore.map((patient, index) => {
    newProps.push({id: index,
      ...patient})
      
    }
  );
  console.log(newA)
  
  // console.log("tgis is the prips serchcomponent line 18", props.searchingStore);
  // console.log(newProps);
  
  const key = "hkid";

  const arrayUniqueByKey = [
    ...new Map(newProps.map((item) => [item[key], item])).values(),
  ];
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  console.log(arrayUniqueByKey);
  return (
    <div className='search_card'>
      <Accordion 
      className='m-3 pharmacy_stock_card' defaultActiveKey="0" 
      style={{  width: 1000 }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5 className='setting_title mx-1'>Search Patients</h5>
          <input 
          className='search_input'
          type="text" value={searchPatients} onChange={(e) => setSearchPatients(e.target.value)} placeholder="Enter to search patient"/>
          </Accordion.Header>
        <Accordion.Body>

        <div className='search_table' style={{  width: 950 }}>
          <br />
          {arrayUniqueByKey ? arrayUniqueByKey.filter((val) => {
              if (val == "" || searchPatients.trim() == "") {
                return val;
              } else if (
                val.hkid.toLowerCase().includes(searchPatients.toLowerCase()) ||
                val.f_name
                  .toLowerCase()
                  .includes(searchPatients.toLowerCase()) ||
                val.l_name
                  .toLowerCase()
                  .includes(searchPatients.toLowerCase()) ||
                val.email.toLowerCase().includes(searchPatients.toLowerCase())
              ) {
                return val;
              }
            }).map((eachPatient, index) => {
              return (
                  <div 
                  className='patient_card'
                  key={index}>
                    <Accordion >
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header><span>{eachPatient.f_name} {eachPatient.l_name}</span></Accordion.Header>
                      <Accordion.Body className='each_patient_card'>
                        <p>HKID: <span>{eachPatient.hkid}</span></p>
                        <p>E-mail: <span>{eachPatient.email}</span></p>
                        <p>Gender: <span>{eachPatient.gender}</span></p>
                        <p>Phone Number: <span>{eachPatient.phone}</span></p>
                        <p>Drug Allergies:<span> {eachPatient.drug_allergy}</span></p>
                      </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
              )})
              : "You dont have any patients!"}
              </div>
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
    </div>
  );
};
export default SearchBar;
