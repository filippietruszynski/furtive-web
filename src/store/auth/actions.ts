import {
  ILogInUserRequestAction,
  AuthActionType,
  ILogInUserSuccessAction,
  ICurrentUser,
  ILogInUserFailureAction,
  ILogInUserResponse,
  ILogOutUserAction,
  ISignUpUserRequestAction,
  ISignUpUserSuccessAction,
  ISignUpUserFailureAction,
} from "./types";

export const signUpUserRequestAction: () => ISignUpUserRequestAction = () => {
  return {
    type: AuthActionType.SIGNUP_USER_REQUEST,
  };
};

export const signUpUserSuccessAction: () => ISignUpUserSuccessAction = () => {
  return {
    type: AuthActionType.SIGNUP_USER_SUCCESS,
  };
};

export const signUpUserFailureAction: () => ISignUpUserFailureAction = () => {
  return {
    type: AuthActionType.SIGNUP_USER_FAILURE,
  };
};

export const logInUserRequestAction: () => ILogInUserRequestAction = () => {
  return {
    type: AuthActionType.LOGIN_USER_REQUEST,
  };
};

export const logInUserSuccessAction: (
  response: ILogInUserResponse
) => ILogInUserSuccessAction = (response: ILogInUserResponse) => {
  return {
    payload: response as ICurrentUser,
    type: AuthActionType.LOGIN_USER_SUCCESS,
  };
};

export const logInUserFailureAction: () => ILogInUserFailureAction = () => {
  return {
    type: AuthActionType.LOGIN_USER_FAILURE,
  };
};

export const logOutUserAction: () => ILogOutUserAction = () => {
  return {
    type: AuthActionType.LOGOUT_USER,
  };
};
