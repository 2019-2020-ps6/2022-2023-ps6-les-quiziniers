import { Component, OnInit, Input, Output, EventEmitter,ViewChild, } from '@angular/core';
import {Answer, Question, QuestionType} from '../../../models/question.model';
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
  @ViewChild('audioPlayer') audioPlayer: any;
  public width:String="";
  public margin:String= "";
  public isAnswered = false;
  public quizEnded = false;
  public hasAnswered = false;
  public isAnswerChecked = false;
  public switchState = false;
  public transform2:String = "";
  public transform:String = "scale(1) translateX(-50%)";
  public zoomPoint:String = "1";
  public zoomPoint2:String = "1.5";
  public zindex2:String = "";
  public zindexAns:String = "10";
  public zindexQuest:String = "10";
  public zindexQuestImage:String = "10";
  public zindexPoint:String = "10";

  public transform3:String = "scale(1) translateX(-50%)";
  public transformAnswer:String = "";
  public transform4:String = "scale(1)";
  public position2:String = "";
  public position3:String = "unset";
  public margintop4:String = "";
  public margintop5:String = "5px";
  public marginbottom2:String = "";
  public marginbottom3:String = "0px";
  public width2:String = "";
  public width3:String = "64%";
  public marginleft2:String = "";
  public marginleft3:String = "18%";
  public margintop2:String = "";
  public margintop3:String = "2.5%";
  public background2:String = "";
  public background3:String = "unset";

  public marginleftContent:String = "";
  public margintopContent:String = "";
  public marginleftZoom:String = "";
  public marginleftPoint:String = "";
  public margintopPoint:String = "";
  public margintopConfirmButton:String = "";
  public widthQuestImage:String = "";
  public margintopImage:String = "";

  public marginleftQuestImageStade3:String = "";
  public marginrifhtPrecStade3:String = "";
  public marginleftSuivStade3:String = "";
  public audiosrc: string;

  public zoomCount = 0;
  public timer: any;

  @Input()
  quizOG: Quiz;

  @Input()
  questionType: QuestionType;

  @Input()
  question: Question;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quizOG = quiz)
    switch (sessionStorage.getItem("stade")){
      case "1":
        this.marginleftZoom="8%";
        this.marginleftPoint="83%";
        //this.margintopConfirmButton="36.25%";
        this.widthQuestImage="17%";
        this.margintopImage="-14%";
        break;

      case "2":
        this.width="70%";
        this.widthQuestImage="24%";

        break;

      case "3":
        this.width="50%";
        //this.marginleftContent="9%";
        //this.margintopContent="19.5%";
        this.marginleftZoom="4%";
        this.marginleftPoint="75%";
        //this.margintopConfirmButton="36.5%";
        //this.marginleftQuestImageStade3="-13%";
        //this.marginrifhtPrecStade3="1%";
        //this.marginleftSuivStade3="3%";
        this.widthQuestImage="30%";
        this.margintopImage="-23.5%";
        break;

      default:
        this.router.navigate(['/home-page-user/'])
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
    console.log(this.quizOG);
    if (this.quizOG.questions.length != 0) {
      this.question = this.quizOG.questions[0];
      this.questionType = this.question.type;

    }
    this.audiosrc = this.question.trackSources;
    return null;
  }
  delete(): void {
    this.deleteQuestion.emit(this.question);
  }




  toggleSwitch() {
    this.switchState = !this.switchState;
    if (this.switchState) {
      switch (sessionStorage.getItem("stade")) {
        case "1":
          this.transform2 = "scale(2) translateX(-25%)";
          this.transformAnswer = "scale(2)";
          this.zoomPoint2 = "1.5";
          this.zindex2 = "11";
          this.width2 = "35%";
          this.marginleft2 = "35%";
          this.margintop2 = "7%";
          this.background2 = "white";
          this.position2 = "relative";
          this.margintop4 = "-45%";
          this.marginbottom2 = "96%";
          break;
        case "2":
          this.transform2 = "scale(2) translateX(-25%)";
          this.transformAnswer = "scale(2)";
          this.zoomPoint2 = "1.5";
          this.zindex2 = "11";
          this.width2 = "35%";
          this.marginleft2 = "35%";
          this.margintop2 = "10%";
          this.background2 = "white";
          this.position2 = "relative";
          this.margintop4 = "-30%";
          this.marginbottom2 = "81%";
          break;
        case "3":
          this.transform2 = "scale(2) translateX(-25%)";
          this.transformAnswer = "scale(2)";
          this.zoomPoint2 = "1.5";
          this.zindex2 = "11";
          this.width2 = "45%";
          this.marginleft2 = "27.5%";
          this.margintop2 = "15%";
          this.background2 = "white";
          this.position2 = "relative";
          this.margintop4 = "-30%";
          this.marginbottom2 = "82%";
          break;
      }
    } else {
      switch (sessionStorage.getItem("stade")) {
        case "1":
          this.transform2 = "scale(1) translateX(-50%)";
          this.transformAnswer = "scale(1)";
          this.zoomPoint2 = "1";
          this.zindex2 = "10";
          this.width2 = "64%";
          this.marginleft2 = "18%";
          this.margintop2 = "2.5%";
          this.background2 = "unset";
          this.position2 = "unset";
          this.margintop4 = "5px";
          this.marginbottom2 = "0%";
          break;
        case "2":
          this.transform2 = "scale(1) translateX(-50%)";
          this.transformAnswer = "scale(1)";
          this.zoomPoint2 = "1";
          this.zindex2 = "10";
          this.width2 = "64%";
          this.marginleft2 = "18%";
          this.margintop2 = "2.5%";
          this.background2 = "unset";
          this.position2 = "unset";
          this.margintop4 = "5px";
          this.marginbottom2 = "0%";
          break;
        case "3":
          this.transform2 = "scale(1) translateX(-50%)";
          this.transformAnswer = "scale(1)";
          this.zoomPoint2 = "1";
          this.zindex2 = "10";
          this.width2 = "64%";
          this.marginleft2 = "18%";
          this.margintop2 = "2.5%";
          this.background2 = "unset";
          this.position2 = "unset";
          this.margintop4 = "5px";
          this.marginbottom2 = "0%";
          break;
      }
    }
  }

  incrementZoomCount() {
    if (this.switchState) {
      this.timer = setTimeout(() => {
        this.zoomCount += 1;
      }, 2000);
    }
  }

  resetTimer() {
    clearTimeout(this.timer);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  answerLayout(answer: Answer): void {
    console.log(answer);
    if (answer.isCorrect) {
      answer.type += " C'est la bonne réponse";
    }
    answer.type += " C'est pas bon";
  }

  selectAnswer(answer) {
    this.question.answers.forEach(a => a.isSelected = false);
    answer.isSelected = true;
  }


  isAnswerSelected(): boolean {
    return this.question.answers.some(answer => answer.isSelected);
  }

  isCorrectSelected(): boolean {
    return this.question.answers.some(answer => answer.isSelected && answer.isCorrect);
  }


  nextClicked = false;

  checkAnswer(): void {
    this.hasAnswered = true;
    this.nextClicked = true;
    this.isAnswerChecked = true;
    this.isAnswered = true;
    this.isCorrectSelected();
    if (this.isCorrectSelected()) {
      this.quizOG.points += 1;
    }
  }

  isQuestionAnswered(): boolean {
    return this.isAnswered;
  }

  getNext() {
    this.nextClicked = false;
    this.hasAnswered = false;
    this.isAnswerChecked = false;

    const index = this.quizOG.questions.indexOf(this.question);
    if (index < this.quizOG.questions.length - 1) {
      this.question = this.quizOG.questions[index + 1];
      this.audiosrc= this.question.trackSources;
      this.audioPlayer.nativeElement.load();
      this.audioPlayer.nativeElement.play();
      this.question.answers.forEach(a => a.isSelected = false);
    } else {
      this.quizEnded = true;
    }


  }


  getPrevious() {
    this.nextClicked = false;
    this.hasAnswered = false;
    this.isAnswerChecked = false;

    const index = this.quizOG.questions.indexOf(this.question);
    if (index < this.quizOG.questions.length) {
      this.question = this.quizOG.questions[index - 1];
      this.audiosrc= this.question.trackSources;
      this.audioPlayer.nativeElement.load();
      this.audioPlayer.nativeElement.play();
    }
    this.question.answers.forEach(a => a.isSelected = false);
  }


  public QuestionType = QuestionType;

  public getAnswerValue(question: any): string {
    const selectedAnswer = question.answers.find(answer => answer.isSelected);
    if (selectedAnswer) {
      return selectedAnswer.value;
    }
    return 'Aucune réponse sélectionnée';
  }

  public getCorrectAnswerValue(question: any): string {
    const correctAnswer = question.answers.find(answer => answer.isCorrect);
    if (correctAnswer) {
      return correctAnswer.value;
    }
    return 'Aucune réponse correcte';
  }

  public getCorrectAnswersCount(): number {
    let count = 0;
    for (const question of this.quizOG.questions) {
      if (question.answers.some(answer => answer.isSelected && answer.isCorrect)) {
        count++;
      }
    }
    return count;
  }

  public answerReview(): boolean {
    if(this.getCorrectAnswersCount() > this.quizOG.questions.length / 2) {
      return true;
    }
    return false;
  }

  public restartQuiz(): void {
    for (const question of this.quizOG.questions) {
      for (const answer of question.answers) {
        answer.isSelected = false;
      }
    }
    this.question = this.quizOG.questions[0];
    this.quizEnded = false;
    this.quizOG.points = 0;
  }

  public goHome(): void {
    this.router.navigate(['/app-quiz-theme'])
  }
}
// }
