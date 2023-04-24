import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {THEME_LIST} from "../mocks/theme-list.mocks";
import {Theme} from "../models/theme.model";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private themes: Theme[] = THEME_LIST;

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public themes$: BehaviorSubject<Theme[]>
    = new BehaviorSubject(this.themes);

  public quizSelected$: Subject<Quiz> = new Subject();

  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {

  }

  retrieveQuizzes(): void {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.themes = quizList;
      this.themes$.next(this.themes);
    });
  }

  addQuiz(quiz: Quiz): void {
    this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  setSelectedQuiz(quizId: string): void {
    /*const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    });*/
    console.log(this.quizzes.find(x=>x.id===quizId))
    this.quizSelected$.next(this.quizzes.find(x=>x.id===quizId));

  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  addQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  deleteQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    this.http.delete<Question>(questionUrl, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  /*
  Note: The functions below don't interact with the server. It's an example of implementation for the exercice 10.
  addQuestion(quiz: Quiz, question: Question) {
    quiz.questions.push(question);
    const index = this.quizzes.findIndex((q: Quiz) => q.id === quiz.id);
    if (index) {
      this.updateQuizzes(quiz, index);
    }
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    const index = quiz.questions.findIndex((q) => q.label === question.label);
    if (index !== -1) {
      quiz.questions.splice(index, 1)
      this.updateQuizzes(quiz, index);
    }
  }

  private updateQuizzes(quiz: Quiz, index: number) {
    this.quizzes[index] = quiz;
    this.quizzes$.next(this.quizzes);
  }
  */
}
