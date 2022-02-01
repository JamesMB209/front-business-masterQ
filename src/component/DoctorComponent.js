import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "bootstrap";
import socketIOClient from 'socket.io-client';

import { loadApiThunk } from "../redux/api/actions";

export default function DoctorComponent (props) {

  const dispatch = useDispatch();
  const currentBusinessId = localStorage.getItem("businessId");
  const [socket, setSocket] = useState(null)

  let store = useSelector((state) => state);

  console.log(store)

  //Set up socket connection
  let token = localStorage.getItem("token");

  useEffect(() => {
    setSocket(socketIOClient(process.env.REACT_APP_API_SERVER, {
      transports: ['websocket'],
      query: { token }
    }))
  }, []);

  //Set up listeners and close conection if they die.
  useEffect(() => {
    if (!socket) return;
    socket.emit("JOIN_ROOM", { business:props.business_id, doctor:props.id });

    // socket.on("UPDATE_PATIENT", () => {
    //   socket.emit("GET_QUEUE_POSTITION", { ...queueStore });
    // })

    return () => socket.disconnect();
  }, [socket]);


  console.log(props)
  return (
    <div>
      <p>more info</p>

    <Button onClick={() => { socket.emit("NEXT",  { business:props.business_id, doctor:props.id }) }}>Next</Button>
    </div>
  );
};

