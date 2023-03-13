import {GameQuestionAnswer} from "./GameQuestionAnswer.model";

export class GameInstance {
	Id: string;
	quizId:string;
	gameQuestionsAnswers: GameQuestionAnswer[ ];
	startTime: Date;
	endTime: Date;
}
