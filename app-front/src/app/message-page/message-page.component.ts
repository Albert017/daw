import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login.service";
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


const URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit {

  constructor(public loginService:LoginService, private route: ActivatedRoute, private router: Router, private http: Http) {
    console.log(this.loginService);
    if(this.loginService.isLogged){
      let url=URL + "/messages/conversations";
        this.http.get(url).subscribe(
          response => {
            let data = response.json();
            console.log(data);
        },
          error  => console.error(error)
        );
    }
  }

  ngOnInit() {
  }

}
