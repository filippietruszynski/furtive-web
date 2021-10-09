import { logInUserRequest, signUpUserRequest } from "../api/auth.api";
import {
  logInUserErrorAction,
  logInUserRequestAction,
  logInUserSuccessAction,
  logOutUserAction,
  signUpUserErrorAction,
  signUpUserRequestAction,
  signUpUserSuccessAction,
} from "../actions/auth.actions";

import { ApiAction } from "../types";
import {
  ILogInUserErrorAction,
  ILogInUserRequest,
  ILogInUserRequestAction,
  ILogInUserSuccessAction,
  ILogOutUserAction,
  ISignUpUserErrorAction,
  ISignUpUserRequest,
  ISignUpUserRequestAction,
  ISignUpUserSuccessAction,
} from "../types/auth.types";

export const signUpUser =
  (
    request: ISignUpUserRequest
  ): ApiAction<
    ISignUpUserRequestAction | ISignUpUserSuccessAction | ISignUpUserErrorAction
  > =>
  async (dispatch) => {
    dispatch(signUpUserRequestAction());

    try {
      await signUpUserRequest(request);
      dispatch(signUpUserSuccessAction());
    } catch (error) {
      dispatch(signUpUserErrorAction());
    }
  };

export const logInUser =
  (
    request: ILogInUserRequest
  ): ApiAction<
    ILogInUserRequestAction | ILogInUserSuccessAction | ILogInUserErrorAction
  > =>
  async (dispatch) => {
    dispatch(logInUserRequestAction());

    try {
      const { data } = await logInUserRequest(request);
      dispatch(logInUserSuccessAction(data));
    } catch (error) {
      dispatch(logInUserErrorAction());
    }
  };

export const logOutUser: () => ApiAction<ILogOutUserAction> =
  () => async (dispatch) => {
    dispatch(logOutUserAction());
  };
