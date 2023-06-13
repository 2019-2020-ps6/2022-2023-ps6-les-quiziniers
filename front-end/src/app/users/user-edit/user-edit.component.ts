import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public userEditForm: FormGroup;
  public user:User;

  constructor(private route: ActivatedRoute, public userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    // retrieve all users and store them in the users property
    const id = this.route.snapshot.paramMap.get('id');
    this.userEditForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      photoUrl: new FormControl('')
    });
    const user = await this.userService.setSelectedUser(id);
    user.subscribe((user:User ) => {
      console.log("User in sub : ", user);
      this.user=user;
      this.userEditForm.setValue({
        firstName: user.firstName,
        lastName: user.lastName,
        photoUrl: user.photoUrl
      });

      const userInForm = this.userEditForm.value as User;
      console.log("User in form : ", userInForm);
    })


  }
  updateUser():void{
    const id = this.route.snapshot.paramMap.get('id');

    const user = this.userEditForm.value as User;
    this.userService.updateUser(user,id);
  }
}
