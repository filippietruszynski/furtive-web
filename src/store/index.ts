import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import auth from "./reducers/auth.reducer";
import user from "./reducers/user.reducer";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../utils/local-storage";

const rootReducer = combineReducers({
  auth,
  user,
});

const persistedState = loadStateFromLocalStorage();
const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

/* TODO: Save only currentUser to localStorage */
store.subscribe(
  throttle(() => {
    saveStateToLocalStorage({ auth: store.getState().auth });
  }, 1000)
);

export default store;
