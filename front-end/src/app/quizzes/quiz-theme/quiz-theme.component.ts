import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme.model';
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";



@Component({
  selector: 'app-quiz-theme',
  templateUrl: './quiz-theme.component.html',
  styleUrls: ['./quiz-theme.component.scss']
})
export class QuizThemeComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private themeService : ThemeService){
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
    console.log(this.themeList);
  }

  ngOnInit(): void {

  }

  themeSelected(selected: boolean): void {
    console.log('event received from child:', selected);
  }

}
