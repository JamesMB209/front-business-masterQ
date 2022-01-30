import React, { useEffect } from "react";
import { loadBusinessThunk, loadDoctorsThunk } from "../redux/api/actions";
import { useDispatch, useSelector } from "react-redux";

const Doctor = () => {
  const dispatch = useDispatch();
  const doctorStore = useSelector((state) => state.doctorStore)
  useEffect(() => {
    dispatch(loadDoctorsThunk());
    dispatch(loadBusinessThunk())
    console.log(doctorStore)
  }, []);
  return (
    <div>
      <p>Hi! Welcome to Doctors Page!</p>
      {/* <button>
        <a></a>
      </button> */}
    </div>
  );
};

export default Doctor;
