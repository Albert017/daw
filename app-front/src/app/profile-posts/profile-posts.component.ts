import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Post} from 'app/post/post.entity';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {
  private posts:Post[]=[];

  constructor(private http: Http) {
    let url=URL + "/posts/";
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

}
