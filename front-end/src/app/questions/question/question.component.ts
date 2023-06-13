import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Answer, Question, QuestionType} from '../../../models/question.model';
import {QuizService} from "../../../services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {AnswerService} from "../../../services/answer.service";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: any;
  public width: String = "";
  public margin: String = "";
  public isAnswered = false;
  public questionCount = 0;
  public quizEnded = false;
  public hasAnswered = false;
  public isAnswerChecked = false;
  public switchState = false;
  public transform2: String = "";
  public transform: String = "scale(1) translateX(-50%)";
  public zoomPoint: String = "1";
  public zoomPoint2: String = "1.5";
  public zindex2: String = "";
  public zindexAns: String = "10";
  public zindexQuest: String = "10";
  public zindexQuestImage: String = "10";
  public zindexPoint: String = "10";

  public transform3: String = "scale(1) translateX(-50%)";
  public transformAnswer: String = "";
  public transform4: String = "scale(1)";
  public position2: String = "";
  public position3: String = "unset";
  public margintop4: String = "";
  public margintop5: String = "5px";
  public marginbottom2: String = "";
  public marginbottom3: String = "0px";
  public width2: String = "";
  public width3: String = "64%";
  public marginleft2: String = "";
  public marginleft3: String = "18%";
  public margintop2: String = "";
  public margintop3: String = "1%";
  public background2: String = "";
  public background3: String = "unset";

  public marginleftContent: String = "";
  public margintopContent: String = "";
  public marginleftZoom: String = "";
  public marginleftPoint: String = "";
  public margintopPoint: String = "";
  public marginrightPoint: String = "10%";
  public margintopConfirmButton: String = "";
  public widthQuestImage: String = "";
  public margintopImage: String = "";
  public fontsizeQuest: String = "";
  public fontsizeAns: String = "";
  public transformSuiv: String = "";
  public transformPrec: String = "";
  public marginTopAudio: String = "";
  public marginTopBM: String = "";

  public marginleftQuestImageStade3: String = "";
  public marginrifhtPrecStade3: String = "";
  public marginleftSuivStade3: String = "";
  public fontsizeRes: String = "";
  public audiosrc: string;

  public zoomCount = 0;
  public timer: any;



  questionList: Question[] = [];

  indexQuestion: number = 0;

  @Input()
  questionType: QuestionType;

  @Input()
  question: Question;

  answerList: Answer[] = [];

  correctAnswerList: number[] = [];

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router, private questionService: QuestionService,
              private answerService: AnswerService) {
    switch (sessionStorage.getItem("stade")) {


      case "2":
        this.width = "70%";
        this.widthQuestImage = "24%";
        this.marginleftPoint = "70%";


        break;

      case "3":
        this.width = "50%";
        //this.marginleftContent="9%";
        //this.margintopContent="19.5%";
        this.marginleftZoom = "5%";
        this.marginleftPoint = "75%";
        //this.margintopConfirmButton="36.5%";
        //this.marginleftQuestImageStade3="-13%";
        //this.marginrifhtPrecStade3="1%";
        //this.marginleftSuivStade3="3%";
        this.widthQuestImage = "30%";
        this.margintopImage = "-27%";
        this.fontsizeRes = "140%";
        this.fontsizeQuest = "110%";
        this.fontsizeAns = "100%";
        this.transformPrec = "translateX(-206%) translateY(-300%)";
        this.transformSuiv = "translateX(133%) translateY(-300%)";
        this.marginTopBM = "-9%";
        break;

      default:
        this.marginleftZoom = "8%";
        this.marginleftPoint = "70%";
        //this.margintopConfirmButton="36.25%";
        this.widthQuestImage = "17%";
        this.margintopImage = "-14%";
        this.fontsizeRes = "180%";
        this.fontsizeQuest = "160%";
        this.fontsizeAns = "130%";
        this.transformPrec = "translateX(-270%) translateY(-300%)";
        this.transformSuiv = "translateX(195%) translateY(-300%)";
        this.marginTopAudio = "-4%";
        this.marginTopBM = "-5%";
        break;
    }
  }

  ngOnInit(): void {
    this.questionService.getQuestionsByQuizzId(this.route.snapshot.paramMap.get("id")).subscribe((questions) => {
      this.questionCount = questions.length;
      this.questionList = questions;
      this.question = this.questionList[this.indexQuestion];
      this.answerService.getAnswerByQuestionId(this.question.id).subscribe((answers) => {
        this.answerList = answers;
      });
      this.answerList.forEach((answer) => {
        answer.isSelected = false;
      });
      this.questionList.forEach((question) => {
        this.correctAnswerList.push(0);
      });
    });
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
          this.margintop4 = "-60px";
          this.marginbottom2 = "105px";
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
          this.margintop4 = "-60px";
          this.marginbottom2 = "105px";
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
          this.margintop4 = "-80px";
          this.marginbottom2 = "120px";
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
          this.margintop2 = "1%";
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
          this.margintop2 = "1%";
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
          this.margintop2 = "1%";
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
      }, 1500);
    }
  }

  resetTimer() {
    clearTimeout(this.timer);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  answerLayout(answer: Answer): void {
    if (answer.isCorrect) {
      answer.type += " C'est la bonne réponse";
    }
    answer.type += " C'est pas bon";
  }

  selectAnswer(answer : Answer) {
    if (this.hasAnswered) {
      return; // Sortir de la méthode si la réponse a déjà été validée
    }

    this.answerList.forEach((answer) => {
      answer.isSelected = false;
    });
    answer.isSelected = true;
    this.isAnswerSelected();
  }


  isAnswerSelected(): boolean {
    return this.answerList.some(answer => answer.isSelected);
  }

  isCorrectSelected(): boolean {
    return this.answerList.some(answer => answer.isSelected && answer.isCorrect);
  }


  nextClicked = false;

  checkAnswer(): void {
    if (this.hasAnswered) {
      return; // Sortir de la méthode si la réponse a déjà été validée
    }

    this.hasAnswered = true;
    this.nextClicked = true;
    this.isAnswerChecked = true;
    this.isAnswered = true;
    if(this.isCorrectSelected()) {
      this.correctAnswerList[this.indexQuestion] = 1;
    }
  }

  isQuestionAnswered(): boolean {
    return this.isAnswered;
  }

  getNext() {
    this.nextClicked = false;
    this.hasAnswered = false;
    this.isAnswerChecked = false;

    if (this.indexQuestion < this.questionCount - 1) {
      this.indexQuestion += 1;
      this.questionService.getQuestionsByQuizzId(this.route.snapshot.paramMap.get("id")).subscribe((data: Question[]) => {
        this.questionList = data;
        this.question = this.questionList[this.indexQuestion];
        this.answerService.getAnswerByQuestionId(this.question.id).subscribe((answers) => {
          this.answerList = answers;
        });
        this.answerList.forEach((answer) => {
          answer.isSelected = false;
        });
      });
      this.audiosrc = this.question.trackSources;
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

    if (this.indexQuestion > 0) {
      this.indexQuestion -= 1;
      this.questionService.getQuestionsByQuizzId(this.route.snapshot.paramMap.get("id")).subscribe((data: Question[]) => {
        this.questionList = data;
        this.question = this.questionList[this.indexQuestion];
        this.answerService.getAnswerByQuestionId(this.question.id).subscribe((answers) => {
          this.answerList = answers;
        });
        this.answerList.forEach((answer) => {
          answer.isSelected = false;
        });
      });

      this.audiosrc = this.question.trackSources;
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
    return this.correctAnswerList.filter((value) => {
      return value === 1;
    }).length;
  }

  public getAnswersCount(): number {
    return this.questionCount;
  }


  public answerReview(): boolean {
    if (this.getCorrectAnswersCount() > this.questionCount / 2 || this.getCorrectAnswersCount() === this.questionCount / 2) {
      return true;
    }
    return false;
  }

  public zoomReview(): boolean {
    if (this.zoomCount > (this.questionCount / 2)) {
      return false;
    }
    return true;
  }

  public restartQuiz(): void {
    for (const question of this.questionList) {
      this.hasAnswered = false;
    }
    this.indexQuestion = 0;
    this.questionService.getQuestionsByQuizzId(this.route.snapshot.paramMap.get("id")).subscribe((data: Question[]) => {
      this.questionList = data;
      this.question = this.questionList[this.indexQuestion];
      this.answerService.getAnswerByQuestionId(this.question.id).subscribe((answers) => {
        this.answerList = answers;
      });
      this.answerList.forEach((answer) => {
        answer.isSelected = false;
      });
    });
    this.quizEnded = false;
  }

  public goHome(): void {
    this.router.navigate(['/app-quiz-theme'])
  }
}

// }
