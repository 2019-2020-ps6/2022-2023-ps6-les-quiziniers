import {Injectable} from "@angular/core";
import {serverUrl} from "../configs/server.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../models/question.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private quizUrl = serverUrl + '/quizzes';
  private questionUrl = '/questions';

    constructor(private http: HttpClient) {}

    getQuestionsByQuizzId(quizId: string) : Observable<Question[]>{
      return this.http.get<Question[]>(serverUrl +'/questions/quizzes/' + quizId);
    }

  getQuestionsByQuizzIdAndQuestionId(quizId: string,questionId: string) : Observable<Question>{
    return this.http.get<Question>(this.quizUrl + '/' + quizId + this.questionUrl+'/'+questionId);
  }

  deleteQuestion(quizId: string,questionId: string) : Observable<Question>{
    return this.http.delete<Question>(serverUrl + '/questions/' + questionId);
  }
}
