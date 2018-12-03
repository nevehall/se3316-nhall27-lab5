import { Component } from '@angular/core';
import { AddProductService } from './add-product.service';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AddProductService]
})
export class AddProductComponent{
  
  public cart : Cart;

  constructor(private addProductService: AddProductService, private router: Router, private commonService: CommonService) {
  	this.cart = new Cart();
  }
  
  
  addProduct() {
  	if(this.cart.name && this.cart.quantity && this.cart.tax && this.cart.price){
  	//if(this.product){
  		this.addProductService.addProduct(this.cart).subscribe(res =>{
  		    console.log('response is', res)
            this.commonService.notifyProductAddition();
  		});
  	} else {
  		alert('Did not add');
  	}
  }

}
