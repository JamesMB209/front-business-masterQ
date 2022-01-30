import {
  LOGIN_SUCCESS_ACTION,
  LOGIN_FAILURE_ACTION,
  LOGOUT_NOW_ACTION,
} from "./actions";

const initialState = {
  isAuthenticated: false || localStorage.getItem("token") != null,
  config: {}, patients: {},
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      console.log("datadtadata",action.data)
      return Object.assign(
        {},
        state,
        { isAuthenticated: true },
        { config: { ...action.data } },
        {patients: {}}
      );
    case LOGIN_FAILURE_ACTION:
      return state;
    case LOGOUT_NOW_ACTION:
      return Object.assign(
        {},
        state,
        {
          isAuthenticated: false,
        },
        { config: {} }
      );
    default:
      return state;
  }
}
