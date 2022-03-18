import axios from "axios";

export const LOGIN_REQUEST_ACTION = "LOGIN_REQUEST_ACTION";
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGIN_FAILURE_ACTION = "LOGIN_FAILURE_ACTION";
export const LOGOUT_NOW_ACTION = "LOGOUT_NOW_ACTION";

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS_ACTION,
  };
}

export function loginFailure(message) {
  return {
    type: LOGIN_FAILURE_ACTION,
    message: message,
  };
}

export const loginThunkSuccess = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ACTION });
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/api/login`,
      { type: "business_users", email: email, password: password }
    );
    const { data } = response;
    if (data == null) {
      dispatch({
        type: LOGIN_FAILURE_ACTION,
        message: "Unknown Error",
      });
    } else if (!data.token) {
      dispatch({
        type: LOGIN_FAILURE_ACTION,
        message: data.message || "No Token!",
      });
    } else {
      localStorage.setItem("token", data.token);
      console.log(data);
      dispatch({ type: LOGIN_SUCCESS_ACTION, data: data });
    }
    console.log(data);
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE_ACTION });
    console.log(err);
  }
};

export const logOutThunk = () => (dispatch) => {
  localStorage.clear("token");
  dispatch({ type: LOGOUT_NOW_ACTION });
  window.location.reload();
};
