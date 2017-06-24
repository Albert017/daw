import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User} from 'app/user/user.entity';
import 'rxjs/Rx';

const URL = 'http://localhost:8080/api';

@Injectable()
export class LoginService {

    isLogged = false;
    isNotLogged = true;
    isAdmin = false;
    user: User;

    constructor(private http: Http) {
    }

    reqIsLogged() {

        const headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest'
        });

        const options = new RequestOptions({ withCredentials: true, headers });

        this.http.get(URL + '/logIn', options).subscribe(
            response => this.processLogInResponse(response),
            error => {
                if (error.status !== 401) {
                    console.error('Error when asking if logged: ' +
                        JSON.stringify(error));
                }
            }
        );
    }

    private processLogInResponse(response) {
        
        this.isLogged = true;
        this.isNotLogged = !this.isLogged;
        this.user = response.json();
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        console.log(this.user);
    }

    logIn(user: string, pass: string) {

        const userPass = user + ':' + pass;

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });

        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.get(URL + '/logIn', options).subscribe(
            response => this.processLogInResponse(response),
            error => {
                if (error.status !== 401) {
                    console.error('Error when asking if logged: ' +
                        JSON.stringify(error));
                }
            }
        );
    }

    logOut() {

        return this.http.get(URL + '/logOut', { withCredentials: true }).subscribe(
            response => {
                this.isLogged = false;
                this.isNotLogged = !this.isLogged;
                this.isAdmin = false;
                return response;
            },
            error => {
                return error;
            }
        );
    }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
