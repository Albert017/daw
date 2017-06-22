import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from "app/login.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loggedUser: LoginService;

  constructor(public loginService: LoginService, private router: Router) { }


  public logIn(username:string, password: string){
    console.log("username "+ username);
    console.log("password "+ password);
    this.loginService.logIn(username, password);
    this.loggedUser=this.loginService;
    console.log(this.loggedUser.isLogged);
  }

  ngOnInit() {
  }

}
