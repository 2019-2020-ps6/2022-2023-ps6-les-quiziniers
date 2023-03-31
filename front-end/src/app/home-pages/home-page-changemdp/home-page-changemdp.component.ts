import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {Question} from "../../../models/question.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-home-page-changemdp',
  templateUrl: './home-page-changemdp.component.html',
  styleUrls: ['./home-page-changemdp.component.scss']
})
export class HomePageChangemdpComponent implements OnInit {
  mdp: any;

  constructor(public formBuilder: FormBuilder,private Router: Router) {
    this.mdp = this.formBuilder.group({
      label: ['', Validators.required],
      confirm:['', Validators.required]
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  confirmMdp(): void {
    if (this.mdp.valid) {
      const motdepasse = this.mdp.getRawValue().label as string;
      const confirm = this.mdp.getRawValue().confirm as string;
      if(motdepasse===confirm){
        const data = motdepasse
        sessionStorage.setItem('mdp',data);
        this.Router.navigate(['/home-page-admin']);
      }
    }
  }

}
