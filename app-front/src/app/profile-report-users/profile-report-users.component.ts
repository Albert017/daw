import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user.entity";
import { Http } from "@angular/http";
import { LoginService } from "app/login.service";
import { ApiPostsService } from "app/api-posts.service";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-profile-report-users',
  templateUrl: './profile-report-users.component.html',
  styleUrls: ['./profile-report-users.component.css']
})
export class ProfileReportUsersComponent implements OnInit {

  private users:User[] = [];

  constructor(private http: Http,private loginService: LoginService, private apiPostsService: ApiPostsService, private userService:UserService) {
    
    let url="http://localhost:8080/api/users/replist/";
      this.http.get(url).subscribe(
        response => {
          let data = response.json();
          for (var i = 0; i < data.length; i++) {
            let user = data[i];
            this.users.push(user);
        }
      },
        error => console.error(error)
      );
  }

  ngOnInit() {
  }

  deleteUser(user:User){
    let pos = this.users.indexOf(user);
    if (pos!=-1){
      this.users.splice(pos,1);
    }
    this.userService.deleteUser(user.id);
  }

  unmarkUser(user:User){
    let pos = this.users.indexOf(user);
    if (pos!=-1){
      this.users.splice(pos,1);
    }
    this.userService.unreportUser(user.id);
  }

}
