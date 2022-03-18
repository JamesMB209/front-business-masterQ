import { LOAD_BUSINESS_FAILURE, LOAD_BUSINESS_OBJECT_SUCCESS } from "./actions";

let initialState = { pharmacy: { queue: [] } };

export const businessObjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BUSINESS_OBJECT_SUCCESS:
      return Object.assign({}, state, { ...action.data });
    case LOAD_BUSINESS_FAILURE:
      return state;
    default:
      return state;
  }
};
