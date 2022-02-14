import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPatientThunk } from "../redux/search/actions";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";

const SearchBar = (props) => {
  const [searchPatients, setSearchPatients] = useState("");
  const dispatch = useDispatch();
  const newProps = [];
  useEffect(() => {
    dispatch(loadPatientThunk());
  }, []);
  const newA = props.searchingStore.map((patient) =>
    newProps.push({
      f_name: patient.f_name,
      l_name: patient.l_name,
      hkid: patient.hkid,
      gender: patient.gender,
      email: patient.email,
      dob: patient.dob,
      drug_allergy: patient.drug_allergy,
    })
  );
  console.log("tgis is the prips serchcomponent line 18", props.searchingStore);
  console.log(newProps);

  const key = "hkid";

  const arrayUniqueByKey = [
    ...new Map(newProps.map((item) => [item[key], item])).values(),
  ];

  console.log(arrayUniqueByKey);
  return (
    <div>
      <input
        type="text"
        value={searchPatients}
        onChange={(e) => setSearchPatients(e.target.value)}
        placeholder="Enter to search patient"
      />
      <br />
      {arrayUniqueByKey
        ? arrayUniqueByKey
            .filter((val) => {
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
            })
            .map((eachPatient, index) => {
              return (
                <div key={index}>
                  {/* <CDBContainer>
                        <CDBCard>
                          <CDBCardBody>
                            <CDBDataTable
                              striped
                              bordered
                              hover
                              entriesOptions={[5, 20, 25]}
                              entries={5}
                              pagesAmount={4}
                              data={eachPatient.f_name}
                              materialSearch={true}
                            />
                          </CDBCardBody>
                        </CDBCard>
                      </CDBContainer> */}

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>
                        {/* <h5 className="patients_fullname"> */}
                          {eachPatient.f_name} {eachPatient.l_name}
                        {/* </h5> */}
                      </Card.Title>

                      <Card.Text>
                        {/* <p className="hkid"> */}
                          HKID: {eachPatient.hkid}
                          {/* </p> */}
                      </Card.Text>
                      <Card.Text>
                        {/* <p className="email"> */}
                          e-mail: {eachPatient.email}
                          {/* </p> */}
                      </Card.Text>
                      <Card.Text>
                        {/* <p className="dob"> */}
                          Date of birth: {eachPatient.dob}
                          {/* </p> */}
                      </Card.Text>
                      <Card.Text>
                        {/* <p className="drug_allergy"> */}
                          Allergies: {eachPatient.drug_allergy}
                        {/* </p> */}
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button>  a//////// add modal to check appointment history? */}
                    </Card.Body>
                  </Card>
                </div>
              );
            })
        : "You dont have any patients!"}
    </div>
  );
};
export default SearchBar;
