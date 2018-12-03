import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart.model';

@Injectable()
export class AddProductService {

	constructor(private http: HttpClient){}
	
	addProduct(cart: Cart){
		return this.http.post('/api/post/createProduct',{
		    //id: product._id,
			name : cart.name,
			quantity : cart.quantity,
			tax: cart.tax,
			price: cart.price
		})
	}

}