import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  //note : UserRegister[];
  notes :Array<any>=[];
  
  dataService: any;



  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
    this.dataService.currentMessage.subscribe((msg: any)=>{
      console.log(" message ", msg);
      this.getAllNotes();
      
    })
  }
  receiveMessage($event: any){
    console.log(" message get all notee from craete note",$event);
    this.getAllNotes();
  }
  getAllNotes(){
    this.noteservice.getAllNotes().subscribe((respnse : any) => {
      console.log("Response------------>",respnse);
      this.notes = respnse;
      console.log("---->",this.notes);
      this.notes = this.notes.reverse();
      console.log("Array Reversed",this.notes);
    })
   console.log("Printing the notes");
    console.log(this.notes);

}
}
