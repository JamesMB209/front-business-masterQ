import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducers";

const rootReducer = combineReducers({
    authStore: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
