import { Component } from '@angular/core';

import '../assets/css/styles.css';
import {NotesServices} from "./notes.services";

@Component({
  selector: 'new-note',
  template: '<h1>NEW NOTE</h1> <br> <input [(ngModel)]="note.title"> <br> <input [(ngModel)]="note.owner"> <br> <input [(ngModel)]="note.description"> <br> <input type="button" value="Enviar" (click)="Enviar()">',
  styleUrls: ['./app.component.css']
})
export class NewNoteComponent {
  newNote: string;
  note: object;

  constructor(private NewNotes: NotesServices) {
    this.note={};
  }
  Enviar() {
    const resul = this.NewNotes.createNewNote( this.note );
    resul.subscribe((data) => {
      console.log(data);
    });
  }
}
