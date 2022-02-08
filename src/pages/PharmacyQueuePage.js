import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PharmacyQueueComponent from "../component/PharmacyQueueComponent";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { useNavigate } from "react-router-dom";

const PharmacyQueuePage = () => {
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);


  return (
    <div>
      Pharmacy Queue
      <PharmacyQueueComponent />
    </div>
  );
};

export default PharmacyQueuePage;
