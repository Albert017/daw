import { Component, OnInit} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { Post} from 'app/post/post.entity';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-hot-page',
  templateUrl: './hot-page.component.html',
  styleUrls: ['./hot-page.component.css']
})
export class HotPageComponent implements OnInit {
  private posts:Post[]=[];
  private postYear: Post;
  private postMonth: Post;
  private postWeek: Post;
  private postDay: Post;

  constructor(private http: Http) {
    //Get Posts
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
      //Get best of the year
      url= URL + "/posts/best/year/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.postYear=data;
      },
        error => console.error(error)
      );
      //Get best of the month 
      url= URL + "/posts/best/month/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.postMonth=data;
      },
        error => console.error(error)
      );
      //Get best of the week 
      url= URL + "/posts/best/week/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.postWeek=data;
      },
        error => console.error(error)
      );
      //Get best of the day 
      url= URL + "/posts/best/day/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          this.postDay=data;
      },
        error => console.error(error)
      );
   }

  ngOnInit() {
  }

}
