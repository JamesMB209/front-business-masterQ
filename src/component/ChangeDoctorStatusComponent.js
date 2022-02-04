import React from "react";
import { useSelector } from "react-redux";

const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore.doctors);
  const currentBusinessId = localStorage.getItem("businessId");

  const doctor = doctors.filter(
    (doctor) => doctor.business_id == currentBusinessId
  );
  console.log(doctor);

  return (
    <div>
      {doctor
        ? doctor.map((eachDoc, i) => {
            <div key={i}>
              <p>{eachDoc.f_name}</p>
              hi
            </div>;
          })
        : "no doc?"}
      <p>Settings Component - Modify Doctors</p>
      Hello!, Hello! 1. Assign Rooms 2. Change active/employed status
    </div>
  );
};

export default ChangeDoctorStatusComponent;
