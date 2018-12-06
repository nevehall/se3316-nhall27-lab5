import { Component, OnInit } from '@angular/core';
import { ShowReviewService } from './show-review.service';
import { Reviews } from '../models/reviews.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css'],
  providers: [ShowReviewService]
})
export class ShowReviewComponent implements OnInit {
  
  public reviews : any[];
  
  constructor(private showReviewService: ShowReviewService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllReviews();
    
    this.commonService.reviewsAdded_Observable.subscribe(res => {
      this.getAllReviews();
    });
  }
    
  getAllReviews(){
    this.showReviewService.getAllReviews().subscribe(result =>{
      console.log('result is ', result);
      this.reviews = result['data'];
    })
  }

  
}


