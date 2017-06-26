import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { User } from "app/user/user.entity";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent implements OnInit {

  public user:User;

  constructor(public loginService: LoginService, private route: ActivatedRoute, private router: Router, private userService:UserService) {
      this.user = {
        username : loginService.user.username,
        roles : loginService.user.roles,
        userEmail :" ",
        userBiography : " ",
        userLocation : " ",
        userLink : " "
      }
   }

   updateInfo(){
    this.userService.updateUser(this.user);
   }

  ngOnInit() {
  }

  background():string{
    return "url(/headerimg/"+this.loginService.user.id+")";
  }

}
