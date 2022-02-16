import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { emit, NEXT } from "../redux/webSocets/actions";
import { Container, Card, Button } from "react-bootstrap";
import PatientHistoryComponent from "./PatientHistoryComponent";
import { getHistory, postDiagnosis } from "../redux/patientHistory/actions";


export default function DoctorComponent(props) {
  const business = useSelector((state) => state.businessObjectStore);
  const drugInventry = useSelector((state) => state.pharmacyStore);
  const historyStore = useSelector((state) => state.historyStore)
  const [appointmentHistoryId, setAppointmentHistoryId] = useState("");
  const [sickLeave, setSickLeave] = useState(false);
  const [followUp, setFollowUp] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");
  let [drugs, setDrugs] = useState([]);
  const dispatch = useDispatch();

  let doctor = business[`${props.id}`];

  const clickDoctor = () => {
    dispatch(
      postDiagnosis(appointmentHistoryId, diagnosis, followUp, sickLeave)
    );
    emit(NEXT, { doctor: props.id, prescribedDrugs: drugs });
    setDrugs([]);
    setDiagnosis("");
    setFollowUp(false);
    setSickLeave(false);
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
        {doctor == undefined ? (
          "Select Doctor to continue"
        ) : doctor.queue.length !== 0 ? (
          doctor.queue
            .filter((first) => first == doctor.queue[0])
            .map((patient) => {
              return (
                <div key={patient.id}>
                  <h2 className="ms-5">Dr. {doctor.fullName}</h2>

                  <Card className="doctor_card">
                    <h5 className="doctor_title my-2">Patient Info</h5>
                    <p>{patient.appointmentHistoryID}</p>
                    <p>
                      Name:{" "}
                      <span>
                        {patient.f_name} {patient.l_name}
                      </span>
                    </p>
                    <p>
                      Gender: <span> {patient.gender}</span>
                    </p>
                    <p>
                      Date of Birth: <span>{patient.dob} AGE: {new Date().getFullYear() - new
                      Date(patient.dob).getFullYear()}</span>
                    </p>
                    <p>
                      HKID: <span>{patient.hkid}</span>
                    </p>
                    <p>
                      Email: <span>{patient.email}</span>
                    </p>
                    <p>
                      Allergies: <span>{patient.drug_allergy}</span>
                    </p>
                  </Card>

                  <Card className="doctor_card">
                    <p>Diagnosis</p>
                    <input
                      type="text"
                      value={diagnosis}
                      onChange={(e) => {
                        setDiagnosis(e.target.value);
                        setAppointmentHistoryId(patient.appointmentHistoryID);
                      }}
                    />

                    <Form>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            label="Sick Leave"
                            name="sickLeave"
                            type={type}
                            id={`inline-${type}-1`}
                            onChange={() => setSickLeave(true)} /* need better logic for this */
                            checked={sickLeave}
                          />
                          <Form.Check
                            label="Follow - up"
                            name="followUp"
                            type={type}
                            id={`inline-${type}-2`}
                            onChange={() => setFollowUp(true)} /* need better logic for this */
                            checked={followUp}
                          />
                        </div>
                      ))}
                    </Form>
                  </Card>

                  <Button className="buttonOne m-3" onClick={clickDoctor}>
                    Next Patient
                  </Button>
                  <Button className="buttonOne m-3" onClick={() => dispatch(getHistory(patient.id))}>
                    Check Patient's history
                  </Button>
                    <PatientHistoryComponent history={[...historyStore]}/>

                  {historyStore[0] == undefined ? "Click to show history" : ""}

                  {/* {patient.history.length == 0 ? (
                    <p>"No history found for the patient"</p>
                  ) : (
                    patient.history.map((patientHistory) => {
                      return (
                        <div>
                          <Accordion>
                            <Accordion.Item eventKey={patient.id}>
                              <Accordion.Header>
                                Previous Visit{patient.created_at}
                              </Accordion.Header>
                              <Accordion.Body>
                                <p>Diagnosis: {patientHistory.diagnosis}</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      );
                    })
                  )} */}

                  <Form>
                    {drugInventry.map((drugOBJ, index) => (
                      <Form.Check
                        key={`drug-key-${index}`}
                        name="drugs"
                        type="checkbox"
                        onChange={onChangePrescription}
                        value={drugOBJ.sku}
                        label={`${drugOBJ.drug}: Dosage:${drugOBJ.dosage}mg.`}
                        checked={
                          drugs.includes(`${drugOBJ.sku}`) ? true : false
                        }
                      />
                    ))}
                  </Form>
                </div>
              );
            })
        ) : (
          <h2>No patients in queue for Dr. {doctor.fullName} </h2>
        )}
      </Container>
    </div>
  );
}
