import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';

import { AppComponent }           from './app.Component';
import { RecipeDetailComponent }  from './recipe-detail.component';
import { RecipesComponent }       from './recipes.component';
import { RecipeService }          from './recipe.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
      AppComponent,
      RecipeDetailComponent,
      RecipesComponent
   ],
   providers: [
     RecipeService
   ],
  bootstrap: [ AppComponent ]
})

export class AppModule{ }
