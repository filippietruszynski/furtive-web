import {
  IGetUserErrorAction,
  IGetUserRequestAction,
  IGetUserResponse,
  IGetUserSuccessAction,
  IUpdateUserErrorAction,
  IUpdateUserRequestAction,
  IUpdateUserResponse,
  IUpdateUserSuccessAction,
  IUser,
  UserActionType,
} from "../types/user.types";

export const getUserRequestAction: () => IGetUserRequestAction = () => {
  return {
    type: UserActionType.GET_USER_REQUEST,
  };
};

export const getUserSuccessAction: (
  response: IGetUserResponse
) => IGetUserSuccessAction = (response: IGetUserResponse) => {
  return {
    payload: response as IUser,
    type: UserActionType.GET_USER_SUCCESS,
  };
};

export const getUserErrorAction: () => IGetUserErrorAction = () => {
  return {
    type: UserActionType.GET_USER_ERROR,
  };
};

export const updateUserRequestAction: () => IUpdateUserRequestAction = () => {
  return {
    type: UserActionType.UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccessAction: (
  response: IUpdateUserResponse
) => IUpdateUserSuccessAction = (response: IUpdateUserResponse) => {
  return {
    payload: response as IUser,
    type: UserActionType.UPDATE_USER_SUCCESS,
  };
};

export const updateUserErrorAction: () => IUpdateUserErrorAction = () => {
  return {
    type: UserActionType.UPDATE_USER_ERROR,
  };
};
