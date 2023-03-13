import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../models/question.model";
@Component({
  selector:"app-gamequestion",
  templateUrl:'GameQuestionComponent.component.html',
  styleUrls: ['./GameQuestionComponent.component.scss']
})
export class GameQuestionComponent implements OnInit {
    @Input()
    question: Question | undefined

    constructor() {

    }
    ngOnInit(): void {

    }
  }
