import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
//import { Cart } from '../models/cart.model';
 
@Injectable()
export class ShowProductService {
 
    constructor(private http: HttpClient){}
    
    getAllProduct(){
    return this.http.post('/api/post/getAllProduct',{})
    }
    
    
}

