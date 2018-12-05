import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }
  
  getAllUser(){
      return this.http.post('api/post/getAllUser', {})
  }
  
  updatePrice(price, id){
    console.log('in service, price is '+ price);
    return this.http.put('/api/put/updatePrice/'+ id,{
        price: price
    })
  }
  
  updateTax(tax, id){
    console.log('in service, tax is '+ tax);
    return this.http.put('/api/put/updateTax/'+ id,{
        tax: tax
    })
  }
  
  updateQuantity(quantity, id){
    console.log('in service, quantity is '+ quantity);
    return this.http.put('/api/put/updateQuantity/'+ id,{
        quantity: quantity
    })
  }
  
  updateDescript(descript, id){
    console.log('in service, descript is '+ descript);
    return this.http.put('/api/put/updateDescript/'+ id,{
        descript: descript
    })
  }
  
  
  
}
