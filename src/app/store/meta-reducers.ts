import {ActionReducer} from "@ngrx/store";
import {reset} from './issue/issue.action';

export const resettingMetaReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === reset.type) {
      return reducer(undefined, action);
    }
    return reducer(state, action);
  };
};
