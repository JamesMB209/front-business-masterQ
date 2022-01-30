import axios from "axios";

export const LOAD_SUCCESS_DOCTORS = "LOAD_SUCCESS_DOCTORS";
export const LOAD_FAILURE = "LOAD_FAILURE";
export const LOAD_SUCCESS_BUSINESS = "LOAD_SUCCESS_BUSINESS";

export function loadDoctorsThunk() {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/config`)
      .then((response) => {
        dispatch({ type: LOAD_SUCCESS_DOCTORS, data: response.data.doctors });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function loadBusinessThunk() {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/config`)
      .then((response) => {
        dispatch({ type: LOAD_SUCCESS_BUSINESS, data: response.data.business });
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
}