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
  username:string;
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
    this.username = route.snapshot.params['name'];
    this.getUserInfo();
    this.getUserPosts();
   }

  ngOnInit() {
  }
  getUserInfo(){
    let url=URL + "/users/name="+this.username;
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.user=data;
      },
        error  => console.error(error)
      );
  }
  getUserPosts(){
    let url=URL + "/posts/user="+this.username+"/";
        this.http.get(url).subscribe(
          response => {
            let data = response.json();
            this.posts=data;
            console.log(data);
        },
          error  => console.error(error)
        );
    }

}
