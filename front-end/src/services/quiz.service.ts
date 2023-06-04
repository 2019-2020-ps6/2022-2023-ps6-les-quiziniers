import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {FormBuilder} from "@angular/forms";
import {QuizFormComponent} from "../app/quizzes/quiz-form/quiz-form.component";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = [];

  private quiz : Quiz=null;

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]>
    = new BehaviorSubject(this.quizzes);

  public quiz$ : BehaviorSubject<Quiz>=
    new BehaviorSubject(this.quiz);


  public quizSelected$: Subject<Quiz> = new Subject();

  private quizUrl = serverUrl + '/quizzes';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveQuizzes();
  }

  retrieveQuizzes(): void {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    })
  }

  retrieveQuizzesByTheme(themeId: string): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizUrl)
      .pipe(map((quizzes) => quizzes.filter((quiz) => quiz.theme === themeId)));
  }

  addQuiz(quiz: Quiz): void {
    this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }



  setSelectedQuiz(quizId: string): void {
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quiz$.next(quiz)
    })
  }

  updateQuiz(quiz:Quiz):void{
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.put<Quiz>(urlWithId, quiz, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  getTracks(): any[] {
    return [
      {
        src: 'path/to/track1.mp3',
        options: ['Option 1'],
      },]
  };
}
