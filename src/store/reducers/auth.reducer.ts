import {
  IAuthState,
  IAuthAction,
  AuthActionType,
  ILogInSuccessAction,
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
    case AuthActionType.SIGNUP_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case AuthActionType.SIGNUP_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.SIGNUP_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        isAuthenticated: false,
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: (action as ILogInSuccessAction).payload,
        error: false,
        loading: false,
        isAuthenticated: true,
      };
    case AuthActionType.LOGIN_ERROR:
      return {
        ...state,
        currentUser: null,
        error: true,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.LOGOUT: {
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
