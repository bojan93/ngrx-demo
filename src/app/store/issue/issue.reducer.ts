import {Issues, IssueState} from "./issue.state";
import {createReducer, on} from "@ngrx/store";
import {loadSuccess, resolveIssue, searchIssue, submitIssue} from "./issue.action";
import {IssueStats} from "./issue.selector";

const initialState: IssueState = {issues: {}, filter: ''};

export const issueReducer = createReducer(
  initialState,
  on(submitIssue, (state: IssueState, {issue}) => {
    return {
      ...state,
      issues: {
        ...state.issues,
        [issue.id]: {
          ...issue,
          resolved: false
        }
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
  on(searchIssue, (state: IssueState, {text}) => {
    return {
      ...state,
      filter: text
    }
  }),
  on(loadSuccess, (state: IssueState, {issues}) => {
    console.log('running load success in reducer');
    const entities: Issues = {};
    issues.forEach(issue => entities[issue.id] = issue);
    return {
      ...state,
      issues: entities,
      loaded: true
    }
  })
);

