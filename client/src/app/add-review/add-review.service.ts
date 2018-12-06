import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reviews } from '../models/reviews.model';

@Injectable()
export class AddReviewService {

	constructor(private http: HttpClient){}
	
	addReview(reviews: Reviews){
		return this.http.post('/api/post/createReview',{
			name : reviews.name,
			comment : reviews.comment,
			rating : reviews.rating
		})
	}
}