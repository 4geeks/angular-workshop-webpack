import {Component} from '@angular/core';

import '../assets/css/styles.css';
import {DummyService} from "./dummy.service";
import {StateService} from "./global-state.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;

    constructor(private dummyService: DummyService,
                private state: StateService) {
        this.dummyService.sayMyName();
    }

    agregarTexto() {

        this.state.push(this.name);
        this.name = '';
    }

    verTexto() {
        let names = this.state.getNames();
        alert(JSON.stringify(names));
    }
}
