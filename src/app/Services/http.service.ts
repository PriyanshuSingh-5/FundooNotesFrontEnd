import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  post(url: string, data: any, isHeaderRequired: any = false, headers = null)
  {
    return this.http.post(url, data, isHeaderRequired && headers);
  }
}
