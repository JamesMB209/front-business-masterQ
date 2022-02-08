import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { emit, NEXT } from "../redux/webSocets/actions";

export default function DoctorComponent(props) {
  const doctorObjectStore = useSelector((state) => state.doctorObjectStore);
  const business = useSelector((state) => state.businessObjectStore)

  const clickDoctor = () => {
    emit(NEXT, { doctor: props.id });
  };

  // console.log(props);
  console.log(business);


  return (
    <div>
      <p>more info</p>
      {doctorObjectStore.queue ? doctorObjectStore.queue
        .filter(
          (currentPatient) => currentPatient == doctorObjectStore.queue[0]
        )
        .map((patient) => {
          // return <p>doctor component line 59</p>
          return <div key={patient.id}>
            <p>
              {patient.f_name} {patient.l_name}
            </p>
            <p>{patient.dob}</p>
            <p>{patient.gender}</p>
            <p>{patient.history}</p>
            <p>{patient.phone}</p>
            <p>{patient.hkid}</p>
            <p>{patient.drug_allergy}</p>
          </div>;
        }) : "No more patients in the queue."}
        <br />
      <button onClick={clickDoctor}>Next Patient</button>
    </div>
  );
}
