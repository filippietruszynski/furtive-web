import {
  ILogInUserRequestAction,
  AuthActionType,
  ILogInUserSuccessAction,
  ICurrentUser,
  ILogInUserResponse,
  ILogOutUserAction,
  ISignUpUserRequestAction,
  ISignUpUserSuccessAction,
} from "../types/auth.types";

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

export const logOutUserAction: () => ILogOutUserAction = () => {
  return {
    type: AuthActionType.LOGOUT_USER,
  };
};
