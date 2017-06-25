import { Component, OnInit } from '@angular/core';
import { ApiPostsService } from "app/api-posts.service";
import { LoginService } from "app/login.service";
import { Http } from "@angular/http";
import { Post } from "app/post/post.entity";

@Component({
  selector: 'app-profile-report-posts',
  templateUrl: './profile-report-posts.component.html',
  styleUrls: ['./profile-report-posts.component.css']
})
export class ProfileReportPostsComponent implements OnInit {


  private posts:Post[]=[];

  constructor(private http: Http,private loginService: LoginService, private apiPostsService: ApiPostsService) {
    let url="http://localhost:8080/api/posts/reported/";
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

  ngOnInit() {
  }

  deletePost(post:Post){
    let pos = this.posts.indexOf(post);
    if (pos!=-1){
      this.posts.splice(pos,1);
    }
    this.apiPostsService.deletePost(post.id);
  }

  unmarkPost(post:Post){
    let pos = this.posts.indexOf(post);
    if (pos!=-1){
      this.posts.splice(pos,1);
    }
    this.apiPostsService.unreportPost(post.id);
  }

}
