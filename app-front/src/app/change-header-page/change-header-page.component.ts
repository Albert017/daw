import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "app/login.service";
import { Http, RequestOptions, Headers  } from "@angular/http";

@Component({
  selector: 'app-change-header-page',
  templateUrl: './change-header-page.component.html',
  styleUrls: ['./change-header-page.component.css']
})
export class ChangeHeaderPageComponent implements OnInit {

  formData:FormData;

  constructor(private router: Router,private loginService: LoginService, private http: Http) { }

  ngOnInit() {
  }


  fileChange(event){
    let files = event.target.files;
    if(files.length > 0){
      this.formData = new FormData();
      this.formData.append('file',files[0]);
    }
  }

  upload(){
    if(this.formData){
      let headers = new Headers();
      headers.append('withCredentials','true');
      headers.append('Accept', 'application/json');
      headers.append('X-Requested-With', 'XMLHttpRequest');
      let options = new RequestOptions({headers:headers});
      this.http.post('http://localhost:8080/api/users/header/',this.formData,options).subscribe(
        response => {
          this.router.navigate(['/profile']);
        },
        error => {
          alert('Error al enviar.');
        }
      )
    }
  }


  background():string{
    return "url(/headerimg/"+this.loginService.user.id+")";
  }
}
