import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {metaReducers, reducers} from './store';
import { environment } from '../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {IssueEffects} from "./store/issue/issue.effects";

@NgModule({
  declarations: [
    AppComponent,
    NewIssueComponent,
    IssuesComponent,
    IssueListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([IssueEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
