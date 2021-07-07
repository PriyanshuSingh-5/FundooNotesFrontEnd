import { Injectable } from '@angular/core';
import { RegisterComponent } from '../Pages/register/register.component';

import { HTTPService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservices: HTTPService) { }

  static url = 'https://localhost:44341/api/';
  registeration = (data: any) => {
    return this.httpservices.post(`${UserService.url}User/register`,data)
  };
  login =(data: any) => {
    return this.httpservices.post(`${UserService.url}User/Login`, data)
  };
}

