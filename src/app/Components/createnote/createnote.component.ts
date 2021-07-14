import { Component,  OnInit, HostListener, ElementRef, AfterViewInit, Input, ViewChild, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators, } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notes.service';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createNoteForm: FormGroup = new FormGroup ({title:new FormControl, description: new FormControl});
  takeNoteExpanded: boolean = false;
  title=''
  description=''
  

  constructor(private formBuilder: FormBuilder, private noteService : NotesService) { 
    createNoteForm: FormGroup;
  }

  ngOnInit(): void {
    
}

Create = (createNoteForm: { title: any; description: any }) => {
  let data={
    title:this.title,
    description:this.description
  } 
  console.log(" add note data ", data);
  this.noteService.createNote(data).subscribe((response)=>{
    console.log(response);
    let message="note created successfull"
    // this.messageEvent.emit(message);
  })
}
}

