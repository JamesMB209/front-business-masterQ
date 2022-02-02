import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import socketIOClient from 'socket.io-client';

import { loadApiThunk } from "../redux/api/actions";

export default function DoctorComponent(props) {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  const [socket, setSocket] = useState(null)
  const [patientName, setPatientName] = useState("")
  const [queueLength, setQueueLength] = useState("")


  let store = useSelector((state) => state);
  console.log(store)

  //Set up socket connection
  useEffect(() => {
    setSocket(socketIOClient(process.env.REACT_APP_API_SERVER, {
      transports: ['websocket'],
      query: { token }
    }))
  }, []);

  //Set up listeners and close conection if they die.
  useEffect(() => {
    if (!socket) return;
    socket.emit("JOIN_ROOM", { business: props.business_id, doctor: props.id });

    // socket.on("UPDATE_PATIENT", () => {
    //   socket.emit("GET_QUEUE_POSTITION", { ...queueStore });
    // })
    // socket.on(token, (data) => {
    //   console.log(data)
    // })

    socket.emit("UPDATE_DOCTOR", {
      business: props.business_id,
      doctor: props.id,
    });

    socket.on(token, (data) => {
      setPatientName(data.queue[0].f_name)
      console.log(data)
    })

  }, [patientName]);

  useEffect(() => {
    if(!socket) return
    return () => socket.disconnect();
  }, [])


  console.log(props)
  return (
    <div>
      <p>more info</p>
      {/* {socket.on("UPDATE_DOCTOR", (data) => {
        
      })} */}
      <p>Dr. {props.f_name} {props.l_name}</p>
      <p>{patientName}</p>
      <p>{queueLength}</p>

      <Button onClick={() => { socket.emit("NEXT", { business: props.business_id, doctor: props.id }) }}>Next</Button>
    </div>
  );
};

