import { Component, OnInit } from '@angular/core';
import { AddDCMAService } from './add-dcma.service';
import { DCMA } from '../models/dcma.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

//import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-dcma',
  templateUrl: './add-dcma.component.html',
  styleUrls: ['./add-dcma.component.css'],
  providers: [AddDCMAService]
})
export class AddDcmaComponent implements OnInit {
  
  public dcma : DCMA;

  constructor(private addDCMAService: AddDCMAService, private router: Router, private commonService: CommonService) 
  { 
    this.dcma = new DCMA();
  }

  ngOnInit() {
  }
  
  addDCMA(){
    if(this.dcma.manEmail && this.dcma.cusEmail && this.dcma.about && this.dcma.comment){
  	this.dcma.manEmail = this.encodeHTML(this.dcma.manEmail);
  	this.dcma.cusEmail = this.encodeHTML(this.dcma.cusEmail);
  	this.dcma.about = this.encodeHTML(this.dcma.about);
  	this.dcma.comment = this.encodeHTML(this.dcma.comment);
  	
  		this.addDCMAService.addDCMA(this.dcma).subscribe(res =>{
  		    console.log('response is', res)
            this.commonService.notifyDCMAAddition();
  		});
  	} else {
  		alert('Did not add');
  	}
  }
  
  encodeHTML(e){
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  };

}
