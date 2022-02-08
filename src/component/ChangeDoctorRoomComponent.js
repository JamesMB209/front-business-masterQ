import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom } from "../redux/settings/actions";

const ChangeDoctorRoomComponent = () => {
  const doctors = useSelector((state) => state.apiStore.doctors);
  const business = useSelector((state) => state.businessObjectStore);

  const [roomNumber, setRoomNumber] = useState("");
  const dispatch = useDispatch();

  console.log(doctors);

  return (
    <div>
      {doctors
        ? doctors
            .filter((filter) => {
              return filter.business_id == business[1].businessID;
            })
            .map((doctor, i) => {
              return (
                <div key={i}>
                  <p>
                    {doctor.f_name} {doctor.l_name}
                  </p>
                  <input
                    type="text"
                    onChange={(e) => setRoomNumber(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      dispatch(changeDoctorRoom(roomNumber, doctor.id));
                    }}
                  >
                    Change Room
                  </button>
                </div>
              );
            })
        : "ruh"}
    </div>
  );
};

export default ChangeDoctorRoomComponent;
