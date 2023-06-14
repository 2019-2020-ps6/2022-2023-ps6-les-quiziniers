import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import { HttpClient } from '@angular/common/http';
import {serverUrl} from "../../../configs/server.config";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public user:User;



  constructor(private route: ActivatedRoute, private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<User>(serverUrl+"/users/" + id).subscribe(
      (user: User) => {
        // La variable 'user' contient les détails de l'utilisateur récupérés depuis le backend
        this.user = user;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
      }
    );
  }



}


