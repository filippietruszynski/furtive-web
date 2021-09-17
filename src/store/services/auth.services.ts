import { logInRequest, signUpRequest } from "../api/auth.api";
import {
  logInErrorAction,
  logInRequestAction,
  logInSuccessAction,
  logOutUserAction,
  signUpErrorAction,
  signUpRequestAction,
  signUpSuccessAction,
} from "../actions/auth.actions";

import { ApiAction } from "../types";
import {
  ILogInErrorAction,
  ILogInRequest,
  ILogInRequestAction,
  ILogInSuccessAction,
  ILogOutUserAction,
  ISignUpErrorAction,
  ISignUpRequest,
  ISignUpRequestAction,
  ISignUpSuccessAction,
} from "../types/auth.types";

export const signUp =
  (
    request: ISignUpRequest
  ): ApiAction<
    ISignUpRequestAction | ISignUpSuccessAction | ISignUpErrorAction
  > =>
  async (dispatch) => {
    dispatch(signUpRequestAction());

    try {
      await signUpRequest(request);
      dispatch(signUpSuccessAction());
    } catch (error) {
      dispatch(signUpErrorAction());
    }
  };

export const logIn =
  (
    request: ILogInRequest
  ): ApiAction<ILogInRequestAction | ILogInSuccessAction | ILogInErrorAction> =>
  async (dispatch) => {
    dispatch(logInRequestAction());

    try {
      const { data } = await logInRequest(request);
      dispatch(logInSuccessAction(data));
    } catch (error) {
      dispatch(logInErrorAction());
    }
  };

export const logOutUser: () => ApiAction<ILogOutUserAction> =
  () => async (dispatch) => {
    dispatch(logOutUserAction());
  };
