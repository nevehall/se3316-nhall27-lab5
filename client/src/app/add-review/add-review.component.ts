import { Component, OnInit } from '@angular/core';
//import { AddReviewService } from './add-product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
