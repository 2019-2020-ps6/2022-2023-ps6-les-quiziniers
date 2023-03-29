import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {Question} from "../../../models/question.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-home-page-admin',
  templateUrl: './home-page-admin.component.html',
  styleUrls: ['./home-page-admin.component.scss']
})
export class HomePageAdminComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,private Router: Router) {
  }

  ngOnInit(): void {
    throw new Error('Method not imp lemented.');
  }
}







































































































































































