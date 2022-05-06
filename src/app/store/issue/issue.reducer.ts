import {Issues, IssueState} from "./issue.state";
import {createReducer, on} from "@ngrx/store";
import {
  loadSuccess, resolveFailure,
  resolveIssue,
  searchIssue,
  submitSuccess
} from "./issue.action";

const initialState: IssueState = {issues: {}, filter: '', loaded: false};

export const issueReducer = createReducer(
  initialState,
  on(submitSuccess, (state: IssueState, {issue}) => {
    return {
      ...state,
      issues: {
        ...state.issues,
        [issue.id]: issue
      }
    };
  }),
  on(resolveIssue, (state: IssueState, {id}) => {
    return {
      ...state,
      issues: {
        ...state.issues,
        [id]: {
          ...state.issues[id],
          resolved: true
        }
      }
    }
  }),
  on(resolveFailure, (state: IssueState, {id}) => {
    return {
      ...state,
      issues: {
        ...state.issues,
        [id]: {
          ...state.issues[id],
          resolved: false
        }
      }
    }
  }),
  on(searchIssue, (state: IssueState, {text}) => {
    return {
      ...state,
      filter: text
    }
  }),
  on(loadSuccess, (state: IssueState, {issues}) => {
    const entities: Issues = {};
    issues.forEach(issue => entities[issue.id] = issue);
    return {
      ...state,
      issues: entities,
      loaded: true
    }
  })
);

