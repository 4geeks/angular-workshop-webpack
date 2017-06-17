import {Component, Input} from '@angular/core';


@Component({
    selector: 'new-component',
    template: `
        <h1>Mi primer componente: {{valor_entrada}}</h1>
    `
})
export class NewComponent {
    @Input() valor_entrada: number;

    constructor() {

    }
}
