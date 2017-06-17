import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'app',
  template: `
      <h1>My First Angular App</h1>
        <nav>
            <a routerLink="/app">Dashboard</a>
            <a routerLink="/new-note">New Note</a>
      </nav>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
  constructor(){
    alert("HOME");
  }
}
