import {Component} from '@angular/core';

import '../assets/css/styles.css';
import {NotesServices} from "./notes.services";

@Component({
    selector: 'home',
    template: `
        <div *ngFor="let note of notesArray">
            <noteDetails [note]="note" (onNoteClick)="tell()"></noteDetails>
        </div>
    `,
    styleUrls: ['./app.component.css']
})

export class NotesListComponent {
    notesArray: any [];

    constructor(private Notes: NotesServices) {
        const parent = this;
        Notes.getNotes()
            .subscribe(
                (data) => {
                    parent.notesArray = data.json();
                }
            );
    }

    tell() {
        alert("Note clicked!!!!");
    }
}
