import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamePageComponent} from "../GamePageComponent/GamePageComponent.component";
import {GameQuestionComponent} from "../GameQuestionComponent/GameQuestionComponent.component";
import {GameAnswerComponent} from "../GameAnswerComponent/GameAnswerComponent.component";

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    GameQuestionComponent,
    GameAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
