import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import auth from "./auth/reducer";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../utils/local-storage";

const rootReducer = combineReducers({
  auth,
});

const middleware = [thunk];

const persistedState = loadStateFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage({ auth: store.getState().auth });
  }, 1000)
);

export default store;
