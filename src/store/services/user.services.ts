import { AxiosRequestConfig } from "axios";

import {
  getUserErrorAction,
  getUserRequestAction,
  getUserSuccessAction,
  updateUserErrorAction,
  updateUserRequestAction,
  updateUserSuccessAction,
} from "../actions/user.actions";
import { getUserRequest, updateUserRequest } from "../api/user.api";

import { ApiAction } from "../types";
import {
  IGetUserErrorAction,
  IGetUserRequestAction,
  IGetUserSuccessAction,
  IUpdateUserErrorAction,
  IUpdateUserRequest,
  IUpdateUserRequestAction,
  IUpdateUserSuccessAction,
} from "../types/user.types";

export const getUser =
  (
    config: AxiosRequestConfig
  ): ApiAction<
    IGetUserRequestAction | IGetUserSuccessAction | IGetUserErrorAction
  > =>
  async (dispatch) => {
    dispatch(getUserRequestAction());

    try {
      const { data } = await getUserRequest(config);
      dispatch(getUserSuccessAction(data));
    } catch (error) {
      dispatch(getUserErrorAction());
    }
  };

export const updateUser =
  (
    request: IUpdateUserRequest,
    config: AxiosRequestConfig
  ): ApiAction<
    IUpdateUserRequestAction | IUpdateUserSuccessAction | IUpdateUserErrorAction
  > =>
  async (dispatch) => {
    dispatch(updateUserRequestAction());

    try {
      const { data } = await updateUserRequest(request, config);
      dispatch(updateUserSuccessAction(data));
    } catch (error) {
      dispatch(updateUserErrorAction());
    }
  };
