import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  @Input() note:any
  id: any;

  deleteNote(){
    console.log("Delete Method note",this.note);

    
    let data ={
       note_ID : this.id
    }
    
    console.log('Data --->',data);

    console.log("Note Array-->",this.note)


  //   this.noteService.DeleteNotes(data).subscribe((response:any)=>{
  //     console.log(response)
  //     console.log(" Deleted Note successfyull ");
  //     this.dataService.changeMessage("deleted")
  //   });
  // }

}
}
