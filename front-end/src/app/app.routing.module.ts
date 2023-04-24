import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {HomePageComponent} from "./home-pages/home-page/home-page.component";
import {HomePageUserComponent} from "./home-pages/home-page-user/home-page-user.component";
import {HomePageUserTypeComponent} from "./home-pages/home-page-usertype/home-page-usertype.component";
import {QuestionQuizComponent} from "./quizzes/question-quiz/question-quiz.component";
import {QuestionComponent} from "./questions/question/question.component";
import {QuestionFormComponent} from "./questions/question-form/question-form.component";
import {UserComponent} from "./users/user/user.component";
import {UserFormComponent} from "./users/user-form/user-form.component";
import {Stade1Component} from "./vision/stade1/stade1.component";
import {Stade2Component} from "./vision/stade2/stade2.component";
import {Stade3Component} from "./vision/stade3/stade3.component";
import {StatisticListComponent} from "./statistics/statistic-list/statistic-list.component";
import {GeneralStatisticComponent} from "./statistics/general-statistic/general-statistic.component";
import {HomePageAdminMDPComponent} from "./home-pages/home-page-adminMDP/home-page-admin-mdp.component";
import {HomePageAdminComponent} from "./home-pages/home-page-admin/home-page-admin.component";
import {QuizFormComponent} from "./quizzes/quiz-form/quiz-form.component";
import {HomePageChangemdpComponent} from "./home-pages/home-page-changemdp/home-page-changemdp.component";
import {QuizThemeComponent} from './quizzes/quiz-theme/quiz-theme.component';
import {ThemeComponent} from "./quizzes/theme/theme.component";



const routes: Routes = [
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'quiz-form', component: QuizFormComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'home-page', component: HomePageComponent},
    {path: 'home-page-user', component: HomePageUserComponent},
    {path: 'home-page-usertype', component: HomePageUserTypeComponent},
    {path: 'home-page-adminmdp', component: HomePageAdminMDPComponent},
    {path: 'home-page-admin', component: HomePageAdminComponent},
    {path: 'question-quiz/:id', component: QuestionQuizComponent},
    {path: 'question/:id', component: QuestionComponent},
    {path: 'question-form', component: QuestionFormComponent},
    {path: 'stade1', component: Stade1Component},
    {path: 'stade2', component: Stade2Component},
    {path: 'stade3', component: Stade3Component},
    {path: 'statistic-list', component: StatisticListComponent},
    {path: 'general-statistic', component: GeneralStatisticComponent},
    {path: 'user/:id', component: UserComponent},
    {path: 'user-form', component: UserFormComponent},
    {path: 'home-page', component: HomePageComponent},
    {path: 'change-mdp',component:HomePageChangemdpComponent},
  { path: '', redirectTo: '/home-page-usertype', pathMatch: 'full' },
  {path: 'app-quiz-theme', component: QuizThemeComponent},
  {path: 'app-theme', component: ThemeComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
