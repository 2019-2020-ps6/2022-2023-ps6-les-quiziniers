import {Injectable} from "@angular/core";
import {serverUrl} from "../configs/server.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Answer, Question} from "../models/question.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answerUrl = serverUrl + '/answers';
  private questionUrl = '/questions';

  constructor(private http: HttpClient) {}

  getAnswerByQuestionId(questionId: number) : Observable<Answer[]>{
    return this.http.get<Answer[]>(this.answerUrl + this.questionUrl + '/' + questionId);
  }

  getAnswerByAnswerId( answerId: number) : Observable<Answer>{
    return this.http.get<Answer>(this.answerUrl + '/' + answerId);
  }

  getAllAnswers() : Observable<Answer[]>{
    return this.http.get<Answer[]>('/answers');
  }
}
