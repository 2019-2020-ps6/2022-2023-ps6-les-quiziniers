import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-home-page-user',
  templateUrl: './home-page-user.component.html',
  styleUrls: ['./home-page-user.component.scss']
})

export class HomePageUserComponent implements OnInit {
  public userList: User[]= []
  ngOnInit(): void {
  }
  constructor(private router: Router, public userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      this.userList = users;
    });
  }




}
