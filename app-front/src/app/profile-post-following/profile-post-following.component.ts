import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Post} from 'app/post/post.entity';
import { User } from 'app/user/user.entity';
import { LoginService } from "app/login.service";

import { Router, ActivatedRoute } from '@angular/router';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-profile-post-following',
  templateUrl: './profile-post-following.component.html',
  styleUrls: ['./profile-post-following.component.css']
})
export class ProfilePostFollowingComponent implements OnInit {

  private posts: Post[];

  constructor(public loginService: LoginService, private route: ActivatedRoute, private router: Router, private http: Http) {
    console.log(this.loginService.user.userPosts);
    let url = URL + "/users/followingPosts="+this.loginService.user.id;
    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        this.posts=data;
      },
      error => console.error(error)
    );
   }

  ngOnInit() {
  }
}
