import { LOAD_DOCTOR_SUCCESS, LOAD_DOCTOR_FAILURE } from "./actions";

let initialState = {
  data: [],
};

export const doctorObjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DOCTOR_SUCCESS:
      return Object.assign({}, state, { ...action.data });
    case LOAD_DOCTOR_FAILURE:
      return state;
    default:
      return state;
  }
};
