import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {HttpClient} from '@angular/common/http';
import {AnswerService} from "../../../services/answer.service";
import {Answer} from "../../../models/question.model";

@Component({
  selector: 'answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
  public visibility: String = "hidden"

  public answerList: Answer[] = [];
  @Output()
  public theme;
  answer: Answer;


  constructor(private router: Router, public quizService: QuizService, private route: ActivatedRoute, private http: HttpClient,
              private answerService: AnswerService) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.answerService.getAnswerByQuestionId(parseInt(id)).subscribe((answerList: Answer[]) => {
      this.answerList = answerList;
    });

    if (sessionStorage.getItem("admin?") == "true") {
      this.visibility = "visible";
    } else {
      this.visibility = "hidden";
    }
  }


  quizSelected(selected: boolean): void {

  }

  editQuiz(quiz: Quiz): void {
    this.router.navigate(['/edit-quiz/' + quiz.name]);
  }

  deleteAnswer(quiz: Quiz): void {

  }

  answerSelected() {
  }
}
