import {Question} from "./question.model";
import {Quiz} from "./quiz.model";

export interface Theme {
  id: string;
  name: string;
  image:string;
  quizList: Quiz[];
}
