import React, { useState, useEffect } from "react";
import { loadApiThunk } from "../redux/api/actions";
import { useDispatch } from "react-redux";
import { Button } from "bootstrap";
const Doctor = (props) => {
  const dispatch = useDispatch();
  const currentBusinessId = localStorage.getItem("businessId");
  useEffect(() => {
    dispatch(loadApiThunk());
    console.log(props.apiStore.doctors);
  }, []);

  return (
    <div>
      <p>Hi! Welcome to Doctors Page!</p>
      {props.apiStore.doctors
        ? props.apiStore.doctors
            .filter((childDoc) => childDoc.business_id == currentBusinessId)
            .map((eachDoc, i) => (
                <a href={`/doctor/${eachDoc.id}`}>Doctor {eachDoc.f_name} {eachDoc.l_name}'s room </a>
            ))
        : "You don't have any doctors! GEH!"}
    </div>
  );
};

export default Doctor;
