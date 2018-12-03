import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  
  public user : User;
  
  email: string;
  password: string;

  constructor(public authService: AuthService, private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(email) {
    var check=this.authService.login(this.email, this.password);
    if (check==true){
      this.validateLogin(email);
    }
    else{
      this.email = this.password = '';
    }
  }

  logout() {
    this.authService.logout();
  }
  
  validateLogin(email) {
    console.log(email);
  	if(email) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          //this.router.navigate(['/home']);
          console.log('Woo the login/validating user worked!');
        } else {
          alert('Wrong username password');
        }
        
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }
  
  ngOnInit() {
  }

}
