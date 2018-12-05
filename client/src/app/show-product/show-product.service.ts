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
    
    updateProduct(id,data){
        console.log('id is', id);
        console.log('data is', data);
        return this.http.put('/api/put/'+id+'/updateProduct',data)
    }
}

