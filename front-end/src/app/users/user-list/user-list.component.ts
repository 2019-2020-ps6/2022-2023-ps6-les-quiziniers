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

  getUsers(): void {
    this.users = this.userTemp;
    const content = this.recherche.getRawValue().motrecherche as string;
    const searchContent = content.toLowerCase(); // Convertir la recherche en minuscules

    if (searchContent.includes(" ")) {
      const firstName = searchContent.split(" ")[0];
      const lastName = searchContent.split(" ")[1];
      this.users = this.users.filter(
        (u) =>
          u.firstName.toLowerCase().includes(firstName) &&
          u.lastName.toLowerCase().includes(lastName)
      );
    } else {
      this.users = this.users.filter(
        (u) =>
          u.firstName.toLowerCase().includes(searchContent) ||
          u.lastName.toLowerCase().includes(searchContent)
      );
    }
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id);
  }
}
