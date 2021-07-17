import { HttpHeaders } from '@angular/common/http';
import { HTTPService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  options: any;
  constructor(private http : HTTPService) { }

 
  static url = 'https://localhost:44341/';
  createNote = (data: any) => {
    return this.http.post(`${NotesService.url}api/Notes/add`,data)
  };

  // getNotes = () => {
  //   return this.http.get(`${NotesService.url}api/Notes`, data) 
     
  // };

  getAllNotes(){
    return this.http.get(`${NotesService.url}api/Notes/GetNoteById`,data);
  }

  GetActiveNotes(){

    return this.http.get('${NotesService.url}api/Notes/GetNoteById', this.options)
  }
  
  // createNote(data: any){
  //   console.log("data in note service",data);
  //   return this.http.post('/api/Notes',data);
  // }

  // getAllNotes(){
  //   return this.http.get('/api/Note/Details');
  // }
  }


function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

