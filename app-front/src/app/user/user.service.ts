import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { ApiPostsService } from "app/api-posts.service";

@Injectable()
export class UserService{

    constructor(private http: Http, private apiService:ApiPostsService) {

    }
    ngOnInit() {
    }

    followUser(id: number){
        let url = "http://localhost:8080/api/users/"+id+"/followers";
        let options = this.apiService.getOptions();
        return this.http.put(url,null,options).subscribe(
            response => {
                return response.json();
            },
            error => {
                return this.handleError(error);
            })
    }

    unfollowUser(id: number){
        let url = "http://localhost:8080/api/users/"+id+"/followers";
        let options = this.apiService.getOptions();
        return this.http.delete(url,options).subscribe(
            response => {
                return response.json();
            },
            error => {
                return this.handleError(error);
            })
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}