import React, { useState, useEffect } from "react";
import { loadApiThunk } from "../redux/api/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { loadBusinessObjThunk } from "../redux/businessObj/actions";


import DoctorComponent from '../component/DoctorComponent'
import Dropdown from 'react-bootstrap/Dropdown'
import { loadDoctorObjThunk } from "../redux/doctorObj/actions";

const Doctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const apiStore = useSelector((state) => state.apiStore);
  const [doctorSelected, setDoctorSelected] = useState("")
  const currentBusinessId = localStorage.getItem("businessId");
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
    dispatch(loadApiThunk());
    dispatch(loadBusinessObjThunk(currentBusinessId));
    dispatch(loadDoctorObjThunk({ business: currentBusinessId, doctor: 1 }));

  }, [auth, navigate, doctorSelected]);

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Doctor">
        {apiStore.doctors
          ? apiStore.doctors
            .filter((childDoc) => childDoc.business_id == currentBusinessId)
            .map((eachDoc, i) => (
              <Dropdown.Item onClick={(e) => { setDoctorSelected(e.target.attributes.value.value) }} value={eachDoc.id}>{eachDoc.f_name} {eachDoc.l_name}</Dropdown.Item>
            )) : <Dropdown.Item>No Doctors Found</Dropdown.Item>}
      </DropdownButton>

      {apiStore.doctors
        ? apiStore.doctors
          .filter((doctor) => doctor.id == doctorSelected)
          .map((doctor, i) => (
            <DoctorComponent {...doctor} />
          ))
        : ""}
    </div>
  );
};

export default Doctor;
