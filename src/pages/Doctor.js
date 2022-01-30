import React, { useState, useEffect } from "react";
import { loadApiThunk } from "../redux/api/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Doctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const auth = useSelector((state) => state.authStore.isAuthenticated);
    const currentBusinessId = localStorage.getItem("businessId")
    console.log(currentBusinessId) // works
// const [doctors, setDoctors] = useState("")
  const apiStore = useSelector((state) => state.apiStore)
  useEffect(() => {
      if (auth !== true) {
        navigate("/login");
      }
      dispatch(loadApiThunk());
      // console.log(apiStore.business) // no need business for now
      console.log(apiStore.doctors)
    }, [auth, navigate]);
    console.log(currentBusinessId == apiStore.doctors[2].business_id)
  
  return (
    <div>
      <p>Hi! Welcome to Doctors Page!</p>
      {apiStore.doctors ? apiStore.doctors.filter((childDoc) => childDoc.business_id == currentBusinessId).map((eachDoc) => <p>{eachDoc.f_name}</p>) : "You don't have any doctors! GEH!"}
    </div>
  );
};

export default Doctor;
