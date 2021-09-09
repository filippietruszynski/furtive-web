import { IRootState } from "../types";
import { IUser, IAuthState } from "./types";

export const selectAuthState = (state: IRootState): IAuthState => state.auth;

export const selectUser = (state: IRootState): IUser | null => {
  return selectAuthState(state).user;
};

export const selectError = (state: IRootState): boolean => {
  return selectAuthState(state).error;
};

export const selectLoading = (state: IRootState): boolean => {
  return selectAuthState(state).loading;
};

export const selectIsUserLogged = (state: IRootState): boolean => {
  return selectAuthState(state).isLoggedIn;
};
