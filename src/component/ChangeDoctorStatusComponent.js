import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeDoctorRoom, changeDoctorStatus, getAllDoctors } from "../redux/settings/actions";
import Form from "react-bootstrap/Form";

import { Button, Card } from 'react-bootstrap'

const ChangeDoctorStatusComponent = () => {
  const doctors = useSelector((state) => state.apiStore);
  const business = useSelector((state) => state.businessObjectStore);
  const settings = useSelector((state) => state.settingsStore)

  const dispatch = useDispatch()
  // console.log(doctors);
  // console.log(settings)
  return (
    <div>
      <Card.Title>
      <h5 className='setting_title my-2'>Change doctor status</h5>
      </Card.Title>
    
      {settings.filter((e) => e.employed !== false).map((e) => {
        return (
          <div key={e.id}>
            <p className='setting_doctor my-3'>Dr. {e.f_name} {e.l_name}</p>
            <Button 
            className='buttonOneSh mx-2'
            onClick={() => dispatch(changeDoctorStatus(e.id, true, true))}>On Duty</Button>

            <Button 
            className='buttonTwoSh mx-2'
            onClick={() => dispatch(changeDoctorStatus(e.id, false, true))}>Off Duty</Button>

            <Button 
            className='buttonDangerSh mx-2'
            onClick={() => dispatch(changeDoctorStatus(e.id, false, false))}>Delete</Button>
            
          </div>
        )
      })}
      <p className='setting_title my-2'>List of Inactive doctors</p>
      {settings.filter((e) => e.employed !== true).map((e) => {
        return (
          <div key={e.id}>
            <span>Dr. {e.f_name} {e.l_name}</span>
            <Button 
            className='buttonOneSh m-4'
            onClick={() => dispatch(changeDoctorStatus(e.id, true, true))}>Bring me back!</Button>
          </div>
        )
      })}
    </div>
  )
};

export default ChangeDoctorStatusComponent;
