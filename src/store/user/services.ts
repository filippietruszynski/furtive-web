import { AxiosRequestConfig } from "axios";

import {
  getUserFailureAction,
  getUserRequestAction,
  getUserSuccessAction,
  updateUserFailureAction,
  updateUserRequestAction,
  updateUserSuccessAction,
} from "./actions";
import { getUserRequest, updateUserRequest } from "./api";

import { ApiAction } from "../types";
import {
  IGetUserFailureAction,
  IGetUserRequestAction,
  IGetUserSuccessAction,
  IUpdateUserFailureAction,
  IUpdateUserRequest,
  IUpdateUserRequestAction,
  IUpdateUserSuccessAction,
} from "./types";

export const getUser =
  (
    config: AxiosRequestConfig
  ): ApiAction<
    IGetUserRequestAction | IGetUserSuccessAction | IGetUserFailureAction
  > =>
  async (dispatch) => {
    dispatch(getUserRequestAction());

    try {
      const { data } = await getUserRequest(config);
      dispatch(getUserSuccessAction(data));
    } catch (error) {
      dispatch(getUserFailureAction());
    }
  };

export const updateUser =
  (
    request: IUpdateUserRequest,
    config: AxiosRequestConfig
  ): ApiAction<
    | IUpdateUserRequestAction
    | IUpdateUserSuccessAction
    | IUpdateUserFailureAction
  > =>
  async (dispatch) => {
    dispatch(updateUserRequestAction());

    try {
      const { data } = await updateUserRequest(request, config);
      dispatch(updateUserSuccessAction(data));
    } catch (error) {
      dispatch(updateUserFailureAction());
    }
  };
