import {ActionReducer} from "@ngrx/store";
import {reset} from './issue/issue.action';

export const resettingMetaReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === reset.type) {
      // when undefined state is passed, reducer will return initial state
      return reducer(undefined, action);
    }
    return reducer(state, action);
  };
};
