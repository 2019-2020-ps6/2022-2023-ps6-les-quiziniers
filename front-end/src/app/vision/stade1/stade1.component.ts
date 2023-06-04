import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-stade1',
  templateUrl: './stade1.component.html',
  styleUrls: ['./stade1.component.scss']
})

export class Stade1Component implements OnInit {
  public width:String="";
  public margin:String= "";
  public id;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');

    throw new Error('Method not implemented.');
  }
  stadeUpdate() {
    this.width="100%"
    this.margin="0%";
    sessionStorage.setItem('stade',"1");
  }
  stadeUpdate2() {
    this.width="70%"
    this.margin="15.5%"
    sessionStorage.setItem('stade',"2");
  }
  stadeUpdate3() {
    this.width="50%"
    this.margin="25%"
    sessionStorage.setItem('stade',"3");
  }
}
