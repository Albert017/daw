import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'app/login.service';
import { User } from "app/user/user.entity";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchedPost: string;
  
  loggedUser: User = {
      id: 0,
      username: "Cargando...",
      userEmail: "Cargando...",
      userBiography: "Cargando...",
      userLocation: "Cargando...",
      userLink: "",
      report: false,
      roles: [],
      userFollowing: [],
      userFollowers: [],
      userPosts: []
    };

  constructor(private router: Router,private loginService: LoginService) {
      this.loggedUser = this.loginService.getUser();
        //this.loginService.logIn("user1","pass1");
   }

  ngOnInit() {
  }

  onSubmit(){
      this.router.navigate(['/search', this.searchedPost]);
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['/hot']);
  }

}
