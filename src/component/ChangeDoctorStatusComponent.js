import React from "react";
import { useSelector } from "react-redux";

const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore.doctors);
  const currentBusinessId = localStorage.getItem("businessId");

  const doctor = doctors.filter(
    (doctor) => doctor.business_id == currentBusinessId
  );
  // console.log(doctors);

  return (
    <div>
      {doctors
        ? doctors
            .filter((filter) => {
              return filter.business_id == currentBusinessId;
            })
            .map((doctor, i) => {
              return (
                <div key={i}>
                  <p>{doctor.f_name} {doctor.l_name}</p>
                </div>
              );
            })
        : "ruh"}
      <p>Settings Component - Modify Doctors</p>
      Hello!, Hello! 1. Assign Rooms 2. Change active/employed status
    </div>
  );
};

export default ChangeDoctorStatusComponent;
