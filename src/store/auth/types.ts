/* AUTH */

export interface IUser {
  email: string | null;
  token: string | null;
}

export interface IAuthState {
  user: IUser | null;
  error: boolean;
  loading: boolean;
  isLoggedIn: boolean;
}

/* ACTIONS */

export enum AuthActionType {
  SIGNUP_USER_REQUEST = "auth/signUpUserRequest",
  SIGNUP_USER_SUCCESS = "auth/signUpUserSuccess",
  SIGNUP_USER_FAILURE = "auth/signUpUserFailure",
  LOGIN_USER_REQUEST = "auth/logInUserRequest",
  LOGIN_USER_SUCCESS = "auth/logInUserSuccess",
  LOGIN_USER_FAILURE = "auth/logInUserFailure",
  LOGOUT_USER = "auth/logOutUser",
}

export interface IAuthAction {
  type: AuthActionType;
}

export interface ISignUpUserRequestAction extends IAuthAction {
  type: AuthActionType.SIGNUP_USER_REQUEST;
}

export interface ISignUpUserSuccessAction extends IAuthAction {
  type: AuthActionType.SIGNUP_USER_SUCCESS;
}

export interface ISignUpUserFailureAction extends IAuthAction {
  type: AuthActionType.SIGNUP_USER_FAILURE;
}

export interface ILogInUserRequestAction extends IAuthAction {
  type: AuthActionType.LOGIN_USER_REQUEST;
}

export interface ILogInUserSuccessAction extends IAuthAction {
  type: AuthActionType.LOGIN_USER_SUCCESS;
  payload: IUser;
}

export interface ILogInUserFailureAction extends IAuthAction {
  type: AuthActionType.LOGIN_USER_FAILURE;
}

export interface ILogOutUserAction extends IAuthAction {
  type: AuthActionType.LOGOUT_USER;
}

/* API */

export interface ISignUpUserRequest {
  email: string;
  password: string;
}

export interface ILogInUserRequest {
  email: string;
  password: string;
}

export type ILogInUserResponse = Partial<IUser>;
