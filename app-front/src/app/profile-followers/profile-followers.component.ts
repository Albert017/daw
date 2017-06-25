import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login.service";

import  {  Http  }  from  '@angular/http';
import { User } from "app/user/user.entity";

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {

  private followers: User[]=[];

  constructor(public loginService: LoginService, private http: Http) {
    let url = URL + "/users/" + this.loginService.user.id;
    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for(var i=0; i<data.userFollowers.length;i++){
          this.followers.push(data.userFollowers[i]);
        }
      },
      error => console.error(error)
    );
  }

  ngOnInit() {
  }

}
