import {
  ILogInRequestAction,
  AuthActionType,
  ILogInSuccessAction,
  ICurrentUser,
  ILogInErrorAction,
  ILogInResponse,
  ILogOutUserAction,
  ISignUpRequestAction,
  ISignUpSuccessAction,
  ISignUpErrorAction,
} from "../types/auth.types";

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

export const signUpErrorAction: () => ISignUpErrorAction = () => {
  return {
    type: AuthActionType.SIGNUP_ERROR,
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

export const logInErrorAction: () => ILogInErrorAction = () => {
  return {
    type: AuthActionType.LOGIN_ERROR,
  };
};

export const logOutUserAction: () => ILogOutUserAction = () => {
  return {
    type: AuthActionType.LOGOUT,
  };
};
