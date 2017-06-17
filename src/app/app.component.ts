import {Component} from '@angular/core';

import '../assets/css/styles.css';
import {DummyService} from "./dummy.service";
import {AppService} from "./app.service";
import {Note} from "./note.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private dummyService: DummyService, private appService: AppService) {
        this.dummyService.sayMyName();
        this.appService.getHeroes().subscribe((data: Note[]) => {
            console.log(data);
        });
    }
}
