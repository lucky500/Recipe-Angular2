import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/recipes">Recipes</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'List of Recipes';
}
