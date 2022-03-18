import axios from "axios";

export const LOAD_SEARCH = "LOAD_SEARCH";
export const LOAD_FAIL = "LOAD_FAIL";

export function loadPatientThunk() {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/patients`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: LOAD_SEARCH, data: response.data });
      })
      .catch((error) => console.log(error));
  };
}
