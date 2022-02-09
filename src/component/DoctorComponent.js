import React, { useState } from "react";
import { useSelector } from "react-redux";

import { emit, NEXT } from "../redux/webSocets/actions";

export default function DoctorComponent(props) {
  const business = useSelector((state) => state.businessObjectStore);
  const [diagnosis, setDiagnosis] = useState("")

  const clickDoctor = () => {
    emit(NEXT, { doctor: props.id });
  };
  console.log(props);
  console.log(business);
  let doctor = business[`${props.id}`];
  console.log(doctor);
  return (
    <div>
      <br />
      {doctor == undefined
        ? "Select Doctor to continue" : doctor.queue.length !== 0 ? 
        doctor.queue.filter((first) => first == doctor.queue[0]).map((patient) => {
          return <div>
            <h2>Dr. {doctor.fullName}</h2>
            <p>{patient.f_name} {patient.l_name}</p>
            <p>{patient.gender}</p>
            <p>{patient.dob}</p>
            <p>{patient.hkid}</p>
            <p>{patient.email}</p>
            <p>{patient.drug_allergy}</p>
            <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)}/>
            <button onClick={clickDoctor}>Next Patient</button>
            {diagnosis}
          </div>
        }) : <h2>No patients in queue for Dr. {doctor.fullName} </h2>}
      <br />
    </div>
  );
}
