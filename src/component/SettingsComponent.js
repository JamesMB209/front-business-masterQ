import React, { useState } from 'react';

const SettingsComponent = () => {
    const [newPassword, setNewPassword] = useState("");
    const [verifyNewPassword, setVerifyNewPassword] = useState("")
    const passwordCheck = (newPassword, verifyNewPassword) => {
        if (newPassword !== verifyNewPassword) {
            alert("Password does not match! Please try again!")
            setNewPassword("");
            setVerifyNewPassword("");
        } else {
            alert("Password changed successfully!")
            setNewPassword("");
            setVerifyNewPassword("");
        }
    }

    return (
      <div>
        <p>Settings Component - Change Password</p>
        <label>New Password:</label>
        <br />
        <input
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <label>New Password:</label>
        <br />
        <input
          type="text"
          value={verifyNewPassword}
          onChange={(e) => setVerifyNewPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={() => passwordCheck(newPassword, verifyNewPassword)}>Change Password</button>
        <p>Settings Component - Modify Doctors</p>
      </div>
    );
};

export default SettingsComponent;