import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { PostService } from './post.service';
import { Post } from './post.entity';
//import {HttpClient} from "../HttpClient/HttpClient";
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { LoginService } from 'app/login.service';
import { User } from "app/user/user.entity";
import 'rxjs/Rx';

const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html'
})
export class PostIndexComponent implements OnInit {
  

  //post : Post; //para empezar, luego sera un array creo. Elena
  private idPost: number;
  private post:Post;
  loggedUser: User;
  commentContent:string;

  constructor(private route: ActivatedRoute, private router: Router,private http: Http,private loginService: LoginService) {
      
      this.loggedUser = this.loginService.getUser();

      this.route.params.subscribe(params => {
        this.idPost = params['id'];
      });

      let url=URL + "/posts/" + this.idPost;
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
            this.post= data;
      },
        error => console.error(error)
      );

   }
  ngOnInit() {}

  onSubmit(postId: string){
    let url= URL + "/posts/"+postId+"/comments/";
    let data= JSON.stringify(this.commentContent);
    
    const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.loggedUser.username + ":" + this.loggedUser.userPasswordHash),
            'X-Requested-With': 'XMLHttpRequest',
            'Content-type': 'application/json'
        });

    const options = new RequestOptions({ withCredentials: true, headers });
    this.http.post(url, data, options).subscribe(
        response=> console.log(response),
        error=> console.log(error)
    );
  }
 /*
  constructor(private router: Router, activatedRoute: ActivatedRoute,private postService: PostService, private http: Http) {
    let postId = activatedRoute.snapshot.params['id'];
    this.getPost(postId);
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      post => this.post = post);
  }
*/
}
function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
