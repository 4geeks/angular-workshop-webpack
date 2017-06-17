import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import '../assets/css/styles.css';

@Injectable()
export class NotesServices {
  apiUrl = 'http://localhost:8000/notes/';

  constructor(private http: Http ) {

  }
  createNewNote(note: object ) {
    const resul = this.http.post(this.apiUrl, note);
    return resul;
  }
  getNotes() {
    const resul = this.http.get(this.apiUrl);
    return resul;
  }
}
