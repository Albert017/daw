import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { User } from 'app/user/user.entity';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
private html:string ="posts";
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
  constructor(private route: ActivatedRoute, private router: Router, private http: Http) { 
    let userId = route.snapshot.params['id'];
    this.getUserInfo(userId);
  }

  ngOnInit() {
  }

  goToMenu(menu:string){
    this.html=menu;
  }

  getUserInfo(id:number){
    let url=URL + "/users/"+id;
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.user=data;
      },
        error  => console.error(error)
      );
  }

}
