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

  return (
    <div>
      <DoctorComponent apiStore={apiStore}/>
    </div>
  );
};

export default Doctor;
