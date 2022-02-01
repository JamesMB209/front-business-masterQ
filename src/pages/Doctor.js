import React, { useState, useEffect } from "react";
import { loadApiThunk } from "../redux/api/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DoctorComponent from '../component/DoctorComponent'

const Doctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const apiStore = useSelector((state) => state.apiStore);

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
    dispatch(loadApiThunk());
  }, [auth, navigate]);

  const currentBusinessId = localStorage.getItem("businessId");

  return (
    <div>
      <p>Hi! Welcome to Doctors Page!</p>
      {apiStore.doctors
        ? apiStore.doctors
        .filter((childDoc) => childDoc.business_id == currentBusinessId)
        .map((eachDoc, i) => (
          <DoctorComponent {...eachDoc}/>
            ))
            : "You don't have any doctors! GEH!"}
    </div>
  );
};

export default Doctor;
