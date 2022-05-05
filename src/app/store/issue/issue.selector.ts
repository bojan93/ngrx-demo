import {RootState} from "../index";
import {createSelector} from "@ngrx/store";

export interface IssueStats {
  total: number;
  resolved: number;
}

export const selectFeature = (state: RootState) => state.issue;

const selectIssues = createSelector(
  selectFeature,
  ({issues}) => issues
);

export const selectFilter = createSelector(
  selectFeature,
  ({filter}) => filter
);


export const selectAll = createSelector(
  selectIssues,
  issues => issues ? Object.values(issues) : []
);

export const selectAllFiltered = createSelector(
  selectAll,
  selectFilter,
  (issuesArr, filter) => {
    if (filter) {
     return issuesArr.filter(i => i.title.includes(filter) || i.description.includes(filter));
    }
    return issuesArr;
});

export const selectStats = createSelector(
  selectAll,
  issuesArr => {
    const total = issuesArr.length;
    const resolved = issuesArr.filter(e => e.resolved).length;
    return {total, resolved} as IssueStats;
  }
);
