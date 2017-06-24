import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchedPost: string;

  constructor(private router: Router,private loginService: LoginService) {

        //this.loginService.logIn("user1","pass1");
   }

  ngOnInit() {
  }

  onSubmit(){
      this.router.navigate(['/search', this.searchedPost]);
  }

}
