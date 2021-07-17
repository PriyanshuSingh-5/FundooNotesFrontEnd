import { AfterViewInit,  ChangeDetectorRef,  Directive, ElementRef, HostListener,  OnChanges,  QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

import { NotesComponent } from 'src/app/Components/notes/notes.component';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

 export class DashboardComponent implements OnInit {

  isExpanded: boolean = false;
  updating: boolean = false;
  NotesService: any;
  notes: any;
  deleteNoteId: any;
  
  constructor(private renderer: Renderer2, private elRef:ElementRef, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public route: Router) {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.updating)    
    console.log(changes)
  }
  ngOnInit(): void {
       
  }

 

  
  }
