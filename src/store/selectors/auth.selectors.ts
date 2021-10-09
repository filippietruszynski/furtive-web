import { IRootState } from "../types";
import { ICurrentUser, IAuthState } from "../types/auth.types";

export const selectAuthState = (state: IRootState): IAuthState => state.auth;

export const selectCurrentUser = (state: IRootState): ICurrentUser | null => {
  return selectAuthState(state).currentUser;
};

export const selectError = (state: IRootState): boolean => {
  return selectAuthState(state).error;
};

export const selectLoading = (state: IRootState): boolean => {
  return selectAuthState(state).loading;
};

export const selectIsUserAuthenticated = (state: IRootState): boolean => {
  return selectAuthState(state).isAuthenticated;
};
