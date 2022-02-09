// for changing the password
import axios from "axios";

export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_DOCTOR_STATUS_SUCCESS = "CHANGE_DOCTOR_STATUS_SUCCESS";
export const CHANGE_DOCTOR_ROOM_SUCCESS = "CHANGE_DOCTOR_ROOM_SUCCESS";
export const GET_DOCTORS_SUCCESS = "GET_DOCTORS_SUCCESS";

export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";
export const CHANGE_DOCTOR_STATUS_FAILURE = "CHANGE_DOCTOR_STATUS_FAILURE";
export const CHANGE_DOCTOR_ROOM_FAILURE = "CHANGE_DOCTOR_ROOM_FAILURE";
export const GET_DOCTOR_FAILURE = "GET_DOCTOR_FAILURE"

export const changePasswordThunk = (secret, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/api/update`,
      {
        type: "business_users",
        secret: secret,
        password: password,
      }
    );
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, data: { secret, password } });
    console.log(response);
    console.log(`response from line 62 in auth actions`, response);
  } catch (err) {
    console.log(err);
    dispatch({ type: CHANGE_PASSWORD_FAILURE });
  }
};

export const changeDoctorStatus = (doctor, active, employed) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/setting/status`,
      {
          doctor: doctor,
        active: active,
        employed: employed,
      }
    );
    console.log(response);
    console.log("clicked")
    dispatch({type: CHANGE_DOCTOR_ROOM_SUCCESS, data: response.data})
  } catch (error) {
    console.log(error);
  }
};

export const changeDoctorRoom = (room, id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/setting/room`,
      {
        room: room,
        id: id,
      }
    );
    dispatch({ type: CHANGE_DOCTOR_ROOM_SUCCESS, data: { room, id } });
    console.log(response);
  } catch (err) {
    console.log(err);
    dispatch({ type: CHANGE_DOCTOR_ROOM_FAILURE });
  }
};

export const getAllDoctors = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token")
    const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/setting/alldoctors`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(response.data)
    dispatch({type: GET_DOCTORS_SUCCESS, data: response.data})
  } catch (err) {
    console.log(err)
  }
}