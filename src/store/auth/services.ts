import { logInUserRequest, signUpUserRequest } from "./api";
import {
  logInUserFailureAction,
  logInUserStartAction,
  logInUserSuccessAction,
  logOutUserAction,
  signUpUserFailureAction,
  signUpUserStartAction,
  signUpUserSuccessAction,
} from "./actions";

import { ApiAction } from "../types";
import {
  ILogInUserFailureAction,
  ILogInUserRequest,
  ILogInUserStartAction,
  ILogInUserSuccessAction,
  ILogOutUserAction,
  ISignUpUserFailureAction,
  ISignUpUserRequest,
  ISignUpUserStartAction,
  ISignUpUserSuccessAction,
} from "./types";

export const signUpUser =
  (
    request: ISignUpUserRequest
  ): ApiAction<
    ISignUpUserStartAction | ISignUpUserSuccessAction | ISignUpUserFailureAction
  > =>
  async (dispatch) => {
    dispatch(signUpUserStartAction());

    try {
      await signUpUserRequest(request);
      dispatch(signUpUserSuccessAction());
    } catch (err) {
      dispatch(signUpUserFailureAction());
    }
  };

export const logInUser =
  (
    request: ILogInUserRequest
  ): ApiAction<
    ILogInUserStartAction | ILogInUserSuccessAction | ILogInUserFailureAction
  > =>
  async (dispatch) => {
    dispatch(logInUserStartAction());

    try {
      const { data } = await logInUserRequest(request);
      dispatch(logInUserSuccessAction(data));
    } catch (err) {
      dispatch(logInUserFailureAction());
    }
  };

export const logOutUser: () => ApiAction<ILogOutUserAction> =
  () => async (dispatch) => {
    dispatch(logOutUserAction());
  };
