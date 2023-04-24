export interface Answer {
  isSelected: boolean;
    type?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    image : string;
}
