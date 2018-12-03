import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private http: HttpClient, private router: Router) {
    this.user = firebaseAuth.authState;
  }
  
  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        firebase.auth().currentUser.sendEmailVerification().then(function(){
          console.log("Check your email");
          this.NACError = false;
        }).catch(function(error){
          
        });
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);

      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        return true;
        console.log('Nice, it worked!');
        this.router.navigate(['/home']);
      })
      .catch(err => {
        return false;
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
  

}

