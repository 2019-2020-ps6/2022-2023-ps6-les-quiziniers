import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Theme} from "../../../models/theme.model";
import { ThemeService } from '../../../services/theme.service';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {User} from "../../../models/user.model";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

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
  ngOnInit(): void {
    this.themename=this.themeService.getTheme(this.theme).name;
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme:[this.theme],
      image:[''],
      points:0
    });
  }

  addQuiz(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    this.quizService.addQuiz(quizToCreate);

  }
  constructor(public formBuilder: FormBuilder, public quizService: QuizService, public themeService: ThemeService) {
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  validateNumber(inputValue: string): void {
    this.numberValue = parseFloat(inputValue.replace(/[^0-9.]/g, ''));
  }

}
