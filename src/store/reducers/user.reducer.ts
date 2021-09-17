import {
  IGetUserSuccessAction,
  IUpdateUserSuccessAction,
  IUserAction,
  IUserState,
  UserActionType,
} from "../types/user.types";

export const initialState: IUserState = {
  user: null,
  error: false,
  loading: false,
};

const userReducer: (
  state: IUserState | undefined,
  action: IUserAction
) => IUserState = (
  state: IUserState | undefined = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case UserActionType.GET_USER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case UserActionType.GET_USER_SUCCESS:
      return {
        ...state,
        user: (action as IGetUserSuccessAction).payload,
        error: false,
        loading: false,
      };
    case UserActionType.GET_USER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case UserActionType.UPDATE_USER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case UserActionType.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: (action as IUpdateUserSuccessAction).payload,
        error: false,
        loading: false,
      };
    case UserActionType.UPDATE_USER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
