import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { ApiPostsService } from "app/api-posts.service";
import { LoginService } from "app/login.service";
import { User } from "app/user/user.entity";

@Injectable()
export class UserService{

    constructor(private http: Http, private apiService:ApiPostsService, private loginService: LoginService) {

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

    updateUser(user:User){
        let url = "http://localhost:8080/api/users/put="+this.loginService.user.id;
        let options = this.apiService.getOptions();
        return this.http.put(url,user,options).subscribe(
            response => {
                alert("User info updated.");
                return response.json();
            },
            error => {
                alert("Couldn't update user info.");
                return this.handleError(error);
            })
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw("Server error (" + error.status + "): " + error.text())
    }

    reportUser(id : number){
        let url = "http://localhost:8080/api/users/report="+id;
        let options = this.apiService.getOptions();
        this.http.put(url,null,options).subscribe(
        response => {
            alert("User reported succesfully.");
            return response.json();
        },
        error => {
            alert("Couldn't report user.");
            return this.handleError(error);
        }
        )
    }

    unreportUser(id : number){
        let url = "http://localhost:8080/api/users/unreport="+id;
        let options = this.apiService.getOptions();
        this.http.put(url,null,options).subscribe(
        response => {
            alert("User reported succesfully.");
            return response.json();
        },
        error => {
            alert("Couldn't report user.");
            return this.handleError(error);
        }
        )
    }

    deleteUser(id: number){
        let url = "http://localhost:8080/api/users/delete="+id;
        let options = this.apiService.getOptions();
        return this.http.delete(url,options).subscribe(
            response => {
                alert("User deleted succesfully.");
                return response.json();
            },
            error => {
                alert("Couldn't delete user.");
                return this.handleError(error);
            })
    }
}