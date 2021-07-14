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
  isOpen = true;
  title=''
  description=''
  hide = true;
  setColor='';
  click() {
    this.isOpen = true;
  }

  constructor(private noteservice : NotesService) { }
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addNote(){
    let data={
      header:this.title,
      body:this.description
    } 
    console.log(" add note data ", data);
    this.noteservice.createNote(data).subscribe((response)=>{
      console.log(response);
      let message="note created successfull"
      this.messageEvent.emit(message);
    })
  }
}
