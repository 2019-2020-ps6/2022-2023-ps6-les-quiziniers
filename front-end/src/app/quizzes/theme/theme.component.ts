import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/theme.model';
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import{Input} from "@angular/core";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  @Input()
  public theme:Theme;

  constructor(){}


  ngOnInit(): void {

  }

  themeSelected(selected: boolean): void {
    console.log('event received from child:', selected);
  }

}
