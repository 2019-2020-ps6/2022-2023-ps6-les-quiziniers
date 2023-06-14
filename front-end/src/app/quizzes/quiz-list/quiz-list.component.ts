import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from "../../../configs/server.config";

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  public visibility: String = "hidden"

  public quizList: Quiz[] = [];
  @Output()
  public theme;


  constructor(private router: Router, public quizService: QuizService, private route: ActivatedRoute, private http: HttpClient) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.retrieveQuizzesByTheme(id).subscribe((quizzes) => {
      this.quizList = quizzes;
    })

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

  deleteQuiz(quiz: Quiz): void {
    this.http.delete(serverUrl+"/quizzes/" + quiz.id).subscribe(() => {
      this.quizList = this.quizList.filter(q => q.id != quiz.id);
    });
  }
}
