import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Issue} from "../models/issue";

@Injectable({providedIn: 'root'})
export class IssuesService {

  constructor(private httpClient: HttpClient) {}

  private serverUrl = 'http://localhost:3000';
  private issuesUrl = `${this.serverUrl}/issues`;

  getIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(this.issuesUrl);
  }

  saveIssue(issue: Issue): Observable<Issue> {
    return this.httpClient.post<Issue>(this.issuesUrl, issue);
  }

  resolveIssue(id: string): Observable<Issue> {
    return this.httpClient.patch<Issue>(`${this.issuesUrl}/${id}`, {resolved: true})
  }
}
