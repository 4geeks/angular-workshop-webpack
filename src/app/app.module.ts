import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NewNoteComponent} from './new-note.component';
import {HomeComponent} from './home.component';

import {RouterModule} from '@angular/router';
import {NotesListComponent} from './notes-list.component';


export const appRoutes = [
    {path: '', component: HomeComponent},
    {path: 'notes-list', component: NotesListComponent},
    {path: 'new-note', component: NewNoteComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    declarations: [
        AppComponent, NewNoteComponent, HomeComponent,
        NotesListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
