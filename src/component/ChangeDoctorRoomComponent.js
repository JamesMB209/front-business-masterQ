import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom, changeDoctorStatus } from "../redux/settings/actions";
import {DropdownButton, Dropdown} from "react-bootstrap"

const ChangeDoctorRoomComponent = () => {
  const doctors = useSelector((state) => state.apiStore);
  const settingStore = useSelector((state) => state.settingStore)
  const [doctorId, setDoctorId] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const [roomNumber, setRoomNumber] = useState("");
  const dispatch = useDispatch();

  console.log(doctors);
  console.log(settingStore)

  return (
    <div>
      <p>Change doctors room</p>
      <DropdownButton id="dropdown-basic-button" title="Select Doctor">
      {doctors === undefined ? <h4>No Doctors available</h4> : doctors.map((doctor) => {
        return (
            <Dropdown.Item onClick={() => {
              setDoctorId(doctor.id);
              setDoctorName(doctor.name)
            }}>{doctor.name}</Dropdown.Item>
            );
          })}
          </DropdownButton>
          <p>Change Room for:</p>
          {doctorName == "" ? "Choose a doctor" : doctorName} 
          <input
                    type="text"
                    onChange={(e) => setRoomNumber(e.target.value)}
                  />
          <button
                    onClick={() => {
                      dispatch(changeDoctorRoom(roomNumber, doctorId));
                    }}
                  >
                    Change Room
                  </button>
    </div>
  )
};

export default ChangeDoctorRoomComponent;
