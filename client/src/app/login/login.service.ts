import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

	constructor(private http: HttpClient){

	}
	
	validateLogin(user){
		console.log(user);
		console.log("YOLOSWAG");
		return this.http.post('/api/user/login',user)
	}

}