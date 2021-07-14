import { HttpHeaders } from '@angular/common/http';
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

  forgotPassword = (data: any) => {
    return this.httpservices.post(`${UserService.url}User/ForgetPassword`, data);
  };
  resetPassword = (data: any) => {
    return this.httpservices.post(`${UserService.url}User/ResetPassword`, data);
  };

  // createNote = (data: any) => {
  //   return this.httpservices.post(`${UserService.url}Notes`, data, true, {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     }),
  //   });
  // };
  // // getNotes = () => {
  // //   return this.httpservices.get(`${UserService.url}Notes`, true, {
  // //     headers: new HttpHeaders({
  // //       'Content-type': 'application/json',
  // //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  // //     }),
  // //   });
  // // };
}

