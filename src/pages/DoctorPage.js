import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";

import DoctorComponent from "../component/DoctorComponent";
import Dropdown from "react-bootstrap/Dropdown";

const Doctor = () => {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const business = useSelector((state) => state.businessObjectStore);
  const apiStore = useSelector((state) => state.apiStore);

  const [doctorSelected, setDoctorSelected] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  delete business.pharmacy;

  console.log(apiStore);
  console.log(business);

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
    dispatch(loadBusinessObjThunk());
  }, [auth, navigate]);

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Doctor">
        {apiStore.length != 0 ? (
          apiStore.map((eachDoc, i) => (
            <Dropdown.Item
              onClick={(e) => {
                setDoctorSelected(e.target.attributes.value.value);
                dispatch(loadBusinessObjThunk());
              }}
              value={eachDoc.id}
            >
              {eachDoc.name}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item>No Doctors Found</Dropdown.Item>
        )}
      </DropdownButton>

      <DoctorComponent id={doctorSelected} />
    </div>
  );
};

export default Doctor;
