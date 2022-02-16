import { LOAD_HISTORY_SUCCESS, LOAD_HISTORY_FAILURE } from "./actions";

let initialState = [];

export const patientHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HISTORY_SUCCESS:
      return state.concat(action.data);
    case LOAD_HISTORY_FAILURE:
      return state;
    default:
      return state;
  }
};
