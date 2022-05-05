import {Component, OnInit} from '@angular/core';
import {RootState} from "./store";
import {Store} from "@ngrx/store";
import {IssueStats, selectStats} from "./store/issue/issue.selector";
import {Observable} from "rxjs";
import {reset} from "./store/issue/issue.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stats$: Observable<IssueStats>;

  constructor(private store: Store<RootState>) {
    this.stats$ = store.select(selectStats);
  }

  reset() {
    this.store.dispatch(reset());
  }
}
