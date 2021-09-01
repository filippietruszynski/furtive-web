/* USER */

export interface IUser {
  email: string | null;
}

export interface IUserState {
  user: IUser | null;
  error: boolean;
  loading: boolean;
  isLoggedIn: boolean;
}

/* ACTIONS */

export enum UserActionType {
  SIGNUP_USER_START = "user/signUpUserStart",
  SIGNUP_USER_SUCCESS = "user/signUpUserSuccess",
  SIGNUP_USER_FAILURE = "user/signUpUserFailure",
  LOGIN_USER_START = "user/logInUserStart",
  LOGIN_USER_SUCCESS = "user/logInUserSuccess",
  LOGIN_USER_FAILURE = "user/logInUserFailure",
  LOGOUT_USER = "user/logOutUser",
}

export interface IUserAction {
  type: UserActionType;
}

export interface ISignUpUserStartAction extends IUserAction {
  type: UserActionType.SIGNUP_USER_START;
}

export interface ISignUpUserSuccessAction extends IUserAction {
  type: UserActionType.SIGNUP_USER_SUCCESS;
}

export interface ISignUpUserFailureAction extends IUserAction {
  type: UserActionType.SIGNUP_USER_FAILURE;
}

export interface ILogInUserStartAction extends IUserAction {
  type: UserActionType.LOGIN_USER_START;
}

export interface ILogInUserSuccessAction extends IUserAction {
  type: UserActionType.LOGIN_USER_SUCCESS;
  payload: IUser;
}

export interface ILogInUserFailureAction extends IUserAction {
  type: UserActionType.LOGIN_USER_FAILURE;
}

export interface ILogOutUserAction extends IUserAction {
  type: UserActionType.LOGOUT_USER;
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
