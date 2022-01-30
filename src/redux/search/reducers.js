import { LOAD_SEARCH, LOAD_FAIL } from "./actions";

const initialState = {
  data: [],
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCH:
        console.log(action.data)
        console.log(state.data)
        return Object.assign({}, state, {data: [...action.data]})
    default:
        console.log(state)
      return state;
  }
}
