import {
  IError,
  IErrorAction,
  IErrorActionType,
  IErrorResponse,
} from "../types/error.types";

export const errorActionCreator = (
  errorActionType: IErrorActionType,
  errorResponse: IErrorResponse
): IErrorAction => {
  return {
    type: errorActionType,
    payload: errorResponse as IError,
    error: true,
  };
};
