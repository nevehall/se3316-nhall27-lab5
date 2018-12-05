import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AddProductService, ManagerService]
})
  
export class AddProductComponent implements OnInit{
  
  public cart : Cart;
  user;

  constructor(private addProductService: AddProductService, private router: Router, private commonService: CommonService,
  private managerService: ManagerService) {
  	this.cart = new Cart();
  }
  
  
  
  ngOnInit(){
    this.commonService.productEdit_Observable.subscribe(res => {
      this.cart = this.commonService.product_to_be_edited;
      console.log('product is ', this.cart._id);
    });
  }
  
  addProduct() {
  	if(this.cart.name && this.cart.quantity){
  	this.cart.name = this.encodeHTML(this.cart.name);
  		this.addProductService.addProduct(this.cart).subscribe(res =>{
  		    console.log('response is', res)
            this.commonService.notifyProductAddition();
  		});
  	} else {
  		alert('Did not add');
  	}
  }
  
  getAllUser() {
    this.managerService.getAllUser().subscribe(result =>{
      console.log('result is ', result);
      this.user = result['data'];
   
  });

  }
  
  
  encodeHTML(e){
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  };
  
}


//SANITIZATION
 