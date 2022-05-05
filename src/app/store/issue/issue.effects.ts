import {Actions, createEffect, ofType, OnInitEffects} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {loadIssues, loadSuccess} from "./issue.action";
import {map, switchMap} from "rxjs";
import {IssuesService} from "../../services/issues.service";

@Injectable()
export class IssueEffects {
  constructor(private actions$: Actions, private issuesService: IssuesService) {
  }

  loadIssues$ = createEffect(() => this.actions$.pipe(
    ofType(loadIssues),
    switchMap(() => {
      return this.issuesService.getIssues();
    }),
    map(issues => loadSuccess({issues}))
  ));
}
