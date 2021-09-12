import {
  ILogInRequestAction,
  AuthActionType,
  ILogInSuccessAction,
  ICurrentUser,
  ILogInFailureAction,
  ILogInResponse,
  ILogOutUserAction,
  ISignUpRequestAction,
  ISignUpSuccessAction,
  ISignUpFailureAction,
} from "./types";

export const signUpRequestAction: () => ISignUpRequestAction = () => {
  return {
    type: AuthActionType.SIGNUP_REQUEST,
  };
};

export const signUpSuccessAction: () => ISignUpSuccessAction = () => {
  return {
    type: AuthActionType.SIGNUP_SUCCESS,
  };
};

export const signUpFailureAction: () => ISignUpFailureAction = () => {
  return {
    type: AuthActionType.SIGNUP_FAILURE,
  };
};

export const logInRequestAction: () => ILogInRequestAction = () => {
  return {
    type: AuthActionType.LOGIN_REQUEST,
  };
};

export const logInSuccessAction: (
  response: ILogInResponse
) => ILogInSuccessAction = (response: ILogInResponse) => {
  return {
    payload: response as ICurrentUser,
    type: AuthActionType.LOGIN_SUCCESS,
  };
};

export const logInFailureAction: () => ILogInFailureAction = () => {
  return {
    type: AuthActionType.LOGIN_FAILURE,
  };
};

export const logOutUserAction: () => ILogOutUserAction = () => {
  return {
    type: AuthActionType.LOGOUT,
  };
};
