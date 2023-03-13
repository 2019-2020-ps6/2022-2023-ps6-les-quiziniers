import { Component } from '@angular/core';
import {GamePageComponent} from "./GamePageComponent/GamePageComponent.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hello world!';
}
