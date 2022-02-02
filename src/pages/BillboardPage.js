import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BillboardComponent from '../component/BillboardComponent'
import socketIOClient from 'socket.io-client';


const Billboard = () => {
    let token = localStorage.getItem("token");

    const apiStore = useSelector((state) => state.apiStore)
    const stores = useSelector((state) => state)
    const currentBusinessId = localStorage.getItem("businessId");
    const [socket, setSocket] = useState(null);

    const [bisObj, setBisObj] = useState(null)

    console.log(stores)
    console.log(apiStore)

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
            setBisObj(data)
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
        <>
            {/* {bisObj ?

                <p>{bisObj[1].f_name }</p>: " "} */}
                hi
        </>

        // <div>
        //     <p>Hi! Welcome to Billboard page!</p>
        //     {apiStore.doctors
        //         ? apiStore.doctors
        //             .filter((childDoc) => childDoc.business_id == currentBusinessId)
        //             .map((eachDoc, i) => (
        //                 <div key={i}>{eachDoc.f_name} {eachDoc.l_name}</div>
        //             )) : "HIRE DOCTORS!"}
        // </div>
    );
};

export default Billboard;