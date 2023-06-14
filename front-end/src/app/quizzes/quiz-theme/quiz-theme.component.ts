import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from '../../../models/theme.model';
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-quiz-theme',
  templateUrl: './quiz-theme.component.html',
  styleUrls: ['./quiz-theme.component.scss']
})
export class QuizThemeComponent implements OnInit {

  public themeList: Theme[] = [];
  public themeListTemp:Theme[]=[];
  public recherche:FormGroup;

  constructor(private themeService: ThemeService, private http: HttpClient) {
  }


  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe((themes) => {
        this.themeList = themes;
        this.themeListTemp=themes;
      }
    );
    this.recherche = new FormGroup({
      motrecherche: new FormControl('')
    })
  }

  @Input()
  theme?: Quiz;

  @Output()
  themeSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectTheme(): void {
    this.themeSelected.emit(true);
  }

  getThemes(): void {
    this.themeList = this.themeListTemp;
    const content = this.recherche.getRawValue().motrecherche as string;
    const searchContent = content.toLowerCase(); // Convertir la recherche en minuscules

    this.themeList = this.themeList.filter((theme) =>
      theme.name.toLowerCase().includes(searchContent)
    );
  }

}
