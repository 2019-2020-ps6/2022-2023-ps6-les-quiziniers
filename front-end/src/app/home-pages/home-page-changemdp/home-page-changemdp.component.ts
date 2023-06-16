import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, FormControl} from '@angular/forms';
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
  mdpForm: FormGroup;

  constructor(public formBuilder: FormBuilder,private Router: Router) {
    this.mdpForm = new FormGroup({
      label: new FormControl(''),
      confirm:new FormControl('')

    })

  }

  ngOnInit(): void {
    this.mdpForm = new FormGroup({
      label: new FormControl(''),
      confirm:new FormControl('')

    })
    this.mdpForm.setValue({
      label:"",
      confirm:""
    })
  }
  confirmMdp(): void {
    if (this.mdpForm.valid) {
      const motdepasse = this.mdpForm.getRawValue().label as string;
      const confirm = this.mdpForm.getRawValue().confirm as string;
      if(motdepasse===confirm){
        const data = motdepasse
        sessionStorage.setItem('mdp',data);
        this.Router.navigate(['/home-page-admin']);
      }
    }
  }

}
