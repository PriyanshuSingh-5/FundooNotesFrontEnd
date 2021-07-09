import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  isPopUp: boolean = false;
  
  createNoteForm!: FormGroup;
  takeNoteExpanded: boolean = false;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(200),Validators.minLength(1)]],
      noteText: ['', [Validators.maxLength(400)]]
  });
  openCard(); {
    this.isPopUp = !this.isPopUp;
  }

  // @Output() const closeClickEvent = new EventEmitter<boolean>();
  // createNote() {
    this.takeNoteExpanded = false;
    
  }

}

function openCard() {
  throw new Error('Function not implemented.');
}
  // function createNote() {
  //   throw new Error('Function not implemented.');
  // }

