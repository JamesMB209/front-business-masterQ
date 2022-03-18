import { LOAD_PHARMACY } from "./actions";

let initialState = [];

export const pharmacyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHARMACY:
      return state.concat(action.data);
    default:
      return state;
  }
};
