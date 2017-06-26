import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from 'app/login.service';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {

  formData:FormData;
  imageTitleFileUploader:string;
  op:string

  constructor(private router: Router,private loginService: LoginService, private http: Http) {
    this.imageTitleFileUploader="";
    this.op="anime";
  }

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
    console.log(this.op);
    if(this.formData){
      this.formData.append('imageTitleFileUploader',this.imageTitleFileUploader);
      this.formData.append('op',this.op);
      let headers = new Headers();
      headers.append('withCredentials','true');
      headers.append('Accept', 'application/json');
      headers.append('X-Requested-With', 'XMLHttpRequest');
      let options = new RequestOptions({headers:headers});
      this.http.post('http://localhost:8080/api/posts/',this.formData,options).subscribe(
        response => {
          this.router.navigate(['/hot']);
        },
        error => {
          alert('Error al enviar.');
        }
      )
    }
  }
    background():string{
    return "url(./src/assets/headers/"+this.loginService.user.id+".jpg)";
  }
}
