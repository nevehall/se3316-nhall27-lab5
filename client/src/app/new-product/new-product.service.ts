import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable()
export class AddNewProductService {

	constructor(private http: HttpClient){}
	
	addNewProduct(product: Product){
		return this.http.post('/api/post/createNewProduct',{
			name : product.name,
			price : product.price,
			tax : product.tax,
			quantity : product.quantity,
			descript : product.descript
		})
	}
	

}