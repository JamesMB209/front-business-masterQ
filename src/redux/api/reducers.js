import {
  LOAD_SUCCESS_DOCTORS,
  LOAD_SUCCESS_BUSINESS,
  LOAD_FAILURE,
} from "./actions";

let initialState = {
  data: [],
};

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUCCESS_DOCTORS:
      console.log(action.data);
      return Object.assign({}, state, { data: [...action.data] });
    case LOAD_SUCCESS_BUSINESS:
      console.log(action.data);
    case LOAD_FAILURE:
      return state;
    default:
      return state;
  }
}
