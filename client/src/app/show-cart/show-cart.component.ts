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
  
  constructor(private showCartService: ShowCartService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllCart();
    
    this.commonService.productAdded_Observable.subscribe(res => {
      this.getAllCart();
    });
  }
  
  getAllCart(){
    this.showCartService.getAllCart().subscribe(result =>{
      console.log('result is ', result);
      this.carts = result['data'];
    })
  }

}
