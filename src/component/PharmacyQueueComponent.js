import React, {useEffect} from "react";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { emit, socket, UPDATE_PATIENT } from "../redux/webSocets/actions";
import {useSelector, useDispatch} from 'react-redux'

const PharmacyQueueComponent = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on(UPDATE_PATIENT, () => {
      dispatch(loadBusinessObjThunk(1));
    });
    return () => {
      socket.off(UPDATE_PATIENT);
    };
  }, [dispatch]);
  const clickPharmacy = () => {
    emit("NEXT", { business: 1, doctor: "pharmacy" });
  };

  console.log(props);
  return (
    <div>
      {props.pharmacy ? props.pharmacy.queue.map((e) => <p>{e.f_name}</p>) : "no Q"}
      <button onClick={clickPharmacy}>Advance Pharmacy Queue</button>
    </div>
  );
};

export default PharmacyQueueComponent;
