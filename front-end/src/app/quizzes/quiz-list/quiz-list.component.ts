import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from "../../../configs/server.config";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  public visibility: String = "hidden"
  public recherche:FormGroup;
  public quizList: Quiz[] = [];
  public quizListTemp:Quiz[]=[];
  @Output()
  public theme;


  constructor(private router: Router, public quizService: QuizService, private route: ActivatedRoute, private http: HttpClient) {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.retrieveQuizzesByTheme(id).subscribe((quizzes) => {
      this.quizList = quizzes;
      this.quizListTemp=quizzes;
    })

  }


  ngOnInit(): void {

    this.recherche = new FormGroup({
      motrecherche: new FormControl('')
    })

    if (sessionStorage.getItem("admin?") == "true") {
      this.visibility = "visible";
    } else {
      this.visibility = "hidden";
    }
  }


  editQuiz(quiz: Quiz): void {
    this.router.navigate(['/edit-quiz/' + quiz.name]);
  }

  deleteQuiz(quiz: Quiz): void {
    this.http.delete(serverUrl+"/quizzes/" + quiz.id).subscribe(() => {
      this.quizList = this.quizList.filter(q => q.id != quiz.id);
    });
  }

  getQuizzes(): void {
    this.quizList = this.quizListTemp;
    const content = this.recherche.getRawValue().motrecherche as string;
    const searchContent = content.toLowerCase(); // Convertir la recherche en minuscules

    this.quizList = this.quizList.filter((quiz) =>
      quiz.name.toLowerCase().includes(searchContent)
    );
  }
}
