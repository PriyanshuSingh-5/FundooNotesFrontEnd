import { HttpHeaders } from '@angular/common/http';
import { HTTPService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http : HTTPService) { }

  headers = new HttpHeaders()
  .set('Authorization', 'Bearer '+localStorage.getItem('FunDooJwt')); 
   options = { headers: this.headers };
  

  createNote(data: any) {
    console.log(" data in user services ", data );
    return this.http.post('/Notes', data, this.options);
  }
  // static url = 'https://localhost:44341/api/';
  // createNote = (data: any) => {
  //   return this.http.post(`${NotesService.url}Notes`,data)
  // };

  // createNote(data: any){
  //   console.log("data in note service",data);
  //   return this.http.post('/api/Notes',data);
  // }

  // getAllNotes(){
  //   return this.http.get('/api/Note/Details');
  // }
  }
