import { ISliceAction, ISliceState } from "../types/error.types";

const errorReducer = (sliceState: ISliceState, sliceAction: any) => {
  if (sliceAction.error === true) {
    return {
      ...sliceState,
      error: {
        ...sliceAction.payload,
      },
    };
  }

  return {
    ...sliceState,
    error: null,
  };
};

export default errorReducer;
