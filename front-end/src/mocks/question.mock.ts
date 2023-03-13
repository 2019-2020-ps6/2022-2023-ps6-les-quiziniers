import { Question } from '../app/models/question.model';

export const QUESTION_ACTOR: Question = {
  id: '1',
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      type:"Facile",
      value: 'Les tuches II',
      isCorrect: false,
    },
    {
      type:"Facile",
      value: 'La grande illusion',
      isCorrect: true,
    }
  ]
};


