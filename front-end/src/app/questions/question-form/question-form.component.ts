import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {serverUrl} from "../../../configs/server.config";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  quiz: Quiz;

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private quizService: QuizService, private http: HttpClient,
              private router : Router) {
    // Form creation
    this.initializeQuestionForm();
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      image: ['', Validators.required],
      trackSources: '',
      answers: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.addAnswer();
    this.addAnswer();
    this.addAnswer();
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(): void {
    this.answers.push(this.createAnswer());
  }

  addQuestion(): void {
    // do the http request and add the question to the quiz also, add each answer to the question by http request with the question id
    const question = {
      label: this.questionForm.value.label,
      image: this.questionForm.value.image,
      trackSources :  (this.questionForm.value.trackSources) ? this.questionForm.value.trackSources : undefined,
    }
    let questionUrl = serverUrl+'/questions/' + this.quiz.id ;
    this.http.post(questionUrl, question)
      .subscribe(
        response => {
          console.log('Question ajoutée avec succès.');
          for(let i = 0; i<this.questionForm.value.answers.length; i++){
            const answer = {
              value: this.questionForm.value.answers[i].value,
              isCorrect: this.questionForm.value.answers[i].isCorrect,
              question: response['id'].toString(),
              isSelected : false,
            }
            this.http.post(serverUrl+'/answers', answer)
              .subscribe(
                response => {
                  console.log('Réponse ajoutée avec succès.');
                },
                error => {
                  console.error('Erreur lors de l\'ajout de la réponse :', error);
                });
          }
          this.router.navigate(['/quiz-list']);
        },
        error => {
          console.error('Erreur lors de l\'ajout de la question :', error);
        });

  }

  removeAnswer(i: number) {
    this.answers.removeAt(i);
  }
}
