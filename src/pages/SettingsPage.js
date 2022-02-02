import React from 'react';
import ChangePasswordComponent from '../component/ChangePasswordComponent';
import ChangeDoctorStatusComponent from '../component/ChangeDoctorStatusComponent'

const Settings = () => {
    return (
        <div>
            <p>Hi! Welcome to Settings!</p>
            <ChangePasswordComponent />
            <ChangeDoctorStatusComponent />
        </div>
    );
};

export default Settings;