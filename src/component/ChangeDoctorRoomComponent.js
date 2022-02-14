import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom, changeDoctorStatus } from "../redux/settings/actions";
import {DropdownButton, Dropdown, Card, Button} from "react-bootstrap"

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
      <Card.Title>
      <h5 className='setting_title'>Change doctors room</h5>
      </Card.Title>

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
          <p className='m-3'>You have chosen:</p>
          <h6 className='ms-3'> Dr. {doctorName == "" ? "Choose a doctor" : doctorName} </h6>
          
          <p className='mx-3'>Change to room 
          <input
                    className='mx-3'
                    type="text"
                    placeholder="ex. 1001"
                    onChange={(e) => setRoomNumber(e.target.value)}
                  /> </p>
          <Button
          className='buttonOne'
              onClick={() => {
                      dispatch(changeDoctorRoom(roomNumber, doctorId));
                    }}
                  >
                    Change Room
                  </Button>
    </div>
  )
};

export default ChangeDoctorRoomComponent;
