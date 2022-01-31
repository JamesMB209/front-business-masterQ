// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPatientThunk } from "../redux/search/actions";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const SearchBar = (props) => {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const [searchPatients, setSearchPatients] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPatientThunk());
  }, []);

  return (
    <div>
      <input
        type="text"
        value={searchPatients}
        onChange={(e) => setSearchPatients(e.target.value)} placeholder="Enter patient's HKID"
      />
      {props.searchingStore
        ? props.searchingStore
            .filter((val) => {
              if (val == "") {
                return val;
              } else if(val.hkid.toLowerCase().includes(searchPatients.toLowerCase())){
                return val
              }
            })
            .map((eachPatient, index) => {
              return (
                <div key={index}>
                  <Card style={{ width: "18rem" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>
                        <p className="patients_fullname">
                          {eachPatient.f_name} {eachPatient.l_name}
                        </p>
                      </Card.Title>

                      <Card.Text>
                        <p className="hkid">HKID: {eachPatient.hkid}</p>
                      </Card.Text>
                      <Card.Text>
                        <p className="email">e-mail: {eachPatient.email}</p>
                      </Card.Text>
                      <Card.Text>
                        <p className="dob">Date of birth: {eachPatient.dob}</p>
                      </Card.Text>
                      <Card.Text>
                        <p className="drug_allergy">
                          Allergies: {eachPatient.drug_allergy}
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
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
