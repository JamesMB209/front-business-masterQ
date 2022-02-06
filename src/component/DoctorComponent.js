import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import socketIOClient from "socket.io-client";
import { loadBusinessObjThunk } from "../redux/businessObj/actions";

import { loadApiThunk } from "../redux/api/actions";

export default function DoctorComponent(props) {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  // const currentBusinessId = localStorage.getItem("businessId");
  const [socket, setSocket] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [queueLength, setQueueLength] = useState("");

  let store = useSelector((state) => state);
  console.log(store);

  // useEffect(() => {
  //   loadBusinessObjThunk(currentBusinessId);
  // }, []);

  console.log(props);
  return (
    <div>
      <p>more info</p>
      {/* {socket.on("UPDATE_DOCTOR", (data) => {
        
      })} */}
      <p>
        Dr. {props.f_name} {props.l_name}
      </p>
      <p>{patientName}</p>
      <p>{queueLength}</p>

      <Button
        onClick={() => {
          socket.emit("NEXT", {
            business: props.business_id,
            doctor: props.id,
          });
        }}
      >
        Next
      </Button>
    </div>
  );
}
