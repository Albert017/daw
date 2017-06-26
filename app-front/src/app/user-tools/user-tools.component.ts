import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user.entity";
import { LoginService } from "app/login.service";
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.css']
})
export class UserToolsComponent implements OnInit {
  private html: string = "settings";
  private isAdminLogged: boolean;

  constructor(public loginService: LoginService,private http: Http) {
    this.isAdminLogged = this.loginService.isAdminMethod();
   }

  ngOnInit() {
  }

  goToMenu(s: string){
    this.html=s;
  }
background():string{
    return "url(/headerimg/"+this.loginService.user.id+")";
  }
}
