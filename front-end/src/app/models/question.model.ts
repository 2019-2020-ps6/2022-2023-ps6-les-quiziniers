export interface GameInstance {
  Id: string;
  quizId:string;
  gameQuestionsAnswers: GameQuestionAnswer[ ];
  startTime: Date;
  endTime: Date;
}

export interface GameQuestionAnswer {
  startDate: Date;
  submissionDate: Date;
  question:Question;  // or question: Question to keep the question and answers given even if the question or answers are updated later// or answers: Answers[]
}
export interface Answer {
  type?: string;
  value: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  label: string;
  answergs: Answer[];
}
