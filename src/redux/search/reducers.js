import { LOAD_SEARCH, LOAD_FAIL } from "./actions";

const initialState = {
  data: [],
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCH:
      return Object.assign({}, state, { data: [...action.data] });
    case LOAD_FAIL:
      return state;
    default:
      return state;
  }
}
