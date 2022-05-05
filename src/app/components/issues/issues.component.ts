import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/issue';
import {Store} from "@ngrx/store";
import {RootState} from "../../store";
import {resolveIssue, searchIssue, submitIssue} from "../../store/issue/issue.action";
import {selectAllFiltered} from "../../store/issue/issue.selector";
import {randomId} from "../../utils/util";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  issues$: Observable<Issue[]>;

  constructor(private store: Store<RootState>) {
    this.issues$ = this.store.select(selectAllFiltered);
  }

  onSearch(text: string): void {
    this.store.dispatch(searchIssue({text}));
  }

  onResolve(issue: Issue): void {
    this.store.dispatch(resolveIssue({id: issue.id}));
  }

  onSubmit(issue: Issue): void {
    this.store.dispatch(submitIssue({issue: {...issue, id: randomId()}}));
  }
}
