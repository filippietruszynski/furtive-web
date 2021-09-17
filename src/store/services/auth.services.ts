import { logInRequest, signUpRequest } from "../api/auth.api";
import {
  logInFailureAction,
  logInRequestAction,
  logInSuccessAction,
  logOutUserAction,
  signUpFailureAction,
  signUpRequestAction,
  signUpSuccessAction,
} from "../actions/auth.actions";

import { ApiAction } from "../types";
import {
  ILogInFailureAction,
  ILogInRequest,
  ILogInRequestAction,
  ILogInSuccessAction,
  ILogOutUserAction,
  ISignUpFailureAction,
  ISignUpRequest,
  ISignUpRequestAction,
  ISignUpSuccessAction,
} from "../types/auth.types";

export const signUp =
  (
    request: ISignUpRequest
  ): ApiAction<
    ISignUpRequestAction | ISignUpSuccessAction | ISignUpFailureAction
  > =>
  async (dispatch) => {
    dispatch(signUpRequestAction());

    try {
      await signUpRequest(request);
      dispatch(signUpSuccessAction());
    } catch (error) {
      dispatch(signUpFailureAction());
    }
  };

export const logIn =
  (
    request: ILogInRequest
  ): ApiAction<
    ILogInRequestAction | ILogInSuccessAction | ILogInFailureAction
  > =>
  async (dispatch) => {
    dispatch(logInRequestAction());

    try {
      const { data } = await logInRequest(request);
      dispatch(logInSuccessAction(data));
    } catch (error) {
      dispatch(logInFailureAction());
    }
  };

export const logOutUser: () => ApiAction<ILogOutUserAction> =
  () => async (dispatch) => {
    dispatch(logOutUserAction());
  };
