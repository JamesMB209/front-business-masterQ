import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom, changeDoctorStatus } from "../redux/settings/actions";
import Form from "react-bootstrap/Form";
const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore);
  const business = useSelector((state) => state.businessObjectStore);

  const dispatch = useDispatch()

  console.log(doctors);

  return (
    <div>
      <p>Change doctors status</p>
      {doctors === undefined ? (
        <h4>No Doctors available</h4>
      ) : (
        doctors.map((doctor) => {
          return (
            <div key={doctor.id}>
              {doctor.name}
              <button onClick={() => dispatch(changeDoctorStatus(doctor.id, false, true))}>Not working today/Inactive</button>
              <button onClick={() => dispatch(changeDoctorStatus(doctor.id, false, false))}>Unemployed</button>
            </div>
          );
        })
      )}
    </div>
  );

};

export default ChangeDoctorStatusComponent;
