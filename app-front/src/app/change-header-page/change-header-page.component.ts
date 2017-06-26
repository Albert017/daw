import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "app/login.service";
import { Http } from "@angular/http";

@Component({
  selector: 'app-change-header-page',
  templateUrl: './change-header-page.component.html',
  styleUrls: ['./change-header-page.component.css']
})
export class ChangeHeaderPageComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService, private http: Http) { }

  ngOnInit() {
  }
  
  background():string{
    return "url(./src/assets/headers/"+this.loginService.user.id+".jpg)";
  }
}
