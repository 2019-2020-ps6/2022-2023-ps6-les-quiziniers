import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  themeSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){}


  ngOnInit(): void {

  }

  selectTheme(): void {
    this.themeSelected.emit(true);
  }

}
