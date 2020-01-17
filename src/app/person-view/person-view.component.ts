import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../shared/models/note.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() inNote: Note; 
  @Output() delNote = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit() {
  }

  onDeleteNote () {
    this.delNote.emit(this.inNote.id);
  }

}
