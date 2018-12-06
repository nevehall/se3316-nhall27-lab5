import { Component, OnInit } from '@angular/core';
import { ShowDcmaService } from './show-dcma.service';
import { DCMA } from '../models/dcma.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-show-dcma',
  templateUrl: './show-dcma.component.html',
  styleUrls: ['./show-dcma.component.css'],
  providers: [ShowDcmaService]
})
export class ShowDcmaComponent implements OnInit {
  
  public dcmas : any[];

  constructor(private showDcmaService: ShowDcmaService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllDcma();
    
    this.commonService.dcmaAdded_Observable.subscribe(res => {
      this.getAllDcma();
    })
  }
  
  getAllDcma(){
    this.showDcmaService.getAllDcma().subscribe(result => {
      console.log('dcma result is', result);
      this.dcmas = result['data'];
    })
  }

}
