import {Component, OnInit} from '@angular/core';
import {User} from 'src/models/user.model';
import {UserService} from 'src/services/user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home-page-user',
  templateUrl: './home-page-user.component.html',
  styleUrls: ['./home-page-user.component.scss']
})

export class HomePageUserComponent implements OnInit {
  public userList: User[] = []

  ngOnInit(): void {
    this.userService.retrieveUsers().subscribe((users) => {
        this.userList = users;
      }
    );
  }

  constructor(private router: Router, public userService: UserService, private http: HttpClient) {
  }


}
