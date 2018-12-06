import { Component, OnInit } from '@angular/core';
import { AddReviewService } from './add-review.service';
import { Reviews } from '../models/reviews.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
  providers: [AddReviewService]
})
export class AddReviewComponent implements OnInit {
  
  public reviews : Reviews;

  constructor(private addReviewService: AddReviewService, private commonService: CommonService) 
  {
    this.reviews = new Reviews();
  }

  ngOnInit() {
  }
  
  addReview() {
  	if(this.reviews.name && this.reviews.comment && this.reviews.rating){
  	this.reviews.name = this.encodeHTML(this.reviews.name);
  	this.reviews.comment = this.encodeHTML(this.reviews.comment);
  	this.reviews.rating = this.encodeHTML(this.reviews.rating);
  	
  		this.addReviewService.addReview(this.reviews).subscribe(res =>{
  		    console.log('add review response is', res)
            this.commonService.notifyReviewAddition();
  		});
  	} else {
  		alert('Did not add review');
  	}
  }
  
  //sanitization - encoding inputs
  encodeHTML(e){
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  };

}
