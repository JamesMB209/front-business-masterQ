import React, {useEffect} from 'react';
import ChangePasswordComponent from '../component/ChangePasswordComponent';
import ChangeDoctorStatusComponent from '../component/ChangeDoctorStatusComponent'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ChangeDoctorRoomComponent from '../component/ChangeDoctorRoomComponent';
import { emit, RELOAD } from '../redux/webSocets/actions';
import { Button } from 'react-bootstrap';
import { getAllDoctors } from "../redux/settings/actions";


const Settings = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);

  dispatch(getAllDoctors())
const reloadButton = () => {
  emit(RELOAD)
}

    return (
        <div>
            <p>Hi! Welcome to Settings!</p>
            <ChangePasswordComponent />
            <ChangeDoctorRoomComponent />
            <ChangeDoctorStatusComponent />
            <Button variant='danger' onClick={reloadButton}>Reload</Button>
        </div>
    );
};

export default Settings;