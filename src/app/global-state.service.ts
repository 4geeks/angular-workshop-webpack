import {Injectable} from '@angular/core';


@Injectable()
export class StateService {
    names: string[];

    constructor() {
        this.names = Array();
    }

    push(name: string) {
        this.names.push(name);
    }

    getNames() {
        return this.names;
    }
}