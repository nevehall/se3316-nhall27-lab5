import { Component, OnInit } from '@angular/core';
import { ShowProductService } from './show-product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  providers: [ShowProductService]
})
export class ShowProductComponent implements OnInit {
  
  public products : any [];

  constructor(private showProductService: ShowProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }
  
  getAllProduct(){
    this.showProductService.getAllProduct().subscribe(result =>{
      console.log('result is ', result);
      this.products = result['data'];
    })
  }

}
