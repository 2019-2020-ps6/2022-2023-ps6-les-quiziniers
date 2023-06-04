import {Component, Input, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import { QuizListComponent } from "../quiz-list/quiz-list.component";
import { ThemeService } from '../../../services/theme.service';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {Theme} from "../../../models/theme.model";
import {ThemeListComponent} from "../theme-list/theme-list.component";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-quiz-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent implements OnInit {


  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  theme: string;
  public themename:string;
  public themes: Theme[];
  public themeForm: FormGroup;
  public numberValue: number;
  public themeL:ThemeListComponent;
  deleteForm : FormGroup;
  ngOnInit():void {
    this.themeService.getTheme(this.route.snapshot.paramMap.get("id")).subscribe((theme) => {
      this.themename=theme.name;
    });
    // add each theme to the list of themes
    this.themeService.getAllThemes().subscribe((themes) => {
      this.themes = themes;
    });
    this.themeForm = this.formBuilder.group({
      name: [''],
      image:['']
    });
    this.deleteForm = this.formBuilder.group({
      id: ['']
    });
  }

  addtheme(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const themeToCreate: Theme = this.themeForm.getRawValue() as Theme;
    themeToCreate.name=this.themeForm.get('name').value;
    themeToCreate.image=this.themeForm.get('image').value;
    this.themeService.addTheme(themeToCreate);
  }
  constructor(public formBuilder: FormBuilder, public quizService: QuizService, public themeService: ThemeService, private route: ActivatedRoute,
              private http: HttpClient, private router: Router) {
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  validateNumber(inputValue: string): void {
    this.numberValue = parseFloat(inputValue.replace(/[^0-9.]/g, ''));
  }

  addTheme() {
    // get values from the form and create a new theme with http post request
    const themeToCreate: Theme = this.themeForm.getRawValue() as Theme;
    themeToCreate.name=this.themeForm.get('name').value;
    themeToCreate.image=this.themeForm.get('image').value;
    this.themeService.addTheme(themeToCreate).subscribe((theme) => {
      this.router.navigate(['/themes']);
    });
  }

  deleteTheme() {
// get values from the form and delete the theme with http delete request
    let idToDelete = this.deleteForm.get('id').value;
    this.themeService.deleteThemebyId(idToDelete).subscribe((theme) => {
      this.router.navigate(['/themes']);
    });
  }
}
