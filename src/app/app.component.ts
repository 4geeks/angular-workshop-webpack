import {Component} from '@angular/core';

import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    template: `
        <main>
            <h1>
                Hello from Angular App with Webpack: {{contador}}
            </h1>
            <input type="button" (click)="aumentarContador()"
            value="Aumentar El contador"/>

            <new-component [valor_entrada]="contador"></new-component>
            
            <input type="text" [(ngModel)]="contador"/>
        </main>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    contador: number;

    constructor() {
        this.contador = 5;
    }

    aumentarContador() {
        this.contador++;
    }
}
