import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;
  public user: User;
  users: User[];
  userDeleteForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      photoUrl: [''],
    });


    this.userDeleteForm = this.formBuilder.group({
      id: [''],
    });
  }

  @Output() usersUpdated: EventEmitter<User[]> = new EventEmitter<User[]>();

  ngOnInit(): void {
    // retrieve all users and store them in the users property
    this.userService.retrieveUsers().subscribe((users) => {
      this.users = users;
      this.usersUpdated.emit(users);
    });

  }

  addUser(): void {
    // get the user from the form and create it with a http post request
    const user = this.userForm.value;
    this.userService.addUser(user);
  }

  deleteUser() {
    const user = this.userDeleteForm.value;
    this.userService.deleteUser(user.id);
  }

}
