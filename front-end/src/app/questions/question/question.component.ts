import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  quizOG: Quiz;

  @Input()
  question: Question;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quizOG = quiz)
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id)

    console.log(this.quizOG);
    if (this.quizOG.questions.length != 0) {
      this.question = this.quizOG.questions[0];
    }
    return null;
  }

  delete(): void {
    this.deleteQuestion.emit(this.question);
  }

  answerLayout(answer: Answer): void {
    console.log(answer);
    if (answer.isCorrect) {
      answer.type += " C'est la bonne réponse";
    }
    answer.type += " C'est pas bon";
  }
}
