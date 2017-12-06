import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  private loginBtn = true;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
  }

  login() {
    this.loginBtn = false;
    const data = {
      'userName': this.userName,
      'password': this.password
    };
    this.loginService.login(data).subscribe(list => {
      this.loginBtn = true;
      if (list.data) {
        localStorage.setItem('user', JSON.stringify(data));
        const promise = this.router.navigate(['/main']);
        if (promise) {
          console.log('login success');
        }
      }
    });
  }

  reset() {
    this.userName = '';
    this.password = '';
  }

}
