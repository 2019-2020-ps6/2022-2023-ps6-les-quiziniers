import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Theme} from "../../../models/theme.model";
import {ThemeService} from "../../../services/theme.service";
import {QuestionService} from "../../../services/question.service";
import {Question} from "../../../models/question.model";


@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quiz: Quiz;
  public quizForm: FormGroup;
  public themes : Theme[];
  public questionList : Question[];
  deleteForm : FormGroup;

  constructor(public formBuilder: FormBuilder,private route: ActivatedRoute,private themeService : ThemeService, private quizService: QuizService , private http: HttpClient, private router : Router, private questionService : QuestionService) {
    this.quizService.quiz$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id)
    this.themeService.getAllThemes().subscribe((themes) => {
      this.themes = themes;
    });
    this.quizForm = this.formBuilder.group({
      name: [this.quiz.name],
      image: [this.quiz.image],
      theme: [this.quiz.theme],
    });
    this.questionService.getQuestionsByQuizzId(this.quiz.id).subscribe((questions) => {
      this.questionList = questions;
    });
    this.deleteForm = this.formBuilder.group({
      id: '',
    });
  }


  updateQuiz(): void {
    // get the quiz from the form and update it with a http put request
    const quiz = this.quizForm.value;
    this.http.put('http://localhost:9428/api/quizzes/' + this.quiz.id, quiz)
      .subscribe(
        response => {
          console.log('Quiz modifié avec succès.');
          this.router.navigate(['/quiz-list']);
        },
        error => {
          console.error('Erreur lors de la modification du quiz :', error);
        });
  }


  setTheme(id, name) {
    this.themes = name;
  }

  deleteQuestion(){
    const question = this.deleteForm.value.id;
    console.log(question);
    this.questionService.deleteQuestion(this.quiz.id,question).subscribe((response) => {
      console.log('Question supprimée avec succès.');
      this.router.navigate(['/quiz-list']);
    }, (error) => {
      console.error('Erreur lors de la suppression de la question :', error);
    });
  }
}
