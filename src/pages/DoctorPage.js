import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { Container } from "react-bootstrap";

import DoctorComponent from "../component/DoctorComponent";
import Dropdown from "react-bootstrap/Dropdown";

const Doctor = () => {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const apiStore = useSelector((state) => state.apiStore);

  const [doctorSelected, setDoctorSelected] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <div>
      <Container fluid>
        <DropdownButton
          className="m-4"
          id="dropdown-basic-button"
          title="Doctor"
        >
          {apiStore.length != 0 ? (
            apiStore.map((eachDoc, i) => (
              <Dropdown.Item
                key={i}
                onClick={(e) => {
                  setDoctorSelected(e.target.attributes.value.value);
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
      </Container>
    </div>
  );
};

export default Doctor;
