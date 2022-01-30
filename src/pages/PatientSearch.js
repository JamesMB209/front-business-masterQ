import React, { useEffect } from "react";
import SearchBar from "../component/Search";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
const PatientSearch = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const searchingStore = useSelector((state) => state.searchStore.data);
  console.log(searchingStore);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
      <SearchBar searchingStore={searchingStore}/>
    // <div>
    //   {/* <p>Hi! Welcome to Patient Searching Page!</p> */}
    //   {searchingStore
    //     ? searchingStore.map((eachPatient, index) => {
    //         return (
    //           <div key={index}>
    //             <Card style={{ width: "18rem" }}>
    //               {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //               <Card.Body>
    //                 <Card.Title>
    //                   <p className="patients_fullname">
    //                     {eachPatient.f_name} {eachPatient.l_name}
    //                   </p>
    //                 </Card.Title>

    //                 <Card.Text>
    //                   <p className="hkid">HKID: {eachPatient.hkid}</p>
    //                 </Card.Text>
    //                 <Card.Text>
    //                   <p className="email">e-mail: {eachPatient.email}</p>
    //                 </Card.Text>
    //                 <Card.Text>
    //                   <p className="dob">Date of birth: {eachPatient.dob}</p>
    //                 </Card.Text>
    //                 <Card.Text>
    //                   <p className="drug_allergy">
    //                     Allergies: {eachPatient.drug_allergy}
    //                   </p>
    //                 </Card.Text>
    //                 {/* <Button variant="primary">Go somewhere</Button> */}
    //               </Card.Body>
    //             </Card>
    //           </div>
    //         );
    //       })
    //     : "You dont have any patients!"}
    // </div>
  );
};

export default PatientSearch;
