import { Component, OnInit } from '@angular/core';
import { DcmaPolicyService } from './dcma-policy.service';
import { DcmaPolicy } from '../models/dcmaPolicy.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-dcma-policy',
  templateUrl: './dcma-policy.component.html',
  styleUrls: ['./dcma-policy.component.css'],
  providers: [DcmaPolicyService]
})
export class DcmaPolicyComponent implements OnInit {
  
  public dcmaPolicys : any[];
  
  constructor(private dcmaPolicyService: DcmaPolicyService, private commonService: CommonService) { }

  ngOnInit() {
    this.getDcmaPolicy();
  }
  
  getDcmaPolicy(){
    this.dcmaPolicyService.getDcmaPolicy().subscribe(result =>{
      console.log('dcma result is ', result);
      this.dcmaPolicys = result['data'];
    })
  }

}
