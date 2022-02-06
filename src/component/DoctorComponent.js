import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { loadDoctorObjThunk } from "../redux/doctorObj/actions";

export default function DoctorComponent(props) {
  const doctorObjectStore = useSelector((state) => state.doctorObjectStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadDoctorObjThunk({ business: props.business_id, doctor: props.id }));

  }, [loadDoctorObjThunk])

  console.log(props);
  console.log(doctorObjectStore)
  const queue = doctorObjectStore.queue[0]
  return (
    <div>
      <p>more info</p>
      {/* {doctorObjectStore.queue.map((e) => <h1>{e.f_name}</h1>)} */}
      {queue.f_name}{" "}
      {queue.l_name}<br />
      {queue.dob}<br /> {/** get age? */}
      {queue.gender}<br />
      {queue.history}<br />
      {queue.phone}<br />
      {queue.hkid}<br />
      {queue.drug_allergy}<br />
      <button>Next Patient</button>
    </div>
  );
}
