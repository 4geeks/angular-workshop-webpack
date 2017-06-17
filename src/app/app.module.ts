import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {NewNoteComponent} from './new-note.component';
import {HomeComponent} from './home.component';

import {RouterModule} from '@angular/router';
import {NotesListComponent} from './notes-list.component';
import {NotesServices} from "./notes.services";
import {NoteDetailsComponent} from "./Notes-details.component";


export const appRoutes = [
    {path: '', component: HomeComponent},
    {path: 'notes-list', component: NotesListComponent},
    {path: 'new-note', component: NewNoteComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
      NotesServices
    ],
    declarations: [
        AppComponent, NewNoteComponent, HomeComponent,
        NotesListComponent,
        NoteDetailsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
