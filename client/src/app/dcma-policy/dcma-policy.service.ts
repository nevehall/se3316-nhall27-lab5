import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DcmaPolicy } from '../models/dcmaPolicy.model';

 
@Injectable()
export class DcmaPolicyService {
 
    constructor(private http: HttpClient){}
    
    getDcmaPolicy(){
    return this.http.post('/api/post/getDcmaPolicy',{})
    }
}