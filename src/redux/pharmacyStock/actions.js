import axios from "axios";

export const LOAD_PHARMACY = "LOAD_PHARMACY";

let token = localStorage.getItem("token");

export function loadPharmacyStockThunk() {
  return (dispatch) => {
      console.log('loading pharmacy')
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/pharmacy/load`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({data}) => {
        dispatch({
            type:LOAD_PHARMACY,
            data:data
        })
      })
      .catch((error) => console.log(error));
  };
}
