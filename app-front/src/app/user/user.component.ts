import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User} from './user.entity';
import { Post } from 'app/post/post.entity';
import { Http } from "@angular/http";

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user:User;
  private posts:Post[]=[];

  getUserPosts(username: String){
      let url=URL + "/posts/"+ username;
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          for (var i = 0; i < data.length; i++) {
            let post = data[i];
            this.posts.push(post);
          }
      },
        error => console.error(error)
      );
  }
  constructor(private route: ActivatedRoute, private router: Router, private http: Http) {
    this.getUserPosts("Sara");
   }

  ngOnInit() {
  }

}
