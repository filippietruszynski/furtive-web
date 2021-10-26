import errorReducer from "./error.reducer";

import {
  IAuthState,
  IAuthAction,
  AuthActionType,
  ILogInUserSuccessAction,
} from "../types/auth.types";

export const initialState: IAuthState = {
  error: null,
  loading: false,
  isAuthenticated: false,
  currentUser: null,
};

const authReducer = (
  state: IAuthState | undefined = initialState,
  action: IAuthAction
): IAuthState => {
  switch (action.type) {
    case AuthActionType.SIGNUP_USER_REQUEST:
      return {
        ...state,
        ...errorReducer,
        loading: true,
      };
    case AuthActionType.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        ...errorReducer,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.SIGNUP_USER_ERROR:
      return {
        ...state,
        ...errorReducer,
        loading: false,
        isAuthenticated: false,
      };
    case AuthActionType.LOGIN_USER_REQUEST:
      return {
        ...state,
        ...errorReducer,
        loading: true,
        isAuthenticated: false,
      };
    case AuthActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...errorReducer(state, action),
        loading: false,
        isAuthenticated: true,
        currentUser: (action as ILogInUserSuccessAction).payload,
      };
    case AuthActionType.LOGIN_USER_ERROR:
      return {
        ...state,
        ...errorReducer,
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      };
    case AuthActionType.LOGOUT_USER: {
      return {
        ...state,
        ...errorReducer,
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
