import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.Component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule{ }
