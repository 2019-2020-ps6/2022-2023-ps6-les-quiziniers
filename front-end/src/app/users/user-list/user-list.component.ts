import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public recherche:FormGroup;
  users: User[];
  userTemp:User[];
  constructor(private userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      this.users = users;
      this.userTemp=users;
    });
  }

  ngOnInit(): void {
    console.log('ON INIT',this.users)
    this.recherche = new FormGroup({
      motrecherche: new FormControl('')
    })
  }

  onUsersUpdated(users: User[]): void {
    this.users = users;
    this.userTemp=users;

  }

  getUsers():void{
    this.users=this.userTemp;
    const content = this.recherche.getRawValue().motrecherche as string;
    if(content.includes(" ")){
       const firstname=content.split(" ")[0]
       const lastname = content.split(" ")[1]
       this.users=this.users.filter(u=>u.firstName.includes(firstname) && u.lastName.includes(lastname));
    }else{
      this.users=this.users.filter(u=>u.firstName.includes(content) || u.lastName.includes(content) );
    }
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id);
  }
}
