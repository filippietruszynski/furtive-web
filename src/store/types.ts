import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { IAuthState } from "./auth/types";

export interface IRootState {
  auth: IAuthState;
}

export type ApiAction<T extends AnyAction> = ThunkAction<
  Promise<unknown>,
  IRootState,
  undefined,
  T
>;
