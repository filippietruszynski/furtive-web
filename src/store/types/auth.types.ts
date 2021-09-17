/* AUTH */

export interface ICurrentUser {
  email: string | null;
  token: string | null;
}

export interface IAuthState {
  currentUser: ICurrentUser | null;
  error: boolean;
  loading: boolean;
  isLoggedIn: boolean;
}

/* ACTIONS */

export enum AuthActionType {
  SIGNUP_REQUEST = "auth/signUpRequest",
  SIGNUP_SUCCESS = "auth/signUpSuccess",
  SIGNUP_FAILURE = "auth/signUpFailure",
  LOGIN_REQUEST = "auth/logInRequest",
  LOGIN_SUCCESS = "auth/logInSuccess",
  LOGIN_FAILURE = "auth/logInFailure",
  LOGOUT = "auth/logOutUser",
}

export interface IAuthAction {
  type: AuthActionType;
}

export interface ISignUpRequestAction extends IAuthAction {
  type: AuthActionType.SIGNUP_REQUEST;
}

export interface ISignUpSuccessAction extends IAuthAction {
  type: AuthActionType.SIGNUP_SUCCESS;
}

export interface ISignUpFailureAction extends IAuthAction {
  type: AuthActionType.SIGNUP_FAILURE;
}

export interface ILogInRequestAction extends IAuthAction {
  type: AuthActionType.LOGIN_REQUEST;
}

export interface ILogInSuccessAction extends IAuthAction {
  type: AuthActionType.LOGIN_SUCCESS;
  payload: ICurrentUser;
}

export interface ILogInFailureAction extends IAuthAction {
  type: AuthActionType.LOGIN_FAILURE;
}

export interface ILogOutUserAction extends IAuthAction {
  type: AuthActionType.LOGOUT;
}

/* API */

export interface ISignUpRequest {
  email: string;
  password: string;
}

export interface ILogInRequest {
  email: string;
  password: string;
}

export type ILogInResponse = Partial<ICurrentUser>;
