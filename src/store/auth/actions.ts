import {
  ILogInUserStartAction,
  UserActionType,
  ILogInUserSuccessAction,
  IUser,
  ILogInUserFailureAction,
  ILogInUserResponse,
  ILogOutUserAction,
  ISignUpUserStartAction,
  ISignUpUserSuccessAction,
  ISignUpUserFailureAction,
} from "./types";

export const signUpUserStartAction: () => ISignUpUserStartAction = () => {
  return {
    type: UserActionType.SIGNUP_USER_START,
  };
};

export const signUpUserSuccessAction: () => ISignUpUserSuccessAction = () => {
  return {
    type: UserActionType.SIGNUP_USER_SUCCESS,
  };
};

export const signUpUserFailureAction: () => ISignUpUserFailureAction = () => {
  return {
    type: UserActionType.SIGNUP_USER_FAILURE,
  };
};

export const logInUserStartAction: () => ILogInUserStartAction = () => {
  return {
    type: UserActionType.LOGIN_USER_START,
  };
};

export const logInUserSuccessAction: (
  response: ILogInUserResponse
) => ILogInUserSuccessAction = (response: ILogInUserResponse) => {
  return {
    payload: response as IUser,
    type: UserActionType.LOGIN_USER_SUCCESS,
  };
};

export const logInUserFailureAction: () => ILogInUserFailureAction = () => {
  return {
    type: UserActionType.LOGIN_USER_FAILURE,
  };
};

export const logOutUserAction: () => ILogOutUserAction = () => {
  return {
    type: UserActionType.LOGOUT_USER,
  };
};
