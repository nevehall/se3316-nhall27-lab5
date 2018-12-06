import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DCMA } from '../models/dcma.model';

@Injectable()
export class AddDCMAService {

	constructor(private http: HttpClient){}
	
	addDCMA(dcma: DCMA){
		return this.http.post('/api/post/createDCMA',{
		    //id: product._id,
			manEmail : dcma.manEmail,
			cusEmail : dcma.cusEmail,
			about : dcma.about,
			comment : dcma.comment
		})
	}
	

}