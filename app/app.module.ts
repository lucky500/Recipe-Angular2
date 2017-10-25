import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { RouterModule }           from '@angular/router';

import { AppComponent }           from './app.Component';
import { RecipeDetailComponent }  from './recipe-detail.component';
import { RecipesComponent }       from './recipes.component';
import { RecipeService }          from './recipe.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'recipes',
        component: RecipesComponent
      }
    ])
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
