import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PharmacyQueueComponent from "../component/PharmacyQueueComponent";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { useNavigate } from "react-router-dom";

const PharmacyQueuePage = () => {
  const currentBusinessId = localStorage.getItem("businessId");
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  useEffect(() => {
    dispatch(loadBusinessObjThunk(currentBusinessId));
  }, [businessObjectStore]);

  return (
    <div>
      pharmacyQ
      <PharmacyQueueComponent {...businessObjectStore} />
    </div>
  );
};

export default PharmacyQueuePage;
