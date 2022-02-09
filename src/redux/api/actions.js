// for return doctors id and name for displaying

import axios from "axios";

export const LOAD_SUCCESS_API = "LOAD_SUCCESS_API";
export const LOAD_SUCCESS_BUSINESS = "LOAD_SUCCESS_BUSINESS";

export const LOAD_FAILURE = "LOAD_FAILURE";

export function loadApiThunk() {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_SERVER}/obj/business`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        let data = Object.values(response.data)
          .filter((doctor) => doctor.fullName)
          .map((doctor) => {
            return { id: doctor.id, name: doctor.fullName };
          });
        console.log(data);
        dispatch({ type: LOAD_SUCCESS_API, data: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOAD_FAILURE });
      });
  };
}
// }
