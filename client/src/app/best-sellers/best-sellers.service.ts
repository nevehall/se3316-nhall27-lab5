import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

 
@Injectable()
export class BestSellersService {
 
    constructor(private http: HttpClient){}
    
    getBestSellers(){
    return this.http.post('/api/post/getBestSellers',{})
    }
    

}