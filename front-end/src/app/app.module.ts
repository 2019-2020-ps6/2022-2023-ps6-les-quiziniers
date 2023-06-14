import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {QuestionQuizComponent} from "./quizzes/question-quiz/question-quiz.component";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./home-pages/home-page/home-page.component";
import {HomePageUserComponent} from "./home-pages/home-page-user/home-page-user.component";
import {Stade1Component} from "./vision/stade1/stade1.component";
import {HomePageUserTypeComponent} from "./home-pages/home-page-usertype/home-page-usertype.component";
import {StatisticListComponent} from "./statistics/statistic-list/statistic-list.component";
import {GeneralStatisticComponent} from "./statistics/general-statistic/general-statistic.component";
import {HomePageAdminMDPComponent} from "./home-pages/home-page-adminMDP/home-page-admin-mdp.component";
import {HomePageAdminComponent} from "./home-pages/home-page-admin/home-page-admin.component";
import {HomePageChangemdpComponent} from "./home-pages/home-page-changemdp/home-page-changemdp.component";
import {QuizThemeComponent} from './quizzes/quiz-theme/quiz-theme.component';
import {ThemeComponent} from "./quizzes/theme/theme.component";
import {ThemeFormComponent} from "./quizzes/theme-form/theme-form.component";
import {FormsModule} from '@angular/forms';
import {AnswerListComponent} from "./quizzes/answer-list/answer-list.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";



@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    QuestionQuizComponent,
    HomePageComponent,
    HomePageUserComponent,
    HomePageUserTypeComponent,
    Stade1Component,
    StatisticListComponent,
    GeneralStatisticComponent,
    HomePageAdminComponent,
    HomePageAdminMDPComponent,
    HomePageChangemdpComponent,
    QuizThemeComponent,
    ThemeComponent,
    ThemeFormComponent,
    AnswerListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
