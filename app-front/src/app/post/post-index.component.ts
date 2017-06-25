import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { PostService } from './post.service';
import { Post } from './post.entity';
import {Comment} from "app/comment.model";
//import {HttpClient} from "../HttpClient/HttpClient";
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { LoginService } from 'app/login.service';
import { User } from "app/user/user.entity";
import 'rxjs/Rx';
import { ApiPostsService } from "app/api-posts.service";

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
  comment:Comment = {commentContent: ""};

  constructor(private route: ActivatedRoute, private router: Router,private http: Http,private loginService: LoginService, private apiPostsService: ApiPostsService) {
      
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

  addComment(){
      let headers = new Headers();
      headers.append('withCredentials','true');
      headers.append('Accept', 'application/json');
      headers.append('X-Requested-With', 'XMLHttpRequest');
      headers.append('Content-type','application/json');
      let options = new RequestOptions({headers:headers});
      this.http.post('http://localhost:8080/api/posts/'+this.idPost+'/comments/',this.comment,options).subscribe(
          response => {
            let comment:Comment = response.json();
            this.post.postComments.push(comment);
          },
          error => {
            alert("Error al publicar comentario");
          }
      );
  }

  onSubmit(postId: string){
    let url= URL + "/posts/"+postId+"/comments/";
    let data= JSON.stringify(this.comment);
    
    
      let headers = new Headers();
      headers.append('withCredentials','true');
      headers.append('Accept', 'application/json');
      headers.append('X-Requested-With', 'XMLHttpRequest');
      let options = new RequestOptions({headers:headers});

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
