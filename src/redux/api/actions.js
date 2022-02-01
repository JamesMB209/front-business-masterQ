import axios from "axios";

export const LOAD_SUCCESS_API = "LOAD_SUCCESS_API";
export const LOAD_SUCCESS_BUSINESS = "LOAD_SUCCESS_BUSINESS";

export const LOAD_FAILURE = "LOAD_FAILURE";

export function loadApiThunk() {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/config`, {
        headers: { Authorization: `Bearer ${token}` }})
      .then((response) => {
        dispatch({ type: LOAD_SUCCESS_API, data: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

