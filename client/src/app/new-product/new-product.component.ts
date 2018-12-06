import { Component, OnInit } from '@angular/core';
import { AddNewProductService } from './new-product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [AddNewProductService]
})
export class NewProductComponent implements OnInit {

  public product :Product;
  
  constructor(private addNewProductService: AddNewProductService, private router: Router, private commonService: CommonService) 
  { 
    this.product = new Product();
  }

  ngOnInit() {
  }
  
  addNewProduct() {
  	if(this.product.name && this.product.price && this.product.tax && this.product.quantity && this.product.descript){
  	this.product.name = this.encodeHTML(this.product.name);
  	this.product.price = this.encodeHTML(this.product.price);
  	this.product.tax = this.encodeHTML(this.product.tax);
  	this.product.quantity = this.encodeHTML(this.product.quantity);
  	this.product.descript = this.encodeHTML(this.product.descript);
  		this.addNewProductService.addNewProduct(this.product).subscribe(res =>{
  		    console.log('response is', res)
            this.commonService.notifyNewProductAddition();
  		});
  	} else {
  		alert('The manager did not add new product');
  	}
  }
  
  encodeHTML(e){
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  };

}
