import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from '../../../models/theme.model';
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-quiz-theme',
  templateUrl: './quiz-theme.component.html',
  styleUrls: ['./quiz-theme.component.scss']
})
export class QuizThemeComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private themeService: ThemeService, private http: HttpClient) {
  }


  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe((themes) => {
        this.themeList = themes;
      }
    );
  }

  @Input()
  theme?: Quiz;

  @Output()
  themeSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectTheme(): void {
    this.themeSelected.emit(true);
  }

}
