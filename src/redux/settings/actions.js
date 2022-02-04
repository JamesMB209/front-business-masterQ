// for changing the password
import axios from "axios";

export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_DOCTOR_STATUS_SUCCESS = "CHANGE_DOCTOR_STATUS_SUCCESS";
export const CHANGE_DOCTOR_ROOM_SUCCESS = "CHANGE_DOCTOR_ROOM_SUCCESS";

export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";
export const CHANGE_DOCTOR_STATUS_FAILURE = "CHANGE_DOCTOR_STATUS_FAILURE";
export const CHANGE_DOCTOR_ROOM_FAILURE = "CHANGE_DOCTOR_ROOM_FAILURE";

export const changePasswordThunk = (secret, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/update`, {
            type: "business_users", secret: secret, password: password
        });
        dispatch({ type: CHANGE_PASSWORD_SUCCESS, data: { secret, password } })
        console.log(response)
        console.log(`response from line 62 in auth actions`, response)
    } catch (err) {
        console.log(err)
        dispatch({ type: CHANGE_PASSWORD_FAILURE })
    }
}

export const changeDoctorStatus = (active, reason) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/api/update`, {
            active: false, reason: reason
        });
        dispatch({type: CHANGE_DOCTOR_STATUS_SUCCESS, data: {active, reason}})
        console.log(response)
    } catch (err) {
        console.log(err)
        dispatch({type: CHANGE_DOCTOR_STATUS_FAILURE})
    }
}

export const changeDoctorRoom = (room) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_API_APP_SERVER}/api/update`, {
            room: room
        })
        dispatch({type: CHANGE_DOCTOR_ROOM_SUCCESS, data: room})
        console.log(response)
    } catch (err) {
        console.log(err)
        dispatch({ type: CHANGE_DOCTOR_ROOM_FAILURE})
    }
}