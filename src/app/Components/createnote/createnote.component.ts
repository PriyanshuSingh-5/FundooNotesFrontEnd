import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  
  createNoteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(200),Validators.minLength(1)]],
      noteText: ['', [Validators.maxLength(400)]]
  });
  
  }

}
