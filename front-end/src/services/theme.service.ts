import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {THEME_LIST} from "../mocks/theme-list.mocks";
import {Theme} from "../models/theme.model";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themes: Theme[] = THEME_LIST;

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public themes$: BehaviorSubject<Theme[]>
    = new BehaviorSubject(this.themes);

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.themes$.next(this.themes);
  }

}
