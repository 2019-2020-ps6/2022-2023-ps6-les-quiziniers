import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  public visibility : String ="hidden"

  public quizList: Quiz[] = [];
  @Output()
  public theme;


  constructor(private router: Router, public quizService: QuizService, private route: ActivatedRoute) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
      const id = this.route.snapshot.paramMap.get('id');
      this.theme=id;
      console.log(this.quizList)

      this.quizList=this.quizList.filter(quiz => quiz.theme == id);
      console.log(this.quizList)
      if(sessionStorage.getItem("admin?")=="true"){
        this.visibility = "visible";
      }else {
        this.visibility = "hidden";
      }});

  }

  ngOnInit(): void {
  }

  quizSelected(selected: boolean): void {

  }

  editQuiz(quiz: Quiz): void {
    this.router.navigate(['/edit-quiz/' + quiz.name]);
  }

  deleteQuiz(quiz: Quiz): void {
    this.quizService.deleteQuiz(quiz);
  }
}
