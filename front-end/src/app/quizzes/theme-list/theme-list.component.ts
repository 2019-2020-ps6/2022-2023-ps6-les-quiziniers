import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
  public visibility: String = "hidden"

  public themeList: Theme[] = [];
  @Input()
  public theme;


  constructor(private router: Router, public themeService: ThemeService, private route: ActivatedRoute, private http: HttpClient) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.themeService.retrieveTheme(id).subscribe((themes) => {
      this.themeList = themes;
    })

    if (sessionStorage.getItem("admin?") == "true") {
      this.visibility = "visible";
    } else {
      this.visibility = "hidden";
    }
  }


  themeSelected(selected: boolean): void {

  }

  editQuiz(quiz: Theme): void {
    this.router.navigate(['/edit-theme/' + this.theme.name]);
  }

  deleteTheme(theme: Theme): void {
    this.themeService.deleteTheme(theme);
  }
}
