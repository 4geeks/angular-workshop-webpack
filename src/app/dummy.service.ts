import { Injectable } from '@angular/core';


@Injectable()
export class DummyService {
    constructor() {

    }

    sayMyName() {
        console.log('Dummy Service');

    }
}