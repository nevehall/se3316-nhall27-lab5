import { Component, OnInit } from '@angular/core';
import { BestSellersService } from './best-sellers.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css'],
  providers: [BestSellersService]
})
export class BestSellersComponent implements OnInit {
  
  public products : any [];

  constructor(private bestSellersService: BestSellersService, private commonService: CommonService) {}

  ngOnInit() {
    this.getBestSellers();
  }
  
  getBestSellers(){
    this.bestSellersService.getBestSellers().subscribe(result =>{
      console.log('result is ', result);
      this.products = result['data'];
    })
  }

}
