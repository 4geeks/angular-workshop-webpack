import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'new-note',
  template: '<h1>New Note component</h1>',
  styleUrls: ['./app.component.css']
})
export class NewNoteComponent {
  constructor(){
    alert("HOLA MUNDO NUEVO");
  }
}
