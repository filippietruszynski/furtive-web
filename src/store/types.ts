import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { IUserState } from "./auth/types";

export interface IRootState {
  user: IUserState;
}

export type ApiAction<T extends AnyAction> = ThunkAction<
  Promise<unknown>,
  IRootState,
  undefined,
  T
>;
