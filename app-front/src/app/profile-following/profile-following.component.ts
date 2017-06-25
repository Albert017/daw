import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login.service";

import  {  Http  }  from  '@angular/http';
import { User } from "app/user/user.entity";

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {

  private followings:User[]=[];

  constructor(public loginService: LoginService, private http: Http) {
    let url = URL + "/users/" + this.loginService.user.id;
    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for(var i=0; i<data.userFollowing.length;i++){
          this.followings.push(data.userFollowing[i]);
        }
      },
      error => console.error(error)
    );
  }
  ngOnInit() {
  }

}
