// for getting the patients history and diagnosis

import axios from "axios";

export const LOAD_HISTORY_SUCCESS = "LOAD_HISTORY_SUCCESS";
export const LOAD_HISTORY_FAILURE = "LOAD_HISTORY_FAILURE";

export const POST_DIAGNOSIS_SUCCESS = "POST_DIAGNOSIS_SUCCESS";
export const POST_DIAGNOSIS_FAILURE = "POST_DIAGNOSIS_FAILURE";

export function getHistory(id) {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/diagnosis/load`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { patientID: id },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: LOAD_HISTORY_SUCCESS, data: response.data });
      })
      .catch((err) => {
        console.log(`You ran into an error ${err}`);
        dispatch({ type: LOAD_HISTORY_FAILURE });
      });
  };
}

export function postDiagnosis(id, diagnosis, follow_up, sick_leave) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_SERVER}/diagnosis/submit`, {
        appointmentHistoryID: id,
        diagnosis: diagnosis,
        followUp: follow_up,
        sickLeave: sick_leave,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(`Woopsie phistory line 46:: ${error}`);
      });
  };
}
