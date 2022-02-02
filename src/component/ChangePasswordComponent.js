import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePasswordThunk } from '../redux/settings/actions';

const ChangePasswordComponent = () => {
  const [secret, setSecret] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [verifyNewPassword, setVerifyNewPassword] = useState("")
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  // const passwordCheck = (newPassword, verifyNewPassword) => {
  // }
  const changePassword = () => {
    if (newPassword == verifyNewPassword) {
      alert("Password changed successfully!")
      dispatch(changePasswordThunk(secret, verifyNewPassword))
      console.log(newPassword)
      console.log(verifyNewPassword)
      // setNewPassword("");
      // setVerifyNewPassword("");
    } else {
      console.log("Call Your Manager!")
      setError("Passwords do not match!")
      setNewPassword("");
      setVerifyNewPassword("");
    }
    
  }

  return (
    <div>

      <p>Settings Component - Change Password</p>
      <input type="text" value={secret} onChange={(e) => {setSecret(e.target.value)
      setError(null)}} placeholder='Enter secret' />
      <br />
      <input
        type="text"
        value={newPassword}
        onChange={(e) => {
          setError(null)
          setNewPassword(e.target.value)}}
        placeholder='Enter new password'
      />
      <br />
      <input
        type="text"
        value={verifyNewPassword}
        onChange={(e) => setVerifyNewPassword(e.target.value)}
        placeholder='Confirm password'
      />
      <br />
      {error}
      <br />
      <button type="submit" onClick={() => changePassword()}>Change Password</button>
      <br />
      <br />

    </div>
  );
};

export default ChangePasswordComponent;