import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];


  constructor(private router: Router, public quizService: QuizService, private route: ActivatedRoute) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;})
    //recuperer les quiz avec le id du theme;
    const id = this.route.snapshot.paramMap.get('id');
    this.quizList=this.quizList.filter(quiz => quiz.theme == id);
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
