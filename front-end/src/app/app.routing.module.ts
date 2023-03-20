import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {QuestionQuizComponent} from "./quizzes/question-quiz/question-quiz.component";
import {QuestionComponent} from "./questions/question/question.component";
import {QuestionFormComponent} from "./questions/question-form/question-form.component";

const routes: Routes = [
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'question-quiz/:id', component: QuestionQuizComponent},
    {path: 'question/:id', component: QuestionComponent},
    {path: 'question-form', component: QuestionFormComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
