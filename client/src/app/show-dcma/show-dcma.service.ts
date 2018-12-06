import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DCMA } from '../models/dcma.model';
 
@Injectable()
export class ShowDcmaService {
 
    constructor(private http: HttpClient){}
    
    getAllDcma(){
    return this.http.post('/api/post/getAllDcma',{})
    }
}
    