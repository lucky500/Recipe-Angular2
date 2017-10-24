import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-recipes></my-recipes>
  `
})
export class AppComponent {
  title = 'List of Recipes';
}
