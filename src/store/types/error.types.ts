import { AuthActionType, IAuthAction, IAuthState } from "./auth.types";
import { IUserAction, IUserState, UserActionType } from "./user.types";

/* ERROR */

export interface IError {
  errorMessage: string;
  errorTimestamp: number;
}

/* ACTIONS */

export type IErrorActionType = AuthActionType | UserActionType;

export interface IErrorAction {
  type: IErrorActionType;
  payload: IError;
  error: boolean;
}

/* REDUCER */

export type ISliceState = IAuthState | IUserState;
export type ISliceAction = IAuthAction | IUserAction;

/*  SERVICES   */

export type IErrorResponse = Partial<IError>;
