import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Button, Row, Col, Stack } from "react-bootstrap";
import { emit, NEXT } from "../redux/webSocets/actions";
import PatientHistoryComponent from "./PatientHistoryComponent";
import {
  getDiagnosis,
  getHistory,
  postDiagnosis,
} from "../redux/patientHistory/actions";

export default function DoctorComponent(props) {
  const business = useSelector((state) => state.businessObjectStore);
  const drugInventry = useSelector((state) => state.pharmacyStore);
  const historyStore = useSelector((state) => state.historyStore);
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
    emit(NEXT, {
      doctor: props.id,
      prescribedDrugs: drugs,
      documentation: { sickLeave: sickLeave, followUp: followUp },
    });
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
        {doctor == undefined ? (
          "Select Doctor to continue"
        ) : doctor.queue.length !== 0 ? (
          doctor.queue
            .filter((first) => first == doctor.queue[0])
            .map((patient) => {
              return (
                <div>
                  <h2 className="ms-5">Dr. {doctor.fullName}</h2>
                  <Row>
                    <Col lg={6} sm={12}>
                      <Card className="doctor_card">
                        <h5 className="doctor_title my-1 mb-5">Patient Info</h5>
                        <p>
                          Name:{" "}
                          <span>
                            {patient.f_name} {patient.l_name}
                          </span>
                        </p>
                        <p>
                          {" "}
                          Gender: <span> {patient.gender}</span>
                        </p>

                        <p>
                          Date of Birth:{" "}
                          <span>
                            {new Date(patient.dob).getFullYear()}-
                            {new Date(patient.dob).getMonth()}-
                            {new Date(patient.dob).getDate()}
                          </span>{" "}
                        </p>

                        <p>
                          {" "}
                          Age:{" "}
                          <span>
                            {" "}
                            {new Date().getFullYear() -
                              new Date(patient.dob).getFullYear()}
                          </span>
                        </p>

                        <p>
                          H.K.I.D.: <span>{patient.hkid}</span>
                        </p>
                        <p>
                          Email: <span>{patient.email}</span>
                        </p>
                        <p>
                          Allergies: <span>{patient.drug_allergy}</span>
                        </p>
                      </Card>
                    </Col>

                    {/* {diagnosis} */}
                    <Col lg={6} sm={12}>
                      <Card className="doctor_card">
                        <h5 className="doctor_title my-1 mb-3">
                          Visit History
                        </h5>
                        <p className="ms-4 mt-2">
                          {historyStore[0] == undefined
                            ? "Click to show history"
                            : ""}{" "}
                        </p>
                        <Button
                          className="buttonOneSh m-4"
                          onClick={() => dispatch(getHistory(patient.id))}
                        >
                          Check Patient's history
                        </Button>
                        <PatientHistoryComponent history={[...historyStore]} />
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={12}>
                      <Card className="doctor_card_diagnosis">
                        <h5 className="doctor_title my-1 mb-3">Diagnosis</h5>
                        <input
                          className="diagnosis_input"
                          placeholder="type diagnosis here"
                          type="text"
                          value={diagnosis}
                          onChange={(e) => {
                            setDiagnosis(e.target.value);
                            setAppointmentHistoryId(
                              patient.appointmentHistoryID
                            );
                          }}
                        />
                        <Form>
                          {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="m-3">
                              <Form.Check
                                label="Sick Leave"
                                name="sickLeave"
                                type={type}
                                id={`inline-${type}-1`}
                                onChange={() =>
                                  setSickLeave(true)
                                } /* need better logic for this */
                                checked={sickLeave}
                              />
                              <Form.Check
                                label="Follow - up"
                                name="followUp"
                                type={type}
                                id={`inline-${type}-2`}
                                onChange={() =>
                                  setFollowUp(true)
                                } /* need better logic for this */
                                checked={followUp}
                              />
                            </div>
                          ))}
                        </Form>
                        <h5 className="doctor_title my-3 mb-3">
                          Drug Prescription
                        </h5>
                        <Form className="mt-5">
                          {drugInventry.map((drugOBJ, index) => (
                            <Form.Check
                              className="drug_name"
                              key={`drug-key-${index}`}
                              name="drugs"
                              type="checkbox"
                              onChange={onChangePrescription}
                              value={drugOBJ.sku}
                              label={`${drugOBJ.drug}
                    :${drugOBJ.dosage}mg.`}
                              checked={
                                drugs.includes(`${drugOBJ.sku}`) ? true : false
                              }
                            />
                          ))}
                          <div className="doctor_button">
                            <Button
                              className="buttonTwo m-3"
                              onClick={clickDoctor}
                            >
                              Next Patient
                            </Button>
                          </div>
                        </Form>
                      </Card>
                    </Col>
                  </Row>
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
