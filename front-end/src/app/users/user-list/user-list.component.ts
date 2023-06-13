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
  constructor(private userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      //this.userList = users;
    });
  }

  ngOnInit(): void {
   // console.log('ON INIT',this.userList)
    this.recherche = new FormGroup({
      motrecherche: new FormControl('')
    })
  }

  getUsers():void{
    //console.log("IN START",this.userList)
    const content = this.recherche.getRawValue().motrecherche as string;
    if(content.includes(" ")){
       const firstname=content.split(" ")[0]
       const lastname = content.split(" ")[1]
       console.log(firstname,lastname)
     //  console.log(this.userList)
       //this.userList=this.userList.filter(u=>u.firstName==firstname && u.lastName==lastname);
       //console.log(this.userList)
    }
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id);
  }
}
