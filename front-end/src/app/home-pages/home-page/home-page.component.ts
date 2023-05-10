import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public user:User;



  constructor( private route: ActivatedRoute,private userService : UserService) {
    this.userService.userSelected$.subscribe((user) => this.user = user);
  }
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.userService.setSelectedUser(id);
  }

}


