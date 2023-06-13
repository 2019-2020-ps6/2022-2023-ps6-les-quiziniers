import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, FormControl} from '@angular/forms';
import {Question} from "../../../models/question.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-home-page-adminmdp',
  templateUrl: './home-page-admin-mdp.component.html',
  styleUrls: ['./home-page-admin-mdp.component.scss']
})
export class HomePageAdminMDPComponent implements OnInit {
  mdp:  FormGroup;


  constructor(public formBuilder: FormBuilder,private Router: Router) {
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("mdp")==null){
      sessionStorage.setItem('mdp',"soi213");
    }
    this.mdp = new FormGroup({
      label: new FormControl('')
    })
    this.mdp.setValue({
        label:""
      })
  }
  verifMdp(): void {
    console.log("Bouton cliqué!!")
    const truemdp=sessionStorage.getItem('mdp');
    console.log(truemdp);
    console.log(this.mdp.valid);
    if (this.mdp.valid) {
      const motdepasse = this.mdp.getRawValue().label as string;
      console.log(motdepasse);
      if(motdepasse===truemdp){
        sessionStorage.setItem('admin?',"true");
        console.log("admin true")
        this.Router.navigate(['/home-page-admin']);
      }
    }

  }


}
