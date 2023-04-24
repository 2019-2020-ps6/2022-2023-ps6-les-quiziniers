import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme.model';


@Component({
  selector: 'app-quiz-theme',
  templateUrl: './quiz-theme.component.html',
  styleUrls: ['./quiz-theme.component.scss']
})
export class QuizThemeComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(){
  }

  ngOnInit(): void {
  }

  themeSelected(selected: boolean): void {
    console.log('event received from child:', selected);
  }

}
