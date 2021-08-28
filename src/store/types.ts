import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { IUserState } from "./user/types";

export interface IRootState {
  user: IUserState;
}

export type ApiAction<T extends AnyAction> = ThunkAction<
  Promise<unknown>,
  IRootState,
  undefined,
  T
>;
