/* USER */

export interface IUser {
  _id: string;
  email: string;
  password: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserState {
  user: IUser | null;
  error: boolean;
  loading: boolean;
}

/* ACTIONS */

export enum UserActionType {
  GET_USER_REQUEST = "user/getUserRequest",
  GET_USER_SUCCESS = "user/getUserSuccess",
  GET_USER_ERROR = "user/getUserError",
  UPDATE_USER_REQUEST = "user/updateUserRequest",
  UPDATE_USER_SUCCESS = "user/updateUserSuccess",
  UPDATE_USER_ERROR = "user/updateUserError",
}

export interface IUserAction {
  type: UserActionType;
}

export interface IGetUserRequestAction extends IUserAction {
  type: UserActionType.GET_USER_REQUEST;
}

export interface IGetUserErrorAction extends IUserAction {
  type: UserActionType.GET_USER_ERROR;
}

export interface IGetUserSuccessAction extends IUserAction {
  type: UserActionType.GET_USER_SUCCESS;
  payload: IUser;
}

export interface IUpdateUserRequestAction extends IUserAction {
  type: UserActionType.UPDATE_USER_REQUEST;
}

export interface IUpdateUserErrorAction extends IUserAction {
  type: UserActionType.UPDATE_USER_ERROR;
}

export interface IUpdateUserSuccessAction extends IUserAction {
  type: UserActionType.UPDATE_USER_SUCCESS;
  payload: IUser;
}

/* API */

export interface IUpdateUserRequest {
  email?: string;
  password?: string;
}

export type IGetUserResponse = Partial<IUser>;

export type IUpdateUserResponse = Partial<IUser>;
