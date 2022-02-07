import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BillboardComponent from "../component/BillboardComponent";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { useNavigate } from "react-router-dom";

const Billboard = () => {
  let currentBusinessId = localStorage.getItem("businessId");
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  useEffect(() => {
    dispatch(loadBusinessObjThunk(currentBusinessId));
  }, []);
  delete businessObjectStore.data;
  delete businessObjectStore.pharmacy;

  console.log(businessObjectStore);
  return (
    <>
      {/* {businessObjectStore ? businessObjectStore.map((object) => (
          object.f_name)): "ruh rou"} */}
      <BillboardComponent {...businessObjectStore} />
    </>
  );
};

export default Billboard;
