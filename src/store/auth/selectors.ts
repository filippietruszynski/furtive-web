import { IRootState } from "../types";
import { IUser, IUserState } from "./types";

export const selectUserState = (state: IRootState): IUserState => state.user;

export const selectUser = (state: IRootState): IUser | null => {
  return selectUserState(state).user;
};

export const selectError = (state: IRootState): boolean => {
  return selectUserState(state).error;
};

export const selectLoading = (state: IRootState): boolean => {
  return selectUserState(state).loading;
};

export const selectIsUserLogged = (state: IRootState): boolean => {
  return selectUserState(state).isLoggedIn;
};
