import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ApiPostsService } from "app/api-posts.service";

@Component({
  selector: 'app-settings-password',
  templateUrl: './settings-password.component.html',
  styleUrls: ['./settings-password.component.css']
})
export class SettingsPasswordComponent implements OnInit {

  pass:{
    oldPass: string,
    newPass: string,
  }

  constructor(private http: Http, private apiPostsService: ApiPostsService) {
    this.pass = {oldPass:"",newPass:""};
   }

  ngOnInit() {
  }

  changePassword(){
        let url = "http://localhost:8080/api/users/password/";
        let options = this.apiPostsService.getOptions();
        this.http.put(url,this.pass,options).subscribe(
        response => {
            alert("Password updated.");
            return response.json();
        },
        error => {
            alert("Couldn't change password.");
        }
        )
  }

}
