import {
  IAuthState,
  IAuthAction,
  AuthActionType,
  ILogInSuccessAction,
} from "./types";

export const initialState: IAuthState = {
  currentUser: null,
  error: false,
  loading: false,
  isLoggedIn: false,
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
        isLoggedIn: false,
      };
    case AuthActionType.SIGNUP_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        isLoggedIn: false,
      };
    case AuthActionType.LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        isLoggedIn: false,
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: (action as ILogInSuccessAction).payload,
        error: false,
        loading: false,
        isLoggedIn: true,
      };
    case AuthActionType.LOGIN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: true,
        loading: false,
        isLoggedIn: false,
      };
    case AuthActionType.LOGOUT: {
      return {
        ...state,
        currentUser: null,
        error: false,
        loading: true,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
