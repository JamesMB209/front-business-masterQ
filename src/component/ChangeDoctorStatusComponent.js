import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom } from "../redux/settings/actions";

const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore.doctors);
  const business = useSelector((state) => state.businessObjectStore);

  const dispatch = useDispatch()

  console.log(doctors);
 

   return (
     <div>
       {doctors
         ? doctors
             .filter((filter) => {
               return filter.business_id == business[1].businessID;
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
       Hello!, Hello! 1. Change active/employed status
     </div>
   );
};

export default ChangeDoctorStatusComponent;
