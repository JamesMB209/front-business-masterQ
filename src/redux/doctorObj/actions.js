import axios from "axios";

export const LOAD_DOCTOR_SUCCESS = "LOAD_DOCTOR_SUCCESS";
export const LOAD_DOCTOR_FAILURE = "LOAD_DOCTOR_FAILURE";

export function loadDoctorObjThunk (data) {
    return (dispatch) => {
        const token = localStorage.getItem("token")
        return axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_SERVER}/obj/doctor`,
            headers: { Authorization: `Bearer ${token}`},
            data: {
                business: data.business,
                doctor: data.doctor
            }
        }).then((response) => {
            console.log("im response", response)
            dispatch({type: LOAD_DOCTOR_SUCCESS, data: response.data})
        }).catch((err) => {
            console.log(err)
            dispatch({type:LOAD_DOCTOR_FAILURE})
        })
    }
}