import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Post} from 'app/post/post.entity';
import { User } from 'app/user/user.entity';
import { LoginService } from "app/login.service";

import { Router, ActivatedRoute } from '@angular/router';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  private posts: Post[];

  constructor(public loginService: LoginService, private route: ActivatedRoute, private router: Router, private http: Http) {
    console.log(this.loginService.user.userPosts);
    let url=URL + "/posts/user="+this.loginService.user.username+"/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.posts=data;
          console.log(data);
      },
        error  => console.error(error)
      );
   }

  ngOnInit() {
  }

}
