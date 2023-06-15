import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { QuizListComponent } from "../quiz-list/quiz-list.component";
import { ThemeService } from '../../../services/theme.service';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {Theme} from "../../../models/theme.model";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import {serverUrl} from "../../../configs/server.config";


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {


  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  @Input() theme: string;
  public themename:string;
  public quizForm: FormGroup;
  public numberValue: number;
  public quizL:QuizListComponent;
  themes: Theme[];
  ngOnInit(): void {
    this.themeService.getTheme(this.route.snapshot.paramMap.get("id")).subscribe((theme) => {
      this.themename=theme.name;
    });
    this.quizForm = this.formBuilder.group({
      name: ['', Validators.required],
      theme:[this.themename, Validators.required],
      image:['', Validators.required]
    });
    // add all existing themes to the select
    this.themeService.getAllThemes().subscribe((themes) => {
      this.themes = themes;
    });
  }

  addQuiz() {
    const quiz = this.quizForm.value;
    this.http.post(serverUrl+'/quizzes', quiz)
      .subscribe(
        response => {
          console.log('Quiz ajouté avec succès à la base de données.');
          this.router.navigate(['/quiz-list']);
        },
        error => {
          console.error('Erreur lors de l\'ajout du quiz :', error);
        }
      );
  }
  constructor(public formBuilder: FormBuilder, public quizService: QuizService, public themeService: ThemeService, private route: ActivatedRoute, private http: HttpClient
              ,private router: Router) {
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  validateNumber(inputValue: string): void {
    this.numberValue = parseFloat(inputValue.replace(/[^0-9.]/g, ''));
  }

  setTheme(id, name) {
    this.theme = name;
  }
}
