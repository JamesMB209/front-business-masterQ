import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';


const BillboardComponent = (props) => {
    let token = localStorage.getItem("token");
    //     const currentBusinessId = localStorage.getItem("businessId");
    //     const [socket, setSocket] = useState(socketIOClient(process.env.REACT_APP_API_SERVER, {
    //         transports: ['websocket'],
    //         query: { token }
    //     }))

    //     // useEffect(() => {
    //     //     setSocket(socketIOClient(process.env.REACT_APP_API_SERVER, {
    //     //         transports: ['websocket'],
    //     //         query: { token }
    //     //     }))
    //     // }, []);
    // console.log(props)
    //     useEffect(() => {
    // socket.emit("billboard", currentBusinessId)
    //     }, [socket])

    const [socket, setSocket] = useState(null);

    //Set up socket connection
    useEffect(() => {
        setSocket(socketIOClient(process.env.REACT_APP_API_SERVER, {
            transports: ['websocket'],
            query: { token }
        }))
        console.log("billboard component connected")
    }, []);

    useEffect(() => {
        if (!socket) return;

        socket.on("UPDATE_BILLBOARD", (data) => {
            console.log(data)
        })
        console.log("trigged")
        socket.emit("refreshDat")
    }, [socket]);

    useEffect(() => {
        if (!socket) return
        return () => socket.disconnect();
    }, [socket])

    return (
        <div key={props.id}>
            Dr. {props.f_name} {props.l_name}
        </div>
    );
};

export default BillboardComponent;