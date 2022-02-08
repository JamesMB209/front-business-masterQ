import React, {useEffect} from 'react';
import ChangePasswordComponent from '../component/ChangePasswordComponent';
import ChangeDoctorStatusComponent from '../component/ChangeDoctorStatusComponent'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ChangeDoctorRoomComponent from '../component/ChangeDoctorRoomComponent';

const Settings = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);
    return (
        <div>
            <p>Hi! Welcome to Settings!</p>
            <ChangePasswordComponent />
            <ChangeDoctorRoomComponent />
            <ChangeDoctorStatusComponent />
        </div>
    );
};

export default Settings;