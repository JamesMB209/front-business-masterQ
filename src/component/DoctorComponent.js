import React, { useEffect, useState } from "react";
import { getHistory, postDiagnosis } from "../redux/patientHistory/actions";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { loadPharmacyStockThunk } from "../redux/pharmacyStock/actions";
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import { Container, Card, Button } from "react-bootstrap";

import { emit, NEXT } from "../redux/webSocets/actions";

export default function DoctorComponent(props) {
  const business = useSelector((state) => state.businessObjectStore);
  const drugInventry = useSelector((state) => state.pharmacyStore);
  let [drugs, setDrugs] = useState([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [appointmentHistoryId, setAppointmentHistoryId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [sickLeave, setSickLeave] = useState(false);
  const [followUp, setFollowUp] = useState(false);

  // console.log(props);
  // console.log(business);
  let doctor = business[`${props.id}`];
  const [patient, setPatient] = useState("");

  const clickDoctor = () => {
    postDiagnosis(appointmentHistoryId, diagnosis, followUp, sickLeave);
    emit(NEXT, { doctor: props.id, prescribedDrugs: drugs });
    setDrugs([]);
    setDiagnosis("");
    // getHistory(patientId);
  };

  const onChangePrescription = (e) => {
    if (e.target.checked) {
      setDrugs((state) => [...state, e.target.value]);
    } else {
      drugs.splice(drugs.indexOf(e.target.value), 1);
      setDrugs((state) => [...state]);
    }
  };

  return (
    <div>
      <Container>
      <br />
      {doctor == undefined
        ? "Select Doctor to continue" : doctor.queue.length !== 0 ?
          doctor.queue.filter((first) => first == doctor.queue[0]).map((patient) => {
            return <div>

              <h2 className='ms-5'>Dr. {doctor.fullName}</h2>

              <Card className='doctor_card'>
                
                <h5 className='doctor_title my-2'>
                  Patient Info</h5>
              <p>{patient.appointmentHistoryID}</p>
              <p>Name: <span>{patient.f_name} {patient.l_name}</span></p>
              <p>Gender: <span> {patient.gender}</span></p>
              <p>Date of Birth: <span>{patient.dob}</span></p>
              <p>HKID: <span>{patient.hkid}</span></p>
              <p>Email: <span>{patient.email}</span></p>
              <p>Allergies: <span>{patient.drug_allergy}</span></p>
              </Card>

              <Card className='doctor_card'>
                <p>Diagnosis</p>
              <input
                type="text"
                value={diagnosis}
                onChange={(e) => {
                  setDiagnosis(e.target.value)
                  setPatientId(patient.id)
                }}
              />
              </Card>

              <Button 
              className='buttonOne m-3'
              onClick={clickDoctor}>Next Patient</Button>

              <Button 
              className='buttonOne m-3'
              onClick={getHistory(patient.id)}>TEST</Button>
              
              <Button
              className='buttonOne m-3'
                onClick={postDiagnosis(
                  patient.appointmentHistoryID,
                  diagnosis,
                  true,
                  true
                )}
              >
                TEST SENDING
              </Button>
              {/* {diagnosis} */}
              {patient.history.length == 0 ?
                <p>"No history found for the patient"</p> : patient.history.map((patientHistory) => {
                  return (
                    <div>
                      <Accordion>
                        <Accordion.Item eventKey={patient.id}>
                          <Accordion.Header>Previous Visit{patient.created_at}</Accordion.Header>
                          <Accordion.Body>
                            <p>Diagnosis: {patientHistory.diagnosis}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  )
                })
              }
              <Form>
                {drugInventry.map((drugOBJ, index) => (
                  <Form.Check
                  key={`drug-key-${index}`}
                    name="drugs"
                    type="checkbox"
                    onChange={onChangePrescription}
                    value={drugOBJ.sku}
                    label={`${drugOBJ.drug}: Dosage:${drugOBJ.dosage}mg.`}
                    checked={drugs.includes(`${drugOBJ.sku}`) ? true : false}
                  />
                ))}
              </Form>
            </div>
          }) : <h2>No patients in queue for Dr. {doctor.fullName} </h2>}
          </Container>
    </div>
  );
}
