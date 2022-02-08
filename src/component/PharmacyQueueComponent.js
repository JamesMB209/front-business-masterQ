import React, {useEffect} from "react";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { emit, NEXT, socket, UPDATE_PATIENT } from "../redux/webSocets/actions";
import { useSelector } from "react-redux";


const PharmacyQueueComponent = () => {

  const clickPharmacy = () => {
    emit(NEXT, {doctor: "pharmacy" });
  };

  const props = useSelector((state) => state.businessObjectStore.pharmacy);

  console.log(props);
  return (
    <div>
      {props ? props.queue.map((e) => <p>{e.f_name}</p>) : "no Q"}
      <button onClick={clickPharmacy}>Advance Pharmacy Queue</button>
    </div>
  );
};

export default PharmacyQueueComponent;
