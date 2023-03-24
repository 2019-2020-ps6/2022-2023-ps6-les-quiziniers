import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {HomePageComponent} from "./home-pages/home-page/home-page.component";
import {HomePageUserComponent} from "./home-pages/home-page-user/home-page-user.component";
import {QuizComponent} from "./quizzes/quiz/quiz.component";
import {QuestionListComponent} from "./questions/question-list/question-list.component";
import {QuestionFormComponent} from "./questions/question-form/question-form.component";
import {QuestionComponent} from "./questions/question/question.component";
import {UserComponent} from "./users/user/user.component";
import {UserFormComponent} from "./users/user-form/user-form.component";
import {Stade1Component} from "./vision/stade1/stade1.component";
import {Stade2Component} from "./vision/stade2/stade2.component";
import {Stade3Component} from "./vision/stade3/stade3.component";


const routes: Routes = [
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'home-page', component: HomePageComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'home-page-user', component: HomePageUserComponent},
    {path: 'quiz/:id', component: QuizComponent},
    {path: 'question-list/:id', component: QuestionListComponent},
    {path: 'question-form/:id', component: QuestionFormComponent},
    {path: 'question/:id', component: QuestionComponent},
    {path: 'user/:id', component: UserComponent},
    {path: 'user-form/:id', component: UserFormComponent},
    {path: 'stade1', component: Stade1Component},
    {path: 'stade2', component: Stade2Component},
    {path: 'stade3', component: Stade3Component},

    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
