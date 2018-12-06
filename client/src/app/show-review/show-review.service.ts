import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reviews } from '../models/reviews.model';

 
@Injectable()
export class ShowReviewService {
 
    constructor(private http: HttpClient){}
    
    getAllReviews(){
    return this.http.post('/api/post/getAllReviews',{})
    }

}
