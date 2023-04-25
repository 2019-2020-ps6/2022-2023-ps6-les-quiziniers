import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import {QUESTION_ACTOR2, QUESTION_CAPITALES} from "./question.mocks";
import {QUESTION_ACTOR1} from "./question.mocks";
import {QUESTION_HISTOIRE1} from "./question.mocks";
import {QUESTION_HISTOIRE2} from "./question.mocks";
export const QUIZ_LIST: Quiz[] = [ {
  id: '1',
  name: 'Les Acteurs',
  theme: '6',
  questions: [QUESTION_ACTOR1,QUESTION_ACTOR2],
  points : 0,
  image:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Oscar_statuette.jpg"
},
  {
    id: '2',
    name: 'Les capitales',
    theme: '2',
    questions: [QUESTION_CAPITALES],
    points : 0,
    image:"https://www.actualitix.com/wp-content/uploads/2017/08/carte-capitales-du-monde-1024x614.jpg"
  },
  {
    id: '3',
    name: 'Les grandes batailles',
    theme: '1',
    questions: [QUESTION_HISTOIRE1,QUESTION_HISTOIRE2],
    points : 0,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg/300px-La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg"
  }

];

export const QUIZ_LIST_HISTOIRE: Quiz[] = [ {
  id: '3',
  name: 'Les grandes batailles',
  theme: '1',
  questions: [QUESTION_HISTOIRE1,QUESTION_HISTOIRE2],
  points : 0,
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg/300px-La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg"
}
];

