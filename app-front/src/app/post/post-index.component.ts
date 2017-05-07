import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { PostService } from './post.service';
import { Post } from './post.entity';
//import {HttpClient} from "../HttpClient/HttpClient";
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html'
})
export class PostIndexComponent implements OnInit {

  //post : Post; //para empezar, luego sera un array creo. Elena

  constructor() { }
  ngOnInit() {
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
