export class GameQuestionAnswer {
	startDate: Date;
	submissionDate: Date;
	questionId: string;  // or question: Question to keep the question and answers given even if the question or answers are updated later
	answerIds: string[]; // or answers: Answers[]
}
