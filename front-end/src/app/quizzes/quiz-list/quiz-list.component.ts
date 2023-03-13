import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})

export class MyEpicComponent implements OnInit {
  public quizList: Quiz[] = [];
  constructor() {}
  ngOnInit(): void {}
}
