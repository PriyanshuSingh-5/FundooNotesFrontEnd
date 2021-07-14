import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  open=true;
  pinNote(card:any){

  };
  pin(){

  }
  card='';
  isTrash=true;
  @Input() AllNotes: any

  constructor(public dialog: MatDialog) { }
   

  ngOnInit(): void {
  }

  openDialog(card: any): void {
    const dialogRef = this.dialog.open(NotesComponent, {
      width: '360px',
      data: {note: card}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}


  




