import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-stade1',
  templateUrl: './stade1.component.html',
  styleUrls: ['./stade1.component.scss']
})

export class Stade1Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  stadeUpdate() {
    sessionStorage.setItem('stade',"1");
  }
}
