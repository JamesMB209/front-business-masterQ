import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { loadDoctorObjThunk } from "../redux/doctorObj/actions";
import { emit, socket, UPDATE_PATIENT } from "../redux/webSocets/actions";

export default function DoctorComponent(props) {
  const doctorObjectStore = useSelector((state) => state.doctorObjectStore);
  const dispatch = useDispatch();
  const connection = { business: props.business_id, doctor: props.id }; // make it a string?

  useEffect(() => {
    socket.on(UPDATE_PATIENT, () => {
      dispatch(loadDoctorObjThunk(connection));
    });
    return () => {
      socket.off(UPDATE_PATIENT);
    };
  }, [connection, dispatch]);
  const clickDoctor = () => {
    emit("NEXT", connection);
  };
  console.log(props);
  console.log(doctorObjectStore.queue);
  ///////////////////////////////////////////////////////////////////////////////////////
  // /** Set up listners */
  // useEffect(() => {
  //   if ([CHECKIN, DOCTOR, PHARMACY].includes(state)) {
  //     socket.on(UPDATE_PATIENT, () => {
  //       dispatch(loadObjThunk(connection));
  //     });
  //   }
  //   return () => {
  //     socket.off(UPDATE_PATIENT);
  //   };
  // }, [state, connection, dispatch]);
  //
  // /** TESTING CODE FOR A FAKE DOCTOR AND PHARMACY BUTTON TO BE REMOVED */
  // const clickPharmacy = () => {
  //   emit("NEXT", { business: connection.business, doctor: "pharmacy" });
  // };
  // /** TESTING CODE FOR A FAKE DOCTOR AND PHARMACY BUTTON TO BE REMOVED */
  // const clickDoctor = () => {
  //   emit("NEXT", connection);
  // };
  // /** TESTING CODE FOR A FAKE DOCTOR AND PHARMACY BUTTON TO BE REMOVED */
  ///////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <p>more info</p>
      {doctorObjectStore.queue ? doctorObjectStore.queue
        .filter(
          (currentPatient) => currentPatient == doctorObjectStore.queue[0]
        )
        .map((patient) => {
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
