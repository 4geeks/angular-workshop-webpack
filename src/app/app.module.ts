import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NewNoteComponent} from './new-note.component';
import {HomeComponent} from './home.component';

import {RouterModule, Routes} from '@angular/router';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'app', component: AppComponent},
    {path: 'new-note', component: NewNoteComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    declarations: [
        AppComponent, NewNoteComponent, HomeComponent
    ],
    bootstrap: [HomeComponent]
})
export class AppModule {
}
