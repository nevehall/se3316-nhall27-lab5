//import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //@ViewChild('addProduct') addBtn: ElementRef;

  constructor(private commonService: CommonService) { 
    
    // this.commonService.postEdit_Observable.subscribe(res => {
    //         this.addBtn.nativeElement.click();
    //     });
  }

  ngOnInit() {
  }

}
