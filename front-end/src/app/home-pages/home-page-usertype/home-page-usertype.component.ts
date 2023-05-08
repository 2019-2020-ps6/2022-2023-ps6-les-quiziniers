import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page-usertype',
  templateUrl: './home-page-usertype.component.html',
  styleUrls: ['./home-page-usertype.component.scss']
})
export class HomePageUserTypeComponent implements OnInit {
  ngOnInit(): void {
    sessionStorage.setItem("admin?","false")
    throw new Error('Method not implemented.');
  }
}
