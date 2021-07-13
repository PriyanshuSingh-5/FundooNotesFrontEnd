import { Component,  OnInit, HostListener, ElementRef, AfterViewInit, Input, ViewChild, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
// import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createNoteForm!: FormGroup;
  takeNoteExpanded: boolean = false;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(200),Validators.minLength(1)]],
      noteText: ['', [Validators.maxLength(400)]]
  });
}
//   pin : boolean = false;
//   fullEdit : boolean = false;

//   @Output() messageEvent = new EventEmitter<string>();
  // constructor(private eRef: ElementRef, private elRef:ElementRef, private NotesService : NotesService) {  }
//   @HostListener('document:click', ['$event'])
//   clickout(event: any) {
//     if(!this.eRef.nativeElement.contains(event.target)) {
//       this.fullEdit = false;
//       this.createNote();
//       (<HTMLInputElement>document.getElementById("note")).innerText = '';
//     }
//   }

//   takeNote(){
//     this.createNote();
//     this.fullEdit = false;
//     (<HTMLInputElement>document.getElementById("note")).innerText = '';
//   }
//   createNote(){
//     let reqData={
//       userId : 12,
//       title :(<HTMLInputElement>document.getElementById("title"))?
//        (<HTMLInputElement>document.getElementById("title")).value:'',      
//        description : (<HTMLInputElement>document.getElementById("note")).innerText.trim(),
//        body:"45454",
//        reminder: "string",
//        color: "string",
//        image: "string",
//        archived: true,
//        trash: true,
//        pin: true,
//        createdDate: "2021-07-12T03:30:24.904Z",
//        modifiedDate: "2021-07-12T03:30:24.904Z"
//      // Pin: this.pin

//   }
//     if(reqData.description != ''){
//       this.NotesService.createNote(reqData).subscribe(
//         (response: any) => {
//         console.log(response);
//           this.messageEvent.emit()
//       });;
//     }
//     this.pin = false
//     console.log("Susscess");
//   }

//   ngAfterViewInit() {
//   }

//   ngOnInit(): void {
    
//   }
  
//   togglePin(){
//     this.pin = !this.pin; 
//   }
//   adjustHeight(event: any){
//     var target = event.target;
//    target.style.height = "1px";
//    target.style.height = (target.scrollHeight)+"px";
//   }
//   displayFull(){
//     this.fullEdit = true;
//   }
  
// }

  
  

 
//   createNoteForm: FormGroup;
//   takeNoteExpanded: boolean = false;
//   closeClickEvent: any;
  

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.createNoteForm = this.formBuilder.group({
//       title: ['', [Validators.maxLength(200),Validators.minLength(1)]],
//       noteText: ['', [Validators.maxLength(400)]]
//   });
  

//   @Output() const closeClickEvent = new EventEmitter<boolean>();
//   createNote(); {
//     this.takeNoteExpanded = false;
//     this.closeClickEvent.emit(false);
    
//   }

// }
// }

}