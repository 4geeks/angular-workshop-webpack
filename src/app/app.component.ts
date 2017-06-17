import {Component} from '@angular/core';
import {Http, Response}          from '@angular/http';

import {Observable} from 'rxjs/Observable';

import '../assets/css/styles.css';
import {DummyService} from "./dummy.service";
import {AppService} from "./app.service";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private appService: AppService) {
        let observableResponse: Observable<Response> = this.appService.getNotes();
        observableResponse.subscribe((data) => {
            console.log(data.json());
        });
    }
}
