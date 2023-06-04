export interface Answer {
  isSelected: boolean;
    type?: string;
    value: string;
    isCorrect: boolean;
    question : number;
}

export interface Question {
    id: number;
    label: string;
    answers: Answer[];
    image : string;
    type : QuestionType;
    trackSources ?: string;
}

export enum QuestionType {
  Blindtest  ,
  QCM ,
}
