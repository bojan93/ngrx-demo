import {Issue} from "../../models/issue";

export interface Issues {
  [id:string]: Issue;
}

export interface IssueState {
  issues: Issues;
  filter: string;
}
