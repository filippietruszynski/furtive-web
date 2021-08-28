import {
  IUserState,
  IUserAction,
  UserActionType,
  ILogInUserSuccessAction,
} from "./types";

export const initialState: IUserState = {
  user: null,
  error: false,
  loading: false,
  isLoggedIn: false,
};

const reducer: (
  state: IUserState | undefined,
  action: IUserAction
) => IUserState = (
  state: IUserState | undefined = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case UserActionType.SIGNUP_USER_START:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case UserActionType.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isLoggedIn: false,
      };
    case UserActionType.SIGNUP_USER_FAILURE:
      return {
        ...state,
        error: false,
        loading: false,
        isLoggedIn: false,
      };
    case UserActionType.LOGIN_USER_START:
      return {
        ...state,
        error: false,
        loading: true,
        isLoggedIn: false,
      };
    case UserActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: (action as ILogInUserSuccessAction).payload,
        error: false,
        loading: false,
        isLoggedIn: true,
      };
    case UserActionType.LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: true,
        loading: false,
        isLoggedIn: false,
      };
    case UserActionType.LOGOUT_USER: {
      return {
        ...state,
        user: null,
        error: false,
        loading: true,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
