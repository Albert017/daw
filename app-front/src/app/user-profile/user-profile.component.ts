import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { User } from 'app/user/user.entity';
import { LoginService } from "app/login.service";
import { UserService } from "app/user/user.service";

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
private html:string ="posts";
private headerBackground:string;
private user : User = {
      id: 0,
      username: "Cargando...",
      userEmail: "Cargando...",
      userBiography: "Cargando...",
      userLocation: "Cargando...",
      userLink: "",
      report: false,
      roles: [],
      userFollowing: [],
      userFollowers: [],
      userPosts: []
    };
private numFollowers:number;
private numFollowing:number;

  constructor(private route: ActivatedRoute, private router: Router, private http: Http, private loginService: LoginService, private userService: UserService) { 
    let username = route.snapshot.params['name'];
    this.getUserInfo(username);
    console.log(this.user);
  }

  ngOnInit() {
  }

  goToMenu(menu:string){
    this.html=menu;
  }

  getUserInfo(username:string){
    console.log("entre");
    let url=URL + "/users/name="+username;
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.user=data;
          this.numFollowers=this.user.userFollowers.length;
          this.numFollowing=this.user.userFollowing.length;
          this.headerBackground="./src/assets/headers/"+ this.user.id+".jpg";
          console.log("Followers "+ this.numFollowers);
          console.log("Following "+ this.numFollowing);
          console.log(data);
      },
        error  => console.error(error)
      );
    console.log(this.user);
  }

}
