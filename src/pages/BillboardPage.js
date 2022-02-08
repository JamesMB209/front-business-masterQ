import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BillboardComponent from "../component/BillboardComponent";
import { useNavigate } from "react-router-dom";

const Billboard = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <>
      <BillboardComponent />
    </>
  );
};

export default Billboard;
