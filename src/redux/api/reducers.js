import { LOAD_SUCCESS_API, LOAD_FAILURE } from "./actions";

let initialState = [];

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUCCESS_API:
      console.log(action.data);
      return state.concat(action.data)
    case LOAD_FAILURE:
      return state;
    default:
      return state;
  }
}
