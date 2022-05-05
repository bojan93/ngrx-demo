import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Issue} from "../models/issue";

@Injectable({providedIn: 'root'})
export class IssuesService {

  constructor(private httpClient: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>('http://localhost:3000/issues');
  }
}
