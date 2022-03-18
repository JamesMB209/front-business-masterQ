import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadPatientThunk } from "../redux/search/actions";
import { Accordion } from "react-bootstrap";


const SearchBar = (props) => {
  const [searchPatients, setSearchPatients] = useState("");
  const dispatch = useDispatch();
  const newProps = [];
  useEffect(() => {
    dispatch(loadPatientThunk());
  }, []);
  
  const key = "hkid";

  const arrayUniqueByKey = [
    ...new Map(newProps.map((item) => [item[key], item])).values(),
  ];


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
