import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./GamePageComponent/GamePageComponent.component";
import {GameAnswerComponent} from "./GameAnswerComponent/GameAnswerComponent.component";

const routes: Routes = [
  {path: "",component:GamePageComponent},
  {path: 'game',component:GamePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
