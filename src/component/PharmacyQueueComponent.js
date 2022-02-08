import React, { useEffect } from "react";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";
import { emit, NEXT, socket, UPDATE_PATIENT } from "../redux/webSocets/actions";
import { useSelector } from "react-redux";

const PharmacyQueueComponent = () => {
  const clickPharmacy = () => {
    emit(NEXT, { doctor: "pharmacy" });
  };

  const props = useSelector((state) => state.businessObjectStore.pharmacy);

  console.log(props);
  return (
    <div>
      {props === undefined ? (
        "No patients waiting in the pharmacy line."
      ) : (
        <div>
          <button onClick={clickPharmacy}>Advance Pharmacy Queue</button>
          <br />
          {props.queue.map((patient) => {
            return (
              <div>
                <p>{patient.f_name} {patient.l_name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PharmacyQueueComponent;
