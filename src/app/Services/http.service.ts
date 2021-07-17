import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  Get(arg0: string, options: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private http: HttpClient) { }

  post(url: string, data: any, isHeaderRequired: any = false, headers = null)
  {
    return this.http.post(url, data, isHeaderRequired && headers);
  }
  get(url: string, isHeaderRequired: any = false, headers = null) {
    return this.http.get(url, isHeaderRequired && headers);
  }
  // get(url: any){
  //   // this.token=localStorage.getItem('token');
  //   var currentUser = JSON.parse(localStorage.getItem('user'));
  //    var token = currentUser.token; 
  //    let options={
  //      headers:new HttpHeaders({
  //        'Content-Type': 'application/json',
  //        'Authorization':token
  //      })
  //    }
  //  return this.http.get(this.url+url);
  //  }
 
}
