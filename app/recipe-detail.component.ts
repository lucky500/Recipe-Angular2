import { Component, Input } from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'recipe-detail',
  template: `
    <div *ngIf="recipe">
      <p>{{recipe.name}} details</p>
      <div>
        <label>id: </label>
        {{recipe.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="recipe.name" placeholder="name">
      </div>
    </div>
  `
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
