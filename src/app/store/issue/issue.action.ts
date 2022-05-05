import {createAction, props} from "@ngrx/store";
import {Issue} from '../../models/issue';

export const submitIssue = createAction(
  '[Issue] Submit',
  props<{issue: Issue}>()
);

export const resolveIssue = createAction(
  '[Issue] Resolve',
  props<{id: string}>()
);

export const searchIssue = createAction(
  '[Issue] Search',
  props<{text: string}>()
);

export const reset = createAction('[Issue] Reset');

export const loadIssues = createAction('[Issue] Load');

export const loadSuccess = createAction(
  '[Issue] Load success',
  props<{issues: Issue[]}>()
);
