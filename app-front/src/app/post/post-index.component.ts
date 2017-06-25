import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { PostService } from './post.service';
import { Post } from './post.entity';
//import {HttpClient} from "../HttpClient/HttpClient";
import { Http, Response } from '@angular/http';
import { LoginService } from 'app/login.service';
import { User } from "app/user/user.entity";

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
