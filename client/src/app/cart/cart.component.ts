import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit{

  public cart: any[];
  
  constructor(private cartService: CartService, private commonService: CommonService) { }

  //on the initialization of the website (when logging in), all the items 
  //already exsiting in the cart will appear
  ngOnInit() {
    this.getAllCart();
    
    this.commonService.productAdded_Observable.subscribe(res => {
      this.getAllCart();
    });
    
  }
  
  getAllCart(){
    this.cartService.getAllCart().subscribe(result =>{
      console.log('result is ', result);
      this.cart = result['data'];
    })
  }

}
