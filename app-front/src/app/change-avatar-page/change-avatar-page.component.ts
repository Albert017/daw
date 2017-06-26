import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "app/login.service";
import { Http } from "@angular/http";

@Component({
  selector: 'app-change-avatar-page',
  templateUrl: './change-avatar-page.component.html',
  styleUrls: ['./change-avatar-page.component.css']
})
export class ChangeAvatarPageComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService, private http: Http) { }

  ngOnInit() {
  }
    background():string{
    return "url(./src/assets/headers/"+this.loginService.user.id+".jpg)";
  }
}
