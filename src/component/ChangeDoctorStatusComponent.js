import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom } from "../redux/settings/actions";

const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore.doctors);
  const currentBusinessId = localStorage.getItem("businessId");
  const [roomNumber, setRoomNumber] = useState("")
  const dispatch = useDispatch()

  console.log(doctors);
 

   return (
     <div>
       {doctors
         ? doctors
             .filter((filter) => {
               return filter.business_id == currentBusinessId;
             })
             .map((doctor, i) => {
               return (
                 <div key={i}>
                   <p>
                     {doctor.f_name} {doctor.l_name}
                   </p>
                 </div>
               );
             })
         : "ruh"}
       <p>Settings Component - Modify Doctors</p>
       Hello!, Hello! 1. Assign Rooms
     </div>
   );
};

export default ChangeDoctorStatusComponent;
