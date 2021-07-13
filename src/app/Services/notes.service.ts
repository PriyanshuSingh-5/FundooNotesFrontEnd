import { HttpHeaders } from '@angular/common/http';
import { HTTPService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  headers = new HttpHeaders()
  .set('Authorization', 'Bearer '+localStorage.getItem('FunDooNotesJWT')); 
  options = { headers: this.headers };
  constructor(private httpService : HTTPService) { }
  createNote(data: any){
    return this.httpService.post('api/Notes/AddNote', data,{ headers: this.headers })
  
 
  // GetActiveNotes(){

  //   return this.httpService.Get('api/Notes/GetNotes', this.options)
  // }) 
  }
} 