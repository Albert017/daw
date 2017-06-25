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
  private username:string;
  private password: string;

  constructor(public loginService: LoginService, private router: Router) { }


  public logIn(){
    this.loginService.logIn(this.username, this.password);
    this.loggedUser=this.loginService;
  }

  ngOnInit() {
  }

}
