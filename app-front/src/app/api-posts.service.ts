import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User} from 'app/user/user.entity';
import 'rxjs/Rx';

const URL = 'http://localhost:8080/api';

@Injectable()
export class ApiPostsService {

  constructor(private http: Http) { }

  

}
