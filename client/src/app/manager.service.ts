import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }
  
  getAllUser(){
      return this.http.post('api/post/getAllUser', {})
  }
  
}
