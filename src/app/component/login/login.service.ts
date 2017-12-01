import {Injectable} from '@angular/core';
import {login} from '../../../config';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private loginUrl: string = login.login;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private  http: Http) {
  }

  login(data: any): Observable<any> {
    return this.http.post(this.loginUrl, {headers: this.headers});
  }

}
