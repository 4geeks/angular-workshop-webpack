import {Component, Input, Output, EventEmitter} from '@angular/core';

import '../assets/css/styles.css';
import {NotesServices} from "./notes.services";

@Component({
    selector: 'noteDetails',
    template: `
        <div (click)="meHicieronClick()">
            <p>{{note.title}} (por {{note.owner}})</p>
            <p>{{note.description}}</p>
        </div>
    `,
    styleUrls: ['./app.component.css']
})

export class NoteDetailsComponent {
    @Output() onNoteClick = new EventEmitter();
    notesArray: any [];
    @Input() note: object;

    constructor() {
    }

    meHicieronClick() {
        this.onNoteClick.next({"e": "e"});
    }
}
