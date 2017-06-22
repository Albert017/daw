import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public goTo: string;


  constructor(private loginService: LoginService) {

        //this.loginService.logIn("user1","pass1");
   }

  ngOnInit() {
  }

  redirection(link: string){
    this.goTo=link;
    console.log("padre: "+this.goTo);
  }
}
