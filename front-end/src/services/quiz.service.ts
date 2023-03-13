import { Injectable } from '@angular/core';
import { QUIZ_LIST } from '../mocks/quiz-list.mocks';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import { Quiz } from 'src/models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //The list of quiz. The list is retrieved from the mock.
  private quizzes: Quiz[] = QUIZ_LIST; // Ici on initialise la valeur avec un mock QUIZ_LIST
  // @ts-ignore
  // Observable containing a list of quizzes, initialized with an empty array.
  // Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
  // @ts-ignore
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject([]);

  // The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
  constructor(private http: HttpClient) {}

  //addQuizz() { … }

  //deleteQuizz(id: string) { … }


}
