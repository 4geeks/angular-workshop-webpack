import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {DummyService} from './dummy.service';
import {StateService} from './global-state.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [DummyService, StateService]
})
export class AppModule {

}
