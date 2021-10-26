import { logInUserRequest, signUpUserRequest } from "../api/auth.api";
import {
  logInUserRequestAction,
  logInUserSuccessAction,
  logOutUserAction,
  signUpUserRequestAction,
  signUpUserSuccessAction,
} from "../actions/auth.actions";
import { errorActionCreator } from "../actions/error.actions";

import { ApiAction } from "../types";
import {
  AuthActionType,
  ILogInUserRequest,
  ILogInUserRequestAction,
  ILogInUserSuccessAction,
  ILogOutUserAction,
  ISignUpUserRequest,
  ISignUpUserRequestAction,
  ISignUpUserSuccessAction,
} from "../types/auth.types";
import { IErrorAction } from "../types/error.types";

export const signUpUser =
  (
    request: ISignUpUserRequest
  ): ApiAction<
    ISignUpUserRequestAction | ISignUpUserSuccessAction | IErrorAction
  > =>
  async (dispatch) => {
    dispatch(signUpUserRequestAction());

    try {
      await signUpUserRequest(request);
      dispatch(signUpUserSuccessAction());
    } catch (error) {
      // dispatch(signUpUserErrorAction());
    }
  };

export const logInUser =
  (
    request: ILogInUserRequest
  ): ApiAction<
    ILogInUserRequestAction | ILogInUserSuccessAction | IErrorAction
  > =>
  async (dispatch) => {
    dispatch(logInUserRequestAction());

    try {
      const { data } = await logInUserRequest(request);
      dispatch(logInUserSuccessAction(data));
    } catch (error) {
      if (error.response) {
        dispatch(
          errorActionCreator(
            AuthActionType.LOGIN_USER_ERROR,
            error.response.data
          )
        );
      }
    }
  };

export const logOutUser: () => ApiAction<ILogOutUserAction> =
  () => async (dispatch) => {
    dispatch(logOutUserAction());
  };
