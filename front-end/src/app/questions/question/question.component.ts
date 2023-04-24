import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {Stade1Component} from "../../vision/stade1/stade1.component";
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public width:String="";
  public margin:String= "";
  @Input()
  quizOG: Quiz;

  @Input()
  question: Question;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quizOG = quiz)
    switch (sessionStorage.getItem("stade")){
      case "1": break;
      case "2": this.width="70%";this.margin="15.5%";break;
      case "3": this.width="50%";this.margin="25%";break;
      default: this.router.navigate(['/stade1'])
    }
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

  selectAnswer(answer: any) {
    this.question.answers.forEach(a => a.isSelected = false);
    answer.isSelected = true;
  }

  isAnswerSelected(): boolean {
    return this.question.answers.some(a => a.isSelected);
  }

  isCorrectSelected(): boolean {
    const selectedAnswer = this.question.answers.find(a => a.isSelected);
    return selectedAnswer && selectedAnswer.isCorrect;
  }

  nextClicked = false;

  checkAnswer(): void {
    this.nextClicked = true;
    if (this.isCorrectSelected()) {
      this.quizOG.points += 1;
    }
  }

  getNext() {
    this.nextClicked = false;
    const index = this.quizOG.questions.indexOf(this.question);
    if (index < this.quizOG.questions.length - 1) {
      this.question = this.quizOG.questions[index + 1];
    } else {
      this.router.navigate(['/quiz-list']);
    }
    this.question.answers.forEach(a => a.isSelected = false);
  }

  getPrevious() {
    this.nextClicked = false;
    const index = this.quizOG.questions.indexOf(this.question);
    if (index < this.quizOG.questions.length) {
      this.question = this.quizOG.questions[index - 1];
    }
    this.question.answers.forEach(a => a.isSelected = false);
  }
}
