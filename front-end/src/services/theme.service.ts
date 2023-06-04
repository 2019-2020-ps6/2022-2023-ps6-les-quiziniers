import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
// import {THEME_LIST} from "../mocks/theme-list.mocks";
import {Theme} from "../models/theme.model";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themes: Theme[];
  private themeURL = serverUrl + '/themes';

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public themes$: BehaviorSubject<Theme[]>
    = new BehaviorSubject([]);

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.themes$.next(this.themes);
  }
  public themeSelected$: Subject<Quiz> = new Subject();
  getTheme(id: string): Observable<Theme> {
    return this.http.get<Theme>(this.themeURL+ '/' + id);
  }

  getAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themeURL);
  }
}
