import { LOAD_SUCCESS_API, LOAD_FAILURE } from "./actions";

let initialState = {
  business: [],
  doctors: []
};

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUCCESS_API:
      console.log(action.data);
      return Object.assign(
        {},
        state,
        { business: [...action.data.business] },
        { doctors: [...action.data.doctors] },
      );
    case LOAD_FAILURE:
      return state;
    default:
      return state;
  }
}
