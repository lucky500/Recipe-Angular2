import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col s12">
        <h5>{{title}}</h5>
        <ul class="recipes">
          <li *ngFor="let recipe of recipes"
            [class.selected]="recipe === selectedRecipe"
            (click)="onSelect(recipe)">
            <span>{{recipe.id}}</span> - {{recipe.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .recipes li {
      color: #2c3e50; }
    .recipes li.selected:hover {
        background-color: #2980b9 !important;
        color: #ecf0f1; }
    .recipes li:hover {
        color: #7f8c8d;
        left: .1em; }
  `]
})

export class AppComponent {
  title = 'List of Recipes';
  recipes = RECIPES;
  selectedRecipe: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}

const RECIPES: Recipe[] = [
  { id: 2, name: 'Zucchini Enchiladas'},
  { id: 3, name: 'Chicken Zucchini Alfredo'},
  { id: 4, name: 'Cheesesteak Stuffed Peppers'},
  { id: 5, name: 'Mini Pepper Pizzas'},
  { id: 6, name: 'Tuscan Spaghetti Squash'},
  { id: 7, name: 'Zucchini Taco Roll-Ups'}
];
