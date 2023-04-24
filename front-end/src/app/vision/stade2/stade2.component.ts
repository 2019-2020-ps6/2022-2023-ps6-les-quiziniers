import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stade2',
  templateUrl: './stade2.component.html',
  styleUrls: ['./stade2.component.scss']
})
export class Stade2Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  stadeUpdate() {
    sessionStorage.setItem('stade',"2");
  }
}
