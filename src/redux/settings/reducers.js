import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_DOCTOR_ROOM_SUCCESS,
  CHANGE_DOCTOR_STATUS_SUCCESS,
} from "./actions";

let initialState = {
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_SUCCESS:
      console.log("success in reducers");
      return Object.assign({}, state, action.data);
    case CHANGE_DOCTOR_STATUS_SUCCESS:
      console.log("clickclick");
    case CHANGE_DOCTOR_ROOM_SUCCESS:
      console.log("change doctor room success");
      return Object.assign({}, state, action.data)
    case CHANGE_PASSWORD_FAILURE:
      console.log("Fail Dail");
      return state;
    default:
      return state;
  }
};
