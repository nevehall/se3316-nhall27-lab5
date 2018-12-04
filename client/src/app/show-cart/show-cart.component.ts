import { Component, OnInit } from '@angular/core';
import { ShowCartService } from './show-cart.service';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  providers: [ShowCartService]
})
export class ShowCartComponent implements OnInit {

  public carts : any [];
  public product_to_delete;
  
  constructor(private showCartService: ShowCartService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllCart();
    
    this.commonService.productAdded_Observable.subscribe(res => {
      this.getAllCart();
    });
  }
  
  editCart(cart: Cart){
    this.commonService.setProductToEdit(cart);
    console.log('product is ',cart);
  }
  
  setDelete(cart: Cart){
    this.product_to_delete = cart;
  }
  
  deleteProduct(){
    this.showCartService.deleteProduct(this.product_to_delete._id).subscribe(res => {
      this.getAllCart();
    })
  }
  
   getAllCart(){
    this.showCartService.getAllCart().subscribe(result =>{
      console.log('result is ', result);
      this.carts = result['data'];
    })
  }

}
