import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {DummyService} from './dummy.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [DummyService]
})
export class AppModule {
}
