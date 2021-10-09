import {
  IAuthState,
  IAuthAction,
  AuthActionType,
  ILogInUserSuccessAction,
} from "../types/auth.types";

export const initialState: IAuthState = {
  currentUser: null,
  error: false,
  loading: false,
  isAuthenticated: false,
};

const authReducer: (
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
        isAuthenticated: false,
      };
    case AuthActionType.SIGNUP_USER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.LOGIN_USER_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        isAuthenticated: false,
      };
    case AuthActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: (action as ILogInUserSuccessAction).payload,
        error: false,
        loading: false,
        isAuthenticated: true,
      };
    case AuthActionType.LOGIN_USER_ERROR:
      return {
        ...state,
        currentUser: null,
        error: true,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.LOGOUT_USER: {
      return {
        ...state,
        currentUser: null,
        error: false,
        loading: false,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
