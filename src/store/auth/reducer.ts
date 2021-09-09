import {
  IAuthState,
  IAuthAction,
  AuthActionType,
  ILogInUserSuccessAction,
} from "./types";

export const initialState: IAuthState = {
  user: null,
  error: false,
  loading: false,
  isLoggedIn: false,
};

const reducer: (
  state: IAuthState | undefined,
  action: IAuthAction
) => IAuthState = (
  state: IAuthState | undefined = initialState,
  action: IAuthAction
) => {
  switch (action.type) {
    case AuthActionType.SIGNUP_USER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case AuthActionType.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isLoggedIn: false,
      };
    case AuthActionType.SIGNUP_USER_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        isLoggedIn: false,
      };
    case AuthActionType.LOGIN_USER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        isLoggedIn: false,
      };
    case AuthActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: (action as ILogInUserSuccessAction).payload,
        error: false,
        loading: false,
        isLoggedIn: true,
      };
    case AuthActionType.LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: true,
        loading: false,
        isLoggedIn: false,
      };
    case AuthActionType.LOGOUT_USER: {
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
