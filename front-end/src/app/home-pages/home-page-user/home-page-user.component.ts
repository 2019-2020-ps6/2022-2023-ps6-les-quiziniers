import {Component, OnInit} from '@angular/core';
import {User} from 'src/models/user.model';
import {UserService} from 'src/services/user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-home-page-user',
  templateUrl: './home-page-user.component.html',
  styleUrls: ['./home-page-user.component.scss']
})

export class HomePageUserComponent implements OnInit {
  public userList: User[] = []
  public userListTemp:User[]=[]
  public recherche:FormGroup;

  ngOnInit(): void {
    this.recherche = new FormGroup({
      motrecherche: new FormControl('')
    })
    this.userService.retrieveUsers().subscribe((users) => {
        this.userList = users;
        this.userListTemp=users;
      }
    );
  }

  constructor(private router: Router, public userService: UserService, private http: HttpClient) {
  }

  getUsers():void{
    this.userList = this.userListTemp;
    const content = this.recherche.getRawValue().motrecherche as string;
    const searchContent = content.toLowerCase(); // Convertir la recherche en minuscules

    if (searchContent.includes(" ")) {
      const firstName = searchContent.split(" ")[0];
      const lastName = searchContent.split(" ")[1];
      this.userList = this.userList.filter(
        (u) =>
          u.firstName.toLowerCase().includes(firstName) &&
          u.lastName.toLowerCase().includes(lastName)
      );
    } else {
      this.userList = this.userList.filter(
        (u) =>
          u.firstName.toLowerCase().includes(searchContent) ||
          u.lastName.toLowerCase().includes(searchContent)
      );
    }

  }


}
