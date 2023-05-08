import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public router:String=""
  constructor() { }

  ngOnInit(): void {
    const admin= sessionStorage.getItem("admin?")
      if (sessionStorage.getItem("admin?") == "true") {
        this.router = "home-page-admin";
      } else {
        this.router = "home-page-user";
      }
  }

}
