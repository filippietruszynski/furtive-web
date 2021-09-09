import { IRootState } from "../store/types";

/* https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage */
/* TODO: Rethink localStorage interaction */

export const loadStateFromLocalStorage = (): IRootState | undefined => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: IRootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {}
};
