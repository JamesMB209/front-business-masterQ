// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPatientThunk } from "../redux/search/actions";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const SearchBar = (props) => {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const [searchPatients, setSearchPatients] = useState("");
  const [listPatients, setListPatients] = useState(props.searchingStore); // try
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(`this is the list of patients:  ${props.searchingStore}`); //
    const filter = (value) => {
        setSearchPatients(value)
    }
  useEffect(() => {
    print();
  }, []);
  const print = () => {
    dispatch(loadPatientThunk());
  };
  // try
  return (
    <div>
        <input type="text" value={searchPatients} onChange={filter}/>
      <p>hi</p>
    </div>
  ); // try
  //   return (
  //     <div>
  //       {props.searchingStore
  //         ? props.searchingStore.map((eachPatient, index) => {
  //             return (
  //               <div key={index}>
  //                 <Card style={{ width: "18rem" }}>
  //                   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  //                   <Card.Body>
  //                     <Card.Title>
  //                       <p className="patients_fullname">
  //                         {eachPatient.f_name} {eachPatient.l_name}
  //                       </p>
  //                     </Card.Title>

  //                     <Card.Text>
  //                       <p className="hkid">HKID: {eachPatient.hkid}</p>
  //                     </Card.Text>
  //                     <Card.Text>
  //                       <p className="email">e-mail: {eachPatient.email}</p>
  //                     </Card.Text>
  //                     <Card.Text>
  //                       <p className="dob">Date of birth: {eachPatient.dob}</p>
  //                     </Card.Text>
  //                     <Card.Text>
  //                       <p className="drug_allergy">
  //                         Allergies: {eachPatient.drug_allergy}
  //                       </p>
  //                     </Card.Text>
  //                     {/* <Button variant="primary">Go somewhere</Button> */}
  //                   </Card.Body>
  //                 </Card>
  //               </div>
  //             );
  //           })
  //         : "You dont have any patients!"}
  //     </div>
  //   );
};
export default SearchBar;
