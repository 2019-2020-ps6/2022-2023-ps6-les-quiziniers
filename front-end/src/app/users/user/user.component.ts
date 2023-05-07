import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public visibility:String="hidden";
  @Input()
  user?: User;

  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    const admin= sessionStorage.getItem("admin?")
    if(sessionStorage.getItem("admin?")=="true"){
      this.visibility = "visible";
    }else{
      this.visibility="hidden";
    }
  }

  delete() {
    this.deleteUser.emit(this.user);
  }

}
