import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User} from 'app/user/user.entity';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/login.service";

const URL = 'http://localhost:8080/api';

@Injectable()
export class ApiPostsService {

  constructor(private http: Http, private loginService:LoginService) { }

  getOptions(){
    let headers = new Headers();
    headers.append('withCredentials','true');
    headers.append('Accept', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Content-type','application/json');
    let options = new RequestOptions({headers:headers});
    return options;
  }

  upvotePost(id : number){
    let url = URL+"/posts/upvote="+id;
    let options = this.getOptions();
    this.http.put(url,null,options).subscribe(
      response => {
        return response.json();
      },
      error => {
        alert("Couldn't upvote post. Only logged users can vote.");
        return this.handleError(error);
      }
    )
  }

  downvotePost(id : number){
    let url = URL+"/posts/downvote="+id;
    let options = this.getOptions();
    this.http.put(url,null,options).subscribe(
      response => {
        return response.json();
      },
      error => {
        alert("Couldn't upvote post. Only logged users can vote.");
        return this.handleError(error);
      }
    )
  }

  reportPost(id : number){
    let url = URL+"/posts/report="+id;
    let options = this.getOptions();
    this.http.put(url,null,options).subscribe(
      response => {
        alert("Post reported succesfully.");
        return response.json();
      },
      error => {
        alert("Couldn't report post.");
        return this.handleError(error);
      }
    )
  }

  deletePost(id:number){
    let url = URL+"/posts/delete="+id;
    let options = this.getOptions();
    this.http.delete(url,options).subscribe(
      response => {
        alert("Post deleted succesfully.");
        return response.json();
      },
      error => {
        alert("Couldn't delete post.");
        return this.handleError(error);
      }
    )
  }

   unreportPost(id:number){
    let url = URL+"/posts/unreport="+id;
    let options = this.getOptions();
    this.http.put(url,null,options).subscribe(
      response => {
        alert("Post unmarked succesfully.");
        return response.json();
      },
      error => {
        alert("Couldn't unmark post.");
        return this.handleError(error);
      }
    )
  }


  private handleError(error: any) {
        console.log(error);
        return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}
