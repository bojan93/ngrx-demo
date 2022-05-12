import {Actions, createEffect, ofType, OnInitEffects} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {
  loadIssues,
  loadSuccess, resolveFailure,
  resolveIssue,
  resolveSuccess,
  submitIssue,
  submitSuccess
} from "./issue.action";
import {catchError, map, of, mergeMap} from "rxjs";
import {IssuesService} from "../../services/issues.service";

@Injectable()
export class IssueEffects implements OnInitEffects{
  constructor(private actions$: Actions, private issuesService: IssuesService) {
  }

  loadIssues$ = createEffect(() => this.actions$.pipe(
    ofType(loadIssues),
    mergeMap(() => {
      return this.issuesService.getIssues();
    }),
    map(issues => loadSuccess({issues}))
  ));

  submitIssue$ = createEffect(
    () => this.actions$.pipe(
      ofType(submitIssue),
      mergeMap((action) => this.issuesService.saveIssue(action.issue)),
      map(issue => submitSuccess({issue}))
    )
  );

  resolveIssue$ = createEffect(
    () => this.actions$.pipe(
      ofType(resolveIssue),
      mergeMap((action) => this.issuesService.resolveIssue(action.id).pipe(
        map(() => resolveSuccess()),
        catchError(() => of(resolveFailure({id: action.id})))
      )),
    )
  );

  // on class initialization
   ngrxOnInitEffects() {
     return loadIssues();
   }
}
