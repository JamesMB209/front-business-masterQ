import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPharmacyStockThunk } from "../redux/pharmacyStock/actions";
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'

import { emit, NEXT } from "../redux/webSocets/actions";

export default function DoctorComponent(props) {
  const business = useSelector((state) => state.businessObjectStore);
  const drugInventry = useSelector((state) => state.pharmacyStore);
  let [drugs, setDrugs] = useState([])
  const [diagnosis, setDiagnosis] = useState("")


  const clickDoctor = () => {
    emit(NEXT, { doctor: props.id, prescribedDrugs: drugs });
    setDrugs([])
  };

  let doctor = business[`${props.id}`];


  const onChangePrescription = (e) => {
    if (e.target.checked) {
      setDrugs(state => [...state, e.target.value])
    } else {
      drugs.splice(drugs.indexOf(e.target.value), 1)
      setDrugs(state => [...state])
    }
  }

  return (
    <div>
      <br />
      {doctor == undefined
        ? "Select Doctor to continue" : doctor.queue.length !== 0 ?
          doctor.queue.filter((first) => first == doctor.queue[0]).map((patient) => {
            return <div>
              <h2>Dr. {doctor.fullName}</h2>
              <p>{patient.appointmentHistoryID}</p>
              <p>{patient.f_name} {patient.l_name}</p>
              <p>{patient.gender}</p>
              <p>{patient.dob}</p>
              <p>{patient.hkid}</p>
              <p>{patient.email}</p>
              <p>{patient.drug_allergy}</p>
              <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
              <button onClick={clickDoctor}>Next Patient</button>
              {diagnosis}
              <Form className={doctor.fullName}>

                {drugInventry.map((drugOBJ, index) => (
                  <Form.Check
                    name="drugs"
                    type="checkbox"
                    onChange={onChangePrescription}
                    value={drugOBJ.sku}
                    label={`${drugOBJ.drug}: Dosage:${drugOBJ.dosage}mg.`}
                    checked={drugs.includes(`${drugOBJ.sku}`)?true:false}
                  />
                ))}
              </Form>
            </div>
          }) : <h2>No patients in queue for Dr. {doctor.fullName} </h2>}
      <br />
      <p>{drugs}</p>
    </div>
  );
}
