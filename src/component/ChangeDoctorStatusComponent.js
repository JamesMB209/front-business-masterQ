import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom, changeDoctorStatus, getAllDoctors } from "../redux/settings/actions";
import Form from "react-bootstrap/Form";
const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore);
  const business = useSelector((state) => state.businessObjectStore);
  const settings = useSelector((state) => state.settingsStore)

  const dispatch = useDispatch()
  console.log(doctors);
  console.log(settings)
  return (
    <div>
      <p>Change doctor status</p>
      {settings.filter((e) => e.employed !== false).map((e) => {
        return (
          <div>
            <p>Dr. {e.f_name} {e.l_name}</p>
            <button onClick={() => dispatch(changeDoctorStatus(e.id, false, true))}>Not working today/Inactive</button>
            <button onClick={() => dispatch(changeDoctorStatus(e.id, false, false))}>Unemployed</button>
            <button onClick={() => dispatch(changeDoctorStatus(e.id, true, true))}>Working today/Active</button>
          </div>
        )
      })}
      <p>List of Inactive doctors</p>
      {settings.filter((e) => e.employed !== true).map((e) => {
        return (
          <div>
            <p>Dr. {e.f_name} {e.l_name}</p>
            <button onClick={() => dispatch(changeDoctorStatus(e.id, true, true))}>Bring me back!</button>
          </div>
        )
      })}
    </div>
  )
};

export default ChangeDoctorStatusComponent;
