import { Component, OnInit } from '@angular/core';
import { ShowProductService } from '../show-product/show-product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [ShowProductService, ManagerService]
})
export class ManagerComponent implements OnInit {

  public products : any [];
  //public product : Product;
 
  constructor(private showProductService: ShowProductService, private commonService: CommonService, private managerService: ManagerService) { }

  ngOnInit() {
    this.getAllProduct();
    
    this.commonService.productAdded_Observable.subscribe(res => {
      this.getAllProduct();
    });
  }
  
  getAllProduct(){
    this.showProductService.getAllProduct().subscribe(result =>{
      console.log('result is ', result);
      this.products = result['data'];
    })
  }
  
  // getID(event)// will return the id of a object 
  // {
  //   var target = event.target || event.srcElement || event.currentTarget;
  //   var idAttr = target.attributes.id.value;
  //   return idAttr;
  // }
  
  //updating the price of a product
  updatePrice(price, id){
    this.managerService.updatePrice(price, id).subscribe(result =>{
      console.log('price is', result);
    });
  }
  
  //updating the tax of a product
  updateTax(tax, id){
    this.managerService.updateTax(tax, id).subscribe(result =>{
      console.log('tax is', result);
    });
  }
  
  //updating the quantity of a product
  updateQuantity(quantity, id){
    this.managerService.updateQuantity(quantity, id).subscribe(result =>{
      console.log('quantity is', result);
    });
  }
  
  //updating the description of a product
  updateDescript(descript, id){
    this.managerService.updateDescript(descript, id).subscribe(result =>{
      console.log('descript is', result);
    });
  }
  
  
}
