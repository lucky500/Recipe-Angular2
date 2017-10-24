import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'my-recipes',
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
        <recipe-detail [recipe]="selectedRecipe"></recipe-detail>
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
  `],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  title = 'Recipes';
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
