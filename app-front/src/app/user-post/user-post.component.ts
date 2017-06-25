import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Router, ActivatedRoute } from '@angular/router';
import { Post} from 'app/post/post.entity';
import { User } from  'app/user/user.entity';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  private posts:Post[]=[];
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

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
    let username = route.snapshot.params['name'];
    this.getUserInfo(username);
   }

  ngOnInit() {
  }
  getUserInfo(username:string){
    let url=URL + "/users/name="+username;
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.user=data;
      },
        error  => console.error(error)
      );
  }


}
