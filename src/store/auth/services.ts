import { logInUserRequest, signUpUserRequest } from "./api";
import {
  logInUserFailureAction,
  logInUserRequestAction,
  logInUserSuccessAction,
  logOutUserAction,
  signUpUserFailureAction,
  signUpUserRequestAction,
  signUpUserSuccessAction,
} from "./actions";

import { ApiAction } from "../types";
import {
  ILogInUserFailureAction,
  ILogInUserRequest,
  ILogInUserRequestAction,
  ILogInUserSuccessAction,
  ILogOutUserAction,
  ISignUpUserFailureAction,
  ISignUpUserRequest,
  ISignUpUserRequestAction,
  ISignUpUserSuccessAction,
} from "./types";

export const signUpUser =
  (
    request: ISignUpUserRequest
  ): ApiAction<
    | ISignUpUserRequestAction
    | ISignUpUserSuccessAction
    | ISignUpUserFailureAction
  > =>
  async (dispatch) => {
    dispatch(signUpUserRequestAction());

    try {
      await signUpUserRequest(request);
      dispatch(signUpUserSuccessAction());
    } catch (error) {
      dispatch(signUpUserFailureAction());
    }
  };

export const logInUser =
  (
    request: ILogInUserRequest
  ): ApiAction<
    ILogInUserRequestAction | ILogInUserSuccessAction | ILogInUserFailureAction
  > =>
  async (dispatch) => {
    dispatch(logInUserRequestAction());

    try {
      const { data } = await logInUserRequest(request);
      dispatch(logInUserSuccessAction(data));
    } catch (error) {
      dispatch(logInUserFailureAction());
    }
  };

export const logOutUser: () => ApiAction<ILogOutUserAction> =
  () => async (dispatch) => {
    dispatch(logOutUserAction());
  };
